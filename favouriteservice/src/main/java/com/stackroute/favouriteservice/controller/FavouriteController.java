package com.stackroute.favouriteservice.controller;

import com.stackroute.favouriteservice.exception.PlayerAlreadyAddedException;
import com.stackroute.favouriteservice.model.User;
import com.stackroute.favouriteservice.rabbitmq.Producer;
import com.stackroute.favouriteservice.service.FavouriteService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/favourite/")
public class FavouriteController {

    public static final Logger LOG = LoggerFactory.getLogger(FavouriteController.class);

    private FavouriteService favouriteService;

    private ResponseEntity responseEntity;
    private Map<String, String> map = new HashMap<>();
    @Autowired
    private Producer producer;

    public FavouriteController(FavouriteService favouriteService) {
        this.favouriteService = favouriteService;
    }

    @ApiOperation(value = " Add Player to User favourite", tags = " Add favourite to User")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Success | OK"),
        @ApiResponse(code = 302, message = "Already addded"),
        @ApiResponse(code = 404, message = "Not added")
    })

    @PostMapping("/add")
    public ResponseEntity<?> addFavourite(@RequestBody User user) {
        LOG.info(" inside   addFavourite" + user);
        try {

            boolean created = favouriteService.addFavourite(user);
            if (created) {
                producer.sendMessageToRabbitMQ(user.getFaPlayers().get(0));
                map.put("message", "Added");
                return new ResponseEntity<>(map, HttpStatus.CREATED);
            }else{
                map.put("message", "Not added.");
                 return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
            } 
        } catch (PlayerAlreadyAddedException e) {
             map.put("message", "Added already");
            return new ResponseEntity<>(map, HttpStatus.CONFLICT);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
          
       // return responseEntity;
    }

    @ApiOperation(value = " Get Favourites for a user", tags = "  Get Favourites")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Success | OK"),
         @ApiResponse(code = 404, message = "User not found"),
        @ApiResponse(code = 500, message = "Internal error")
    })

    @GetMapping("/get/{userName}")
    public ResponseEntity<?> getFavourites(@PathVariable String userName) {

        try {

            User user = favouriteService.getFavourites(userName);

            if (user != null) {
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
            }

        } catch (Exception e) {
            e.printStackTrace();
            responseEntity = new ResponseEntity<>("Some internal Error Occured..", HttpStatus.INTERNAL_SERVER_ERROR);

        }

        return responseEntity;
    }

}
