/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.playerrecommendationservice.test.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.playerrecommendationservice.controller.PlayerRecommendationController;
import com.stackroute.playerrecommendationservice.model.Player;
import com.stackroute.playerrecommendationservice.service.PlayerRecommendationService;
import java.util.ArrayList;
import java.util.List;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

/**
 *
 * @author RameshKumar
 */
@RunWith(SpringRunner.class)
@WebMvcTest
public class PlayerRecommendationControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private Player player;
    List<Player> players;
    @MockBean
    PlayerRecommendationService palyerRecomendService;

    @InjectMocks
    PlayerRecommendationController playerRecommendationController;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(playerRecommendationController).build();
        players = new ArrayList<Player>();
        player = new Player();
        player.setPlayerId("123");
        player.setLikes(2);
        player.setPlayerName("Sachin Tendulkar");
        players.add(player);

    }

    @Test
    public void getRecommendedPlayersSuccess() throws Exception {

        when(palyerRecomendService.getRecommentedPlayers()).thenReturn(players);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/v1/playerRecommend/get").contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(players)))
                .andExpect(MockMvcResultMatchers.status().isOk())
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
