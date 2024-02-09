package com.example.edugateway_app.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.edugateway_app.entity.Details;
import com.example.edugateway_app.service.DetailsService;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController

@RequestMapping("/users")
public class DetailsController {
    @Autowired
    private DetailsService userDetailsService;

    @GetMapping("/")
    public List<Details> getAllUsers() {
        return userDetailsService.getAllUsers();
    }

    @GetMapping("/{userId}")
    public Optional<Details> getUserById(@PathVariable Long userId) {
        return userDetailsService.getUserById(userId);
    }

    @PostMapping("/users")
    public Details createUser(@RequestBody Details userDetails) {
        return userDetailsService.createUser(userDetails);
    }

    @PutMapping("/{userId}")
    public Details updateUser(@PathVariable Long userId, @RequestBody Details userDetails) {
        return userDetailsService.updateUser(userId, userDetails);
    }

    @DeleteMapping("/{userId}")
    public boolean deleteUser(@PathVariable Long userId) {
        userDetailsService.deleteUser(userId);
        return true;
    }
    
}