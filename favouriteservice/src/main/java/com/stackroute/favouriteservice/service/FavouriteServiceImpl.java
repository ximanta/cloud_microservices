/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.favouriteservice.service;

import com.stackroute.favouriteservice.exception.PlayerAlreadyAddedException;
import com.stackroute.favouriteservice.model.FavouritePlayer;
import com.stackroute.favouriteservice.model.User;
import com.stackroute.favouriteservice.repository.FavouriteRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author RameshKumar
 */
@Service
public class FavouriteServiceImpl implements FavouriteService {

    @Autowired
    FavouriteRepository favouriteRepository;

    @Override
    public boolean addFavourite(User user) throws PlayerAlreadyAddedException {
        boolean isAdded = false;
         User  userTobeUpdated= favouriteRepository.findById(user.getUserName()).orElse(null);
        if (userTobeUpdated!=null) {
            
            System.out.println("INSIDEEE addFavourite"+user.toString());
            FavouritePlayer faPlayer = userTobeUpdated.getFaPlayers().stream().filter(p -> p.getPlayerId().equals(user.getFaPlayers().get(0).getPlayerId())).findFirst().orElse(null);
            if (faPlayer != null) {
                throw new PlayerAlreadyAddedException("Player already added");
            };
            userTobeUpdated.getFaPlayers().add(user.getFaPlayers().get(0));
            favouriteRepository.save(userTobeUpdated);
            isAdded = true;
        } else {
            User newUser = new User();
            newUser.setUserName(user.getUserName());
            newUser.setFaPlayers(user.getFaPlayers());
            favouriteRepository.save(newUser);
            isAdded = true;
        }
        return isAdded;
    }

    @Override
    public User getFavourites(String userName) {
        Optional<User> exUser = favouriteRepository.findById(userName);
        if (exUser.isPresent()) {
            return exUser.get();
        }
        return new User();
    }

}
