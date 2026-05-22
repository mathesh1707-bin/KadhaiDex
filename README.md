# KadhaiDex Backend

Backend API for **KadhaiDex**, a blog platform where users can create posts, interact through comments, and manage content securely using JWT authentication.

---

# Features

## Authentication
- User Registration
- User Login
- JWT-based Authentication
- Password Encryption using BCrypt
- Protected Routes

---

## Blog Posts
- Create Blog Posts
- Edit Own Posts
- Delete Own Posts
- View All Posts
- View Single Post
- Search Posts
- Pagination Support

---

## Comments
- Add Comments to Posts
- Delete Own Comments
- View Comments for a Post

---

## Backend Concepts Used
- RESTful APIs
- Spring Security
- JWT Authentication
- JPA/Hibernate Relationships
- DTO Pattern
- Global Exception Handling
- Validation
- Pagination & Sorting

---

# Tech Stack

| Technology | Purpose |
|---|---|
| Java | Programming Language |
| Spring Boot | Backend Framework |
| Spring Security | Authentication & Authorization |
| JWT | Secure Authentication |
| Spring Data JPA | ORM & Database Access |
| MySQL | Relational Database |
| Maven | Dependency Management |
| Lombok | Boilerplate Reduction |

---

# Project Structure

```txt
src/main/java/com/mathesh/kadhaidexbackend

├── config
├── controller
├── dto
│   ├── auth
│   ├── post
│   └── comment
├── entity
├── exception
├── repository
├── security
├── service
│   └── impl
└── util