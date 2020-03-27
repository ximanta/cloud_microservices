/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.playerrecommendationservice.service;

import com.stackroute.playerrecommendationservice.model.Player;
import java.util.List;


/**
 *
 * @author RameshKumar
 */
public interface PlayerRecommendationService {
    
    public boolean updateLikes(Player player);
    
    public  List<Player> getRecommentedPlayers();
    
}
