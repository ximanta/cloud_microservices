/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.favouriteservice.test.service;

import com.stackroute.favouriteservice.exception.PlayerAlreadyAddedException;
import com.stackroute.favouriteservice.model.FavouritePlayer;
import com.stackroute.favouriteservice.model.User;
import com.stackroute.favouriteservice.repository.FavouriteRepository;
import com.stackroute.favouriteservice.service.FavouriteServiceImpl;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.mock.mockito.MockBean;

/**
 *
 * @author RameshKumar
 */
public class FavouriteServiceImplTest {

    @MockBean
    private User user;
    @MockBean
    private FavouritePlayer player;
    @MockBean
    private FavouritePlayer player1;
    @Mock
    private FavouriteRepository favRepository;

    @InjectMocks
    private FavouriteServiceImpl favouriteServiceImpl;

    private List<FavouritePlayer> favouriteList = null;
    Optional<User> options;

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
        options = Optional.of(user);
//        
    }

    @Test
    public void addFavouriteSuccess() throws PlayerAlreadyAddedException {

        when(favRepository.findById("Jhon123")).thenReturn(options);
        List<FavouritePlayer> allPalyers = favouriteServiceImpl.getFavourites("Jhon123").getFaPlayers();

        Assert.assertEquals(favouriteList.get(0).getPlayerId(), allPalyers.get(0).getPlayerId());
        User updateUser = new User();
        updateUser.setUserName("Jhon123");
        List addFavouriteList = new ArrayList<FavouritePlayer>();
        player1 = new FavouritePlayer();
        player1.setPlayerId("456");
        player1.setPlayerName("virat");
        addFavouriteList.add(player1);
        updateUser.setFaPlayers(addFavouriteList);
       
        favouriteServiceImpl.addFavourite(updateUser);
        allPalyers = favouriteServiceImpl.getFavourites("Jhon123").getFaPlayers();
        Assert.assertEquals(2, allPalyers.size());

    }

    @Test(expected = PlayerAlreadyAddedException.class)
    public void addFavouriteFailure() throws PlayerAlreadyAddedException {
       when(favRepository.findById("Jhon123")).thenReturn(options);
        boolean status = favouriteServiceImpl.addFavourite(user);
        Assert.assertEquals(false, status);
    }
      @Test
    public void getFavouriteSuccess() {
        when(favRepository.findById("Jhon123")).thenReturn(options);
       List<FavouritePlayer> favList= favouriteServiceImpl.getFavourites("Jhon123").getFaPlayers();
        Assert.assertEquals(1, favList.size());
    }

}
