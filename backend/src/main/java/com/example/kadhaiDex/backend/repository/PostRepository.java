package com.example.kadhaiDex.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.kadhaiDex.backend.model.Post;
import com.example.kadhaiDex.backend.model.User;

public interface PostRepository extends JpaRepository<Post,Long> {

    List<Post> findByUser(User user);

    List<Post> findByTitleContainingIgnoreCase(String keyword);
} 