# Task 2: Blog Application API

A REST API for a blogging platform built with Node.js, Express, and MongoDB.

## Setup
1. Run: npm install
2. Add .env file: MONGO_URI=mongodb://localhost:27017/blogDB and PORT=3000
3. Run: node server.js

## API Endpoints

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users/register | Register user |
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get user with posts |

### Posts
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/posts | Create post |
| GET | /api/posts | Get all posts |
| GET | /api/posts/:id | Get single post |
| GET | /api/posts/tag/:tag | Get posts by tag |
| PUT | /api/posts/:id | Update post |
| DELETE | /api/posts/:id | Delete post |

### Comments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/posts/:postId/comments | Add comment |
| GET | /api/posts/:postId/comments | Get comments |
| DELETE | /api/comments/:id | Delete comment |

## Author
Fatima Nasir - BS CS 6E - CS4032 Web Programming Spring 2026
