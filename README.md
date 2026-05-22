# KadhaiDex

KadhaiDex is a full-stack blogging platform where users can create posts, interact through comments, and explore community-written content through a modern responsive interface.

The project focuses on real-world full-stack development concepts including authentication, REST APIs, relational database design, protected routes, and content management.

---

# Features

## Authentication
- User Registration
- User Login
- JWT-based Authentication
- Secure Password Encryption
- Protected Routes

---

## Blog Management
- Create Blog Posts
- Edit Own Posts
- Delete Own Posts
- View All Posts
- View Individual Post
- Search Posts
- Pagination Support

---

## Comment System
- Add Comments
- Delete Own Comments
- View Comments Under Posts

---

## Frontend Features
- Responsive UI
- Dynamic Blog Feed
- Protected Pages
- API Integration with Axios
- React Routing
- Modern Component-Based Architecture

---

# Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | Frontend Framework |
| React Router | Client-side Routing |
| Axios | API Communication |
| Tailwind CSS | Styling |

---

## Backend

| Technology | Purpose |
|---|---|
| Java | Programming Language |
| Spring Boot | Backend Framework |
| Spring Security | Authentication & Authorization |
| JWT | Secure Authentication |
| Spring Data JPA | ORM & Database Access |
| MySQL | Relational Database |
| Maven | Dependency Management |

---

# Architecture

```txt
Frontend (React)
        ↓
REST APIs (Spring Boot)
        ↓
MySQL Database
```

---

# Database Design

## User
- id
- username
- email
- password

---

## Post
- id
- title
- content
- createdAt
- updatedAt

---

## Comment
- id
- text
- createdAt

---

# Entity Relationships

```txt
User
 ├── Posts
 └── Comments

Post
 ├── Author (User)
 └── Comments

Comment
 ├── User
 └── Post
```

---

# API Endpoints

## Authentication

| Method | Endpoint |
|---|---|
| POST | `/api/auth/register` |
| POST | `/api/auth/login` |
| GET | `/api/auth/me` |

---

## Posts

| Method | Endpoint |
|---|---|
| GET | `/api/posts` |
| GET | `/api/posts/{id}` |
| POST | `/api/posts` |
| PUT | `/api/posts/{id}` |
| DELETE | `/api/posts/{id}` |

---

## Comments

| Method | Endpoint |
|---|---|
| GET | `/api/comments/post/{postId}` |
| POST | `/api/comments/post/{postId}` |
| DELETE | `/api/comments/{id}` |

---

# Security Rules

| Action | Authentication Required |
|---|---|
| View Posts | No |
| Create Posts | Yes |
| Edit/Delete Own Posts | Yes |
| Add Comments | Yes |
| Delete Own Comments | Yes |

---

# Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
```

---

# Backend Setup

## Configure MySQL

```sql
CREATE DATABASE kadhaidex;
```

---

## Configure application.properties

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/kadhaidex
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

jwt.secret=your_secret_key
jwt.expiration=86400000
```

---

## Run Backend

```bash
mvn spring-boot:run
```

Backend runs on:

```txt
http://localhost:8080
```

---

# Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# Future Improvements

- Like System
- Markdown Support
- Rich Text Editor
- User Profiles
- Tags & Categories
- Image Uploads
- Admin Dashboard
- Dark Mode

---

# Learning Outcomes

This project focuses on:

- Full-Stack Development
- REST API Design
- Spring Security & JWT
- React State Management
- Relational Database Design
- Entity Relationships
- Protected Routes
- Backend Architecture
- DTO Pattern
- Exception Handling

---

# Author

Mathesh S