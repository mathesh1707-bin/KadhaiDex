package com.example.kadhaiDex.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.kadhaiDex.backend.model.Comment;
import com.example.kadhaiDex.backend.model.Post;

public interface CommentRepository extends JpaRepository<Comment,Long> {

    List<Comment> findByPost(Post post);
}