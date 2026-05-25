package com.example.kadhaiDex.backend.controller;

import com.example.kadhaiDex.backend.model.User;
import com.example.kadhaiDex.backend.security.JwtUtil;
import com.example.kadhaiDex.backend.service.UserService;
import com.example.kadhaiDex.backend.dto.UserRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/users")
public class AuthController {

    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;

    public AuthController(UserService userService, JwtUtil jwtUtil, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserRequest request) {
        User user = userService.registerUser(request);
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        return ResponseEntity.ok(Map.of(
            "token", token,
            "username", user.getUsername(),
            "email", user.getEmail(),
            "role", user.getRole().name()
        ));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserRequest request) {
        User user = userService.getUserByEmail(request.getEmail());
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
        }
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        return ResponseEntity.ok(Map.of(
            "token", token,
            "username", user.getUsername(),
            "email", user.getEmail(),
            "role", user.getRole().name()
        ));
    }
}