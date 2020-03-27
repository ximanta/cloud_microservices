/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.favouriteservice.test.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.favouriteservice.controller.FavouriteController;
import com.stackroute.favouriteservice.model.FavouritePlayer;
import com.stackroute.favouriteservice.model.User;
import com.stackroute.favouriteservice.service.FavouriteService;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.junit.Before;
import org.junit.Test;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import static org.mockito.Mockito.when;
import com.stackroute.favouriteservice.rabbitmq.Producer;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import static org.springframework.amqp.rabbit.connection.SimpleResourceHolder.get;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

/**
 *
 * @author RameshKumar
 */
@RunWith(SpringRunner.class)
@WebMvcTest
public class FavouriteServiceControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private User user;
    @MockBean
    private FavouritePlayer player;
    @MockBean
    FavouriteService favouriteService;
    @InjectMocks
    FavouriteController favouriteController;
    @MockBean
    private Producer producer;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(favouriteController).build();
        user = new User();
        List<FavouritePlayer> faPlayers = new ArrayList<FavouritePlayer>();
        user.setUserName("jhon123");
        player = new FavouritePlayer();
        player.setPlayerId("123");
        player.setPlayerName("sachin");
        faPlayers.add(player);
        user.setFaPlayers(faPlayers);
//        
    }

    @Test
    public void addFavouriteSuccess() throws Exception {
        System.out.println("favouriteService"+favouriteService);
        when(favouriteService.addFavourite(any())).thenReturn(true);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/favourite/add").contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(MockMvcResultHandlers.print());

    }

     @Test
    public void addFavouriteFailure() throws Exception {
        when(favouriteService.addFavourite(any())).thenReturn(false);
        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/favourite/add").contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(user)))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());

    }
    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
