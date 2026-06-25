# CineStream Backend - Project Prompt

## Objective

Build a scalable backend API for a movie recommendation platform where users can manage profiles, reviews, and favorite movies.

---

## Core Requirements

### User Profile Module

Features:

* Create profile
* Update profile
* Upload profile image
* Store images in Cloudinary
* Save user information in MongoDB Atlas

API:

```http
POST /api/profile/upload
```

---

### Favorites Module

Features:

* Add favorite movies
* Retrieve favorite movies
* Delete favorite movies

APIs:

```http
GET /api/favorites
POST /api/favorites
DELETE /api/favorites/:id
```

---

### Reviews Module

Features:

* Create reviews
* Retrieve reviews
* Delete reviews

APIs:

```http
GET /api/reviews
POST /api/reviews
DELETE /api/reviews/:id
```

---

### User Module

Features:

* Fetch all posts created by a user
* Populate author information

API:

```http
GET /api/users/:userId/posts
```

---

## Technical Requirements

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Media Handling

* Multer
* Cloudinary

### Utilities

* dotenv
* cors

---

## Deployment Requirements

### Hosting

* Render

### Database

* MongoDB Atlas

### Storage

* Cloudinary

---

## Success Criteria

* MongoDB Atlas connected successfully
* Cloudinary uploads working
* REST APIs functioning correctly
* Favorites CRUD operational
* Reviews CRUD operational
* Profile upload operational
* Backend deployed successfully on Render

---

## Learning Goals

* REST API Design
* MongoDB Data Modeling
* File Upload Handling
* Cloudinary Integration
* Environment Variables
* Production Deployment
* Backend Architecture Best Practices
