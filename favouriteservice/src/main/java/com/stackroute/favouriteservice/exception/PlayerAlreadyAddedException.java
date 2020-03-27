/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.stackroute.favouriteservice.exception;

/**
 *
 * @author RameshKumar
 */
public class PlayerAlreadyAddedException extends Exception {

    public PlayerAlreadyAddedException(String message) {
        super(message);
    }
}