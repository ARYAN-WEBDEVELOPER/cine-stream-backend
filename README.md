# CineStream Backend API

Backend API for CineStream, a full-stack movie recommendation platform.

## Features

* User Profile Management
* Profile Image Uploads using Cloudinary
* Favorites Management
* Reviews Management
* MongoDB Atlas Integration
* RESTful API Architecture

## Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Multer
* Cloudinary
* CORS
* dotenv

## Project Structure

```text
backend/
├── config/
│   ├── db.js
│   └── cloudinary.js
│
├── middleware/
│   └── upload.js
│
├── models/
│   ├── User.js
│   ├── Favorite.js
│   └── Review.js
│
├── routes/
│   ├── profileRoutes.js
│   ├── favoriteRoutes.js
│   ├── reviewRoutes.js
│   └── userRoutes.js
│
├── .env
├── server.js
└── package.json
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

## Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## API Endpoints

### Profile

#### Upload Profile

```http
POST /api/profile/upload
```

Form Data:

```text
name
email
image
```

---

### Favorites

#### Get Favorites

```http
GET /api/favorites
```

#### Add Favorite

```http
POST /api/favorites
```

#### Delete Favorite

```http
DELETE /api/favorites/:id
```

---

### Reviews

#### Get Reviews

```http
GET /api/reviews
```

#### Create Review

```http
POST /api/reviews
```

#### Delete Review

```http
DELETE /api/reviews/:id
```

---

### Users

#### Get User Posts

```http
GET /api/users/:userId/posts
```

## Deployment

### Backend Hosting

* Render

### Database

* MongoDB Atlas

### Media Storage

* Cloudinary

## Learning Outcomes

* Express.js API Development
* MongoDB CRUD Operations
* Cloudinary Integration
* File Upload Handling with Multer
* Environment Variable Management
* Backend Deployment using Render

## Author

Aryan

First Full-Stack Project 🚀
