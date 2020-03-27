package com.stackroute.userservice.test.repository;


import com.stackroute.userservice.model.User;
import com.stackroute.userservice.repository.UserAutheticationRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.persistence.Query;
import java.util.Date;
import java.util.Optional;
import org.junit.After;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)


public class UserAuthenticationRepositoryTest {

    @Autowired
    private UserAutheticationRepository autheticationRepository ;

    private User user;


    @Before
    public void setUp() throws Exception {
        user = new User();
       user = new com.stackroute.userservice.model.User();
        user.setUserName("Jhon123");
        user.setFirstName("Jhon");
        user.setLastName("Smith");
        user.setUserPassword("123456");
        user.setUserAddedDate(new Date());
    }

    @After
    public void tearDown() throws Exception {
        autheticationRepository.deleteAll();
    }

    @Test
    public void testRegisterUserSuccess() {
        autheticationRepository.save(user);
        User object = autheticationRepository.findById(user.getUserName()).get();
        Assert.assertEquals(user.getUserName(), object.getUserName());
    }

    @Test
    public void testLoginUserSuccess() {
        autheticationRepository.save(user);
        User object = autheticationRepository.findById(user.getUserName()).get();
        Assert.assertEquals(user.getUserName(), object.getUserName());
    }
}
