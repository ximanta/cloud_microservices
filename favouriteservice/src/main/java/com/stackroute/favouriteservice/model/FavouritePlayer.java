/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.favouriteservice.model;

/**
 *
 * @author RameshKumar
 */
public class FavouritePlayer {
    
    private String playerId;

    @Override
    public String toString() {
        return "FavouritePlayer{" + "playerId=" + playerId + ", playerName=" + playerName + '}';
    }
    
    private String playerName;

    public String getPlayerId() {
        return playerId;
    }

    public void setPlayerId(String playerId) {
        this.playerId = playerId;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }
}
