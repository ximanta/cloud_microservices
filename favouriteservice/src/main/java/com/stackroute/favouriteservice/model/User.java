/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.favouriteservice.model;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author RameshKumar
 */
@Document
public class User {

    public User() {
    }

    @Override
    public String toString() {
        return "User{" + "userName=" + userName + ", faPlayers=" + faPlayers + '}';
    }

    public String getUserName() {
        return userName;
    }

    public User(String userName, List<FavouritePlayer> faPlayers) {
        this.userName = userName;
        this.faPlayers = faPlayers;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public List<FavouritePlayer> getFaPlayers() {
        return faPlayers;
    }

    public void setFaPlayers(List<FavouritePlayer> faPlayers) {
        this.faPlayers = faPlayers;
    }
    
     @Id
    private String userName;
     
     private List<FavouritePlayer> faPlayers;
     
    
}
