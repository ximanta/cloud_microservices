package com.stackroute.favouriteservice.rabbitmq;

import javax.annotation.PostConstruct;
import org.springframework.amqp.core.AmqpAdmin;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class RabbitMQConfig {

    //Exchange
    private AmqpAdmin amqpAdmin;

    public RabbitMQConfig(AmqpAdmin amqpAdmin) {
        this.amqpAdmin = amqpAdmin;
    }

    @Bean
    public DirectExchange directExchange() {
        return new DirectExchange("CRIC-EXCHANGE");
    }

	//Queue
    @Bean
    public Queue cricQueue() {
        return new Queue("CRIC-QUEUE", false);
    }

	//Bind Queue to Exchange
    @Bean
    public Binding queueBinding(Queue userOrderQueue, DirectExchange directExchange) {
        return BindingBuilder.bind(cricQueue()).to(directExchange()).with("CRIC-ROUTING-KEY");
    }

    @Bean
    public Jackson2JsonMessageConverter jackson2JsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(final ConnectionFactory connectionFacory) {
//            ConnectionFactory factory = new ConnectionFactory();
//factory.setHost("localhost");
        //  connectionFacory.
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFacory);

        rabbitTemplate.setMessageConverter(jackson2JsonMessageConverter());
        return rabbitTemplate;
    }

    @PostConstruct
    public void createQueues() {
        amqpAdmin.declareQueue(cricQueue());

    }

}
