# MVC App

A simple Express.js MVC application with TypeScript and MongoDB.

## Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file with:

```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### Run Development Server

```bash
npm run dev
```

Server runs on: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/users` | Get all users |
| GET | `/api/v1/users/:id` | Get user by ID |
| POST | `/api/v1/users` | Create one user (insertOne) |
| POST | `/api/v1/users/bulk` | Create many users (insertMany) |

---

## Postman Payloads

### Create One User (insertOne)

**URL:** `POST http://localhost:3000/api/v1/users`

**Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "_id": "678e123456789abc12345678",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

---

### Create Many Users (insertMany)

**URL:** `POST http://localhost:3000/api/v1/users/bulk`

**Body (JSON) - 5 Sample Users:**
```json
[
  {
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  },
  {
    "name": "Bob Johnson",
    "email": "bob.johnson@example.com"
  },
  {
    "name": "Alice Williams",
    "email": "alice.williams@example.com"
  },
  {
    "name": "Charlie Brown",
    "email": "charlie.brown@example.com"
  }
]
```

**Response:**
```json
{
  "success": true,
  "message": "5 users created successfully",
  "data": [...]
}
```

---

### Get User By ID

**URL:** `GET http://localhost:3000/api/v1/users/{{user_id}}`

Replace `{{user_id}}` with an actual MongoDB ObjectId
