package com.example.kadhaiDex.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;
import java.util.List;
import jakarta.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;

    @Column(unique = true)
    private String email;

    @JsonIgnore
    private String password;

    private LocalDateTime createdAt;

    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Post> posts;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Comment> comments;

    public User() {}

    public User(String username, String email, String password, LocalDateTime createdAt) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }

    public Long getUserId() { return userId; }
    public String getUsername() { return username; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
    public LocalDateTime getCreatedAt() { return createdAt; }
    public Role getRole() { return role; }
    public List<Post> getPosts() { return posts; }
    public List<Comment> getComments() { return comments; }

    public void setUsername(String username) { this.username = username; }
    public void setEmail(String email) { this.email = email; }
    public void setPassword(String password) { this.password = password; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
    public void setRole(Role role) { this.role = role; }
    public void setPosts(List<Post> posts) { this.posts = posts; }
    public void setComments(List<Comment> comments) { this.comments = comments; }
}