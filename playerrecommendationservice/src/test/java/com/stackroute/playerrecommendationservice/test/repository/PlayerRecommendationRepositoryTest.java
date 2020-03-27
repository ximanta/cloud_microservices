/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.playerrecommendationservice.test.repository;


import com.stackroute.playerrecommendationservice.model.Player;
import com.stackroute.playerrecommendationservice.repository.PlayerRepository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

/**
 *
 * @author RameshKumar
 */
@RunWith(SpringRunner.class)
@DataMongoTest
public class PlayerRecommendationRepositoryTest {
   
     
    private Player player;
   
   
    @Autowired
    PlayerRepository  playerRepository;
    
    
    
     @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
       
        player = new Player();
      
        player.setPlayerId("123");
        player.setLikes(2);
        player.setPlayerName("Sachin Tendulkar");
       
//        
    }
     @After
    public void tearDown() throws Exception {

        playerRepository.deleteAll();
    }
    
     @Test
    public void createPlayerTest() {
        playerRepository.insert(player);
        Player player1 = playerRepository.findById("123").get();
        Assert.assertEquals(player1.getPlayerId(), player.getPlayerId());
    }

    @Test
    public void updatePlayerTest() {
       
        playerRepository.insert(player);
        Player player1 = playerRepository.findById("123").get();
        player1.setLikes(3);
        playerRepository.save(player1);
       Player  player2 =playerRepository.findById("123").get();
        Assert.assertEquals(3,player2.getLikes());
    }

    
}
