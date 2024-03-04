package com.example.springnetworkchat;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class User {
    private String name, message;
    public User(String name, String message) {
        this.name = name;
        this.message = message;
    }
}
