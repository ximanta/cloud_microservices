/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.favouriteservice.test.repository;

import com.stackroute.favouriteservice.model.FavouritePlayer;
import com.stackroute.favouriteservice.model.User;
import com.stackroute.favouriteservice.repository.FavouriteRepository;
import com.stackroute.favouriteservice.service.FavouriteService;
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
public class FavouriteRepositoryTest {
   
     
    private User user;
   
    private FavouritePlayer player;
    @Autowired
    FavouriteRepository  favouriteRepository;
    
    private List<FavouritePlayer> favouriteList = null;
    
     @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
       
        user = new User();
       favouriteList = new ArrayList<FavouritePlayer>();
        user.setUserName("Jhon123");
        player = new FavouritePlayer();
        player.setPlayerId("123");
        player.setPlayerName("sachin");
        favouriteList.add(player);
        user.setFaPlayers(favouriteList);
//        
    }
     @After
    public void tearDown() throws Exception {

        favouriteRepository.deleteAll();
    }
    
     @Test
    public void createUserTest() {
        favouriteRepository.insert(user);
        List<FavouritePlayer> favPlayers = favouriteRepository.findById("Jhon123").get().getFaPlayers();
        Assert.assertEquals(favouriteList.get(0).getPlayerId(), favPlayers.get(0).getPlayerId());
    }


    @Test
    public void updateUserTest() {

        favouriteRepository.insert(user);
        List<FavouritePlayer> allPalyers = favouriteRepository.findById("Jhon123").get().getFaPlayers();
        Assert.assertEquals(favouriteList.get(0).getPlayerId(), allPalyers.get(0).getPlayerId());
        Iterator iterator = allPalyers.listIterator();
        while (iterator.hasNext()) {
            player = (FavouritePlayer) iterator.next();
            if (player.getPlayerId().equals("123"))
                player.setPlayerName("sachin tendulkar");
        }
        user.setFaPlayers(allPalyers);
        favouriteRepository.save(user);
        allPalyers = favouriteRepository.findById("Jhon123").get().getFaPlayers();
        Assert.assertEquals("sachin tendulkar", allPalyers.get(0).getPlayerName());
    }

 
    @Test
    public void getFavouriteByUserName() {

        favouriteRepository.insert(user);
        List<FavouritePlayer> favList = favouriteRepository.findById("Jhon123").get().getFaPlayers();
        Assert.assertEquals(1, favList.size());
    }
    
}
