package com.stackroute.favouriteservice.rabbitmq;

import com.stackroute.favouriteservice.model.FavouritePlayer;
import com.stackroute.favouriteservice.model.User;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;




@Component
public class Producer {

	@Autowired
	private RabbitTemplate rabbitTemplate;
	
        
	@Autowired
	private DirectExchange directExchange;
	
	public void sendMessageToRabbitMQ(FavouritePlayer player) {
		rabbitTemplate.convertAndSend(directExchange.getName(), "CRIC-ROUTING-KEY", player);;
	}
	
}
