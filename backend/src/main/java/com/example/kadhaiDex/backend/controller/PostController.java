package com.example.kadhaiDex.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.kadhaiDex.backend.dto.PostRequest;
import com.example.kadhaiDex.backend.model.Post;
import com.example.kadhaiDex.backend.service.PostService;

@RestController
@RequestMapping("/posts")
@CrossOrigin("*")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping
    public Post createPost(@RequestBody PostRequest request) {

        return postService.createPost(request);
    }

    @GetMapping
    public List<Post> getAllPosts() {

        return postService.getAllPosts();
    }

    @GetMapping("/{postId}")
    public Post getPostById(@PathVariable Long postId) {

        return postService.getPostById(postId);
    }

    @DeleteMapping("/{postId}")
    public String deletePost(@PathVariable Long postId) {

        postService.deletePost(postId);

        return "Post deleted successfully";
    }
}