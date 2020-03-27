package com.stackroute.playerrecommendationservice.rabbitmq;

import com.stackroute.playerrecommendationservice.model.Player;
import com.stackroute.playerrecommendationservice.service.PlayerRecommendationService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;

import org.springframework.stereotype.Component;



@Component
public class Consumer {
	public static final org.slf4j.Logger LOG = LoggerFactory.getLogger(Consumer.class);
	@Autowired
	private PlayerRecommendationService playerRecomService;
	@RabbitListener(queues = "CRIC-QUEUE")
	public void getUserOrder(Player player) {
            
            try { 
                LOG.info("Saving to mongoDB");
                 playerRecomService.updateLikes(player);
            } catch (Exception ex) {
               LOG.error("Exception while updating player"+ex.getMessage());
            }
	}

}
