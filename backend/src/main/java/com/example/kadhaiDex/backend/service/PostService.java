package com.example.kadhaiDex.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.kadhaiDex.backend.dto.PostRequest;
import com.example.kadhaiDex.backend.model.Post;
import com.example.kadhaiDex.backend.model.User;
import com.example.kadhaiDex.backend.repository.PostRepository;
import com.example.kadhaiDex.backend.repository.UserRepository;

@Service
public class PostService {
    private final PostRepository postRepo;
    private final UserRepository userRepo;

    public PostService(PostRepository postRepo,
                       UserRepository userRepo) {

        this.postRepo = postRepo;
        this.userRepo = userRepo;
    }

    public Post createPost(PostRequest request) {
        User user = userRepo.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        Post post = new Post();

        post.setTitle(request.getTitle());
        post.setContent(request.getContent());
        post.setCreatedAt(LocalDateTime.now());
        post.setUpdatedAt(LocalDateTime.now());
        post.setUser(user);

        return postRepo.save(post);
    }
    
    public List<Post> getAllPosts() {
        return postRepo.findAll();
    }

    public Post getPostById(Long postId) {
        return postRepo.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));
    }
    
    public void deletePost(Long postId){
        postRepo.deleteById(postId);
    }





}
