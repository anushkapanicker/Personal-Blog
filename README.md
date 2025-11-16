# ☕ Personal Blog Platform

A full‐stack personal blogging platform built with **Spring Boot** (backend REST API) and **React.js** (frontend).  
This platform allows guests to view published articles and provides an admin section for you to create, edit, or delete articles.


## 🚀 Features

- Public (Guest) Section:
  - Home page: list of published articles  
  - Article page: view full article, publication date  
- Admin Section:
  - Dashboard: manage articles (add, edit, delete)  
  - Login page: protected admin access  
  - Add/Edit article pages with title, content, category, tags, date  
- Backend REST API:
  - Create, Read, Update, Delete, and Search blog posts  
  - Endpoints: `/posts`, `/posts/{id}`, `/posts?term={keyword}`  
- Storage:  
  - In development: uses H2 in-memory database  
  - Ready to be replaced with a file system or persistent DB  
- Tech Stack:
  - Backend: Java, Spring Boot, Spring Data JPA  
  - Frontend: React.js, Axios, React Router  
  - Build Tools: Maven (backend), Create-React-App (frontend)  
  - Authentication (admin): simple hardcoded credentials stored in `.env` (development mode)  

## ⚙️ Setup & Run Locally

### 1. Backend  

```
cd backend
mvn clean install
mvn spring-boot:run
```

### 2. Frontend

```
cd frontend
npm install
npm start
```

## 🌐 Project URL  
[https://roadmap.sh/projects/personal-blog](https://roadmap.sh/projects/personal-blog)

