package com.stackroute.favouriteservice.repository;

import com.stackroute.favouriteservice.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;


import org.springframework.stereotype.Repository;

/*
* This class is implementing the MongoRepository interface for Note.
* Annotate this class with @Repository annotation
* */
@Repository
public interface FavouriteRepository extends MongoRepository<User, String> {

}
