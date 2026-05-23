package com.example.kadhaiDex.backend.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.kadhaiDex.backend.dto.CommentRequest;
import com.example.kadhaiDex.backend.model.Comment;
import com.example.kadhaiDex.backend.model.Post;
import com.example.kadhaiDex.backend.model.User;
import com.example.kadhaiDex.backend.repository.CommentRepository;
import com.example.kadhaiDex.backend.repository.PostRepository;
import com.example.kadhaiDex.backend.repository.UserRepository;

@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final PostRepository postRepository;

    public CommentService(CommentRepository commentRepository, UserRepository userRepository,
            PostRepository postRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.postRepository = postRepository;
    }

    public Comment createComment(CommentRequest request) {

        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Post post = postRepository.findById(request.getPostId())
                .orElseThrow(() -> new RuntimeException("Post not found"));

        Comment comment = new Comment();

        comment.setText(request.getText());
        comment.setCreatedAt(LocalDateTime.now());

        comment.setUser(user);
        comment.setPost(post);

        return commentRepository.save(comment);
    }
    
    public List<Comment> getCommentsByPost(Long postId) {

        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Post not found"));

        return commentRepository.findByPost(post);
    }

    public void deleteComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }

}
