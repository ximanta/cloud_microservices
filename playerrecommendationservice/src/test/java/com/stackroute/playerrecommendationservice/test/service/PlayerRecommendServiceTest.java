/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.playerrecommendationservice.test.service;

import com.stackroute.playerrecommendationservice.model.Player;
import com.stackroute.playerrecommendationservice.repository.PlayerRepository;
import com.stackroute.playerrecommendationservice.service.PlayerRecommendationServiceImpl;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.boot.test.mock.mockito.MockBean;

/**
 *
 * @author RameshKumar
 */
public class PlayerRecommendServiceTest {

    @MockBean
    private Player player;
    List<Player> players;

    @Mock
    private PlayerRepository playerRepository;

    @InjectMocks
    private PlayerRecommendationServiceImpl playerRecommendServiceImpl;
    Optional<Player> options;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        players = new ArrayList<Player>();
        player = new Player();

        player.setPlayerId("123");
        player.setLikes(2);
        player.setPlayerName("Sachin Tendulkar");
        players.add(player);
        options = Optional.of(player);

//        
    }

    @Test
    public void getRecommendedPlayerSuccess() {

        when(playerRepository.findAll()).thenReturn(players);
        List<Player> recomPlayers = playerRecommendServiceImpl.getRecommentedPlayers();
        Assert.assertEquals(1, recomPlayers.size());

    }

    @Test
    public void updateLikesSuccess() {

        when(playerRepository.findById("123")).thenReturn(options);
        when(playerRepository.findAll()).thenReturn(players);
        playerRecommendServiceImpl.updateLikes(player);
        List<Player> recomPlayers = playerRecommendServiceImpl.getRecommentedPlayers();
        Assert.assertEquals(3, recomPlayers.get(0).getLikes());

    }
}
