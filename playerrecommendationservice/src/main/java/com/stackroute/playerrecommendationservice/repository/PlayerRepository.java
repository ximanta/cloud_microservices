package com.stackroute.playerrecommendationservice.repository;

import com.stackroute.playerrecommendationservice.model.Player;

import org.springframework.data.mongodb.repository.MongoRepository;


import org.springframework.stereotype.Repository;

/*
* This class is implementing the MongoRepository interface for Note.
* Annotate this class with @Repository annotation
* */
@Repository
public interface PlayerRepository extends MongoRepository<Player, String> {

}
