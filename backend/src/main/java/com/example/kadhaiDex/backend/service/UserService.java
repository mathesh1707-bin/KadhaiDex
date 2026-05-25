package com.example.kadhaiDex.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.kadhaiDex.backend.dto.UserRequest;
import com.example.kadhaiDex.backend.exception.ApiException;
import com.example.kadhaiDex.backend.model.User;
import com.example.kadhaiDex.backend.repository.UserRepository;

@Service
public class UserService {

    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerUser(UserRequest request) {
        if (userRepository.existsByEmail(request.getEmail()))
            throw new ApiException("Email already exists");

        if (userRepository.existsByUsername(request.getUsername()))
            throw new ApiException("Username already exists");

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setCreatedAt(LocalDateTime.now());

        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new ApiException("User not found"));
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ApiException("User not found"));
    }
}