package com.stackroute.userservice.controller;

import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserIdAndPasswordMismatchException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.exception.UserNullException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.service.UserAuthenticationService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/user")
public class UserAuthenticationController {

    public static final Logger LOG = LoggerFactory.getLogger(UserAuthenticationController.class);

    @Autowired
    private UserAuthenticationService userAuthService;

    // private ResponseEntity responseEntity;
    private Map<String, String> map = new HashMap<>();

    public UserAuthenticationController(UserAuthenticationService authicationService) {
        this.userAuthService = authicationService;
    }

    @ApiOperation(value = "Register user", tags = "Save User to DB")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Success | OK"),
        @ApiResponse(code = 409, message = "userName conflicts with any existing user")
    })
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        LOG.info("Inside registerUser " + user.toString());

        try {

            userAuthService.saveUser(user);
            map.put("message", "User Created");
            return new ResponseEntity<>(map, HttpStatus.OK);
        } catch (UserAlreadyExistsException e) {
            map.put("message", "User Name Conflict");
            return new ResponseEntity<>(map, HttpStatus.CONFLICT);

        } catch (Exception e) {
            return new ResponseEntity<>("Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @ApiOperation(value = " Authenticate user", tags = "Autenticate User")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Success | OK"),
        @ApiResponse(code = 401, message = "UNAUTHORIZED")
    })

    @PostMapping("/login")
    public ResponseEntity<?> LoginUser(@RequestBody User user) {
        try {

            String jwtToken = getToken(user.getUserName(), user.getUserPassword());
            map.put("message", "User Successfully LoggedIn");
            map.put("token", jwtToken);

        } catch (UserIdAndPasswordMismatchException e) {
            map.put("message", e.getMessage());
            map.put("token", null);
            return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(map, HttpStatus.OK);
    }

// Generate JWT token
    public String getToken(String username, String password) throws Exception {

        String jwtToken = "";
        if (username == null || password == null) {
            throw new UserNullException("Please send valid username and password");
        }

        //validate user aginst db
        try {
            User user = userAuthService.findByUserIdAndPassword(username, password);
        } catch (UserNotFoundException e) {
            throw new UserIdAndPasswordMismatchException("Invalid Credentials");
        }

        jwtToken = Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1800000))
                .signWith(SignatureAlgorithm.HS256, "ramesh")
                .compact();

        return jwtToken;

    }

    @ApiOperation(value = " Validate Token", tags = " Validate Token")
    @ApiResponses(value = { //  @ApiResponse(Boo),
    })
    @PostMapping("/isAuthenticated")
    public boolean validateToken(@RequestBody String token) {

        LOG.info("Inside validateToken " + token);
        try {

            Jws<Claims> claims = Jwts.parser().setSigningKey("ramesh").parseClaimsJws(token);
            if (claims.getBody().getExpiration().before(new Date())) {
                return false;
            } else {
                return true;
            }

        } catch (Exception e) {
            //e.printStackTrace();
            return false;
        }
    }

}
