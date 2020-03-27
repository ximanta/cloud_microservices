package com.stackroute.userservice.test.service;


import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.UserAutheticationRepository;
import com.stackroute.userservice.service.UserAuthenticationServiceImpl;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.Date;
import java.util.Optional;

public class UserAuthenticationServiceTest {

    @Mock
    private UserAutheticationRepository autheticationRepository;

    private User user;
    @InjectMocks
    private UserAuthenticationServiceImpl authenticationService;

    Optional<User> optional;


    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        user = new User();
        user.setUserName("Jhon123");
        user.setFirstName("Jhon");
        user.setLastName("Smith");
        user.setUserPassword("123456");
        user.setUserAddedDate(new Date());
        optional = Optional.of(user);
    }

    @Test
    public void testSaveUserSuccess() throws UserAlreadyExistsException {

        Mockito.when(autheticationRepository.save(user)).thenReturn(user);
        boolean flag = authenticationService.saveUser(user);
        Assert.assertEquals("Cannot Register User", true, flag);

    }


    @Test(expected = UserAlreadyExistsException.class)
    @Ignore
    public void testSaveUserFailure() throws UserAlreadyExistsException {

        Mockito.when(autheticationRepository.findById("Jhon123")).thenReturn(optional);
        Mockito.when(autheticationRepository.save(user)).thenReturn(user);
        boolean flag = authenticationService.saveUser(user);
        Assert.assertEquals("Cannot Register User", true, flag);

    }

  
}
