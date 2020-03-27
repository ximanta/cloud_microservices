package com.stackroute.playerrecommendationservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.playerrecommendationservice.model.Player;
import com.stackroute.playerrecommendationservice.service.PlayerRecommendationService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
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
@RequestMapping("/api/v1/playerRecommend/")
public class PlayerRecommendationController {

    public static final Logger LOG = LoggerFactory.getLogger(PlayerRecommendationController.class);

    private PlayerRecommendationService palyerService;

    private ResponseEntity responseEntity;

    public PlayerRecommendationController(PlayerRecommendationService palyerService) {
        this.palyerService = palyerService;
    }

    @ApiOperation(value = " Get Recommended Players", tags = " Get Recommended Players")
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "Success | OK"),
        @ApiResponse(code = 500, message = "Internal Error")
    })
    @GetMapping("/get")
    public ResponseEntity<?> getRecommended() {

        try {

            List<Player> players = palyerService.getRecommentedPlayers();
            List<Player> sorted = players.stream().sorted(Comparator.comparingInt(Player::getLikes).reversed()).collect(Collectors.toList());

            if (players != null) {
                return new ResponseEntity<>(sorted, HttpStatus.OK);
            }

        } catch (Exception e) {
            e.printStackTrace();
            responseEntity = new ResponseEntity<>("Some internal Error Occured..", HttpStatus.INTERNAL_SERVER_ERROR);

        }

        return responseEntity;
    }

}
