package com.example.kadhaiDex.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.kadhaiDex.backend.dto.CommentRequest;
import com.example.kadhaiDex.backend.model.Comment;
import com.example.kadhaiDex.backend.service.CommentService;

@RestController
@RequestMapping("/comments")
@CrossOrigin("*")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public Comment createComment(@RequestBody CommentRequest request) {

        return commentService.createComment(request);
    }

    @GetMapping("/post/{postId}")
    public List<Comment> getCommentsByPost(@PathVariable Long postId) {

        return commentService.getCommentsByPost(postId);
    }

    @DeleteMapping("/{commentId}")
    public String deleteComment(@PathVariable Long commentId) {

        commentService.deleteComment(commentId);

        return "Comment deleted successfully";
    }
}