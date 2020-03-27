package com.stackroute.userservice.service;

import com.stackroute.userservice.exception.UserAlreadyExistsException;
import com.stackroute.userservice.exception.UserNotFoundException;
import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.UserAutheticationRepository;
import java.time.LocalDateTime;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserAuthenticationServiceImpl implements UserAuthenticationService {

    @Autowired
    public UserAutheticationRepository userAuthRepository;

    @Override
    public User findByUserIdAndPassword(String userId, String password) throws UserNotFoundException {

        User user = userAuthRepository.findByUserIdAndUserPassword(userId, password);

        if (user == null) {
            throw new UserNotFoundException("User not found");
        }
        return user;
    }

    /*
     * This method should be used to save a new user.Call the corresponding method
     * of Respository interface.
     */
    @Override
    public boolean saveUser(User user) throws UserAlreadyExistsException {
        User exUser = userAuthRepository.findById(user.getUserName()).orElse(null);
        user.setUserAddedDate(new Date());
        if (exUser != null) {
            throw new UserAlreadyExistsException("Useralready existes");
        }
        User us = userAuthRepository.save(user);
        if (us != null) {
            return true;
        } else {
            return true;
        }
    }
}
