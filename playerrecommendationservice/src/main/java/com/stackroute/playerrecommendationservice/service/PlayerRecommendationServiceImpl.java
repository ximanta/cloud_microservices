/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.playerrecommendationservice.service;

import com.stackroute.playerrecommendationservice.model.Player;
import com.stackroute.playerrecommendationservice.repository.PlayerRepository;
import java.util.List;

import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;

/**
 *
 * @author RameshKumar
 */
@Service
public class PlayerRecommendationServiceImpl implements PlayerRecommendationService {

    @Autowired
    PlayerRepository playerRepository;

    @Override
    public boolean updateLikes(Player player) {
        boolean isUpdated = false;
        Optional<Player> exUser = playerRepository.findById(player.getPlayerId());
        if (exUser.isPresent()) {
            Player playerTobeUpdated = exUser.get();
            int curentLikes = playerTobeUpdated.getLikes();
            playerTobeUpdated.setLikes(curentLikes + 1);
            playerRepository.save(playerTobeUpdated);
            isUpdated = true;
        } else {
            player.setLikes(1);
            playerRepository.save(player);
            isUpdated = true;
        }
        return isUpdated;
    }

    @Override
    public List<Player> getRecommentedPlayers() {
        return playerRepository.findAll();
    }

}
