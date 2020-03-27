/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.favouriteservice.service;

import com.stackroute.favouriteservice.exception.PlayerAlreadyAddedException;
import com.stackroute.favouriteservice.model.FavouritePlayer;
import com.stackroute.favouriteservice.model.User;

/**
 *
 * @author RameshKumar
 */
public interface FavouriteService {
    
    public boolean addFavourite(User user) throws PlayerAlreadyAddedException;
    
    public  User getFavourites(String userName);
    
}
