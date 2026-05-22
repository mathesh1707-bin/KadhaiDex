package com.example.kadhaiDex.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.kadhaiDex.backend.model.Post;
import com.example.kadhaiDex.backend.model.User;
import com.example.kadhaiDex.backend.repository.PostRepository;

@Service
public class PostService {
    private PostRepository repo;

    public PostService(PostRepository repo) {
        this.repo = repo;
    }

    public Post addPost(Post post) {
        return repo.save(post);
    }

    public void deletePost(Long postId) {
        repo.deleteById(postId);
    }

    public List<Post> getPosts(User user) {
        return repo.findByUser(user);
    }
    





}
