package com.example.kadhaiDex.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.kadhaiDex.backend.dto.UserRequest;
import com.example.kadhaiDex.backend.model.User;
import com.example.kadhaiDex.backend.service.UserService;

@RestController
@RequestMapping("/users")
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User registerUser(@RequestBody UserRequest request) {

        return userService.registerUser(request);
    }

    @GetMapping
    public List<User> getAllUsers() {

        return userService.getAllUsers();
    }

    @GetMapping("/{userId}")
    public User getUserById(@PathVariable Long userId) {

        return userService.getUserById(userId);
    }
}