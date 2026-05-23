package com.example.kadhaiDex.backend.dto;

public class CommentRequest {

    private String text;
    private Long userId;
    private Long postId;

    public CommentRequest() {
    }

    public String getText() {
        return text;
    }

    public Long getUserId() {
        return userId;
    }

    public Long getPostId() {
        return postId;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }
}