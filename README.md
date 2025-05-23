# Full-Stack Web Application

A full-stack web application built with Node.js, Express, and MySQL featuring user management, form validation, and API integration.

## Features

- User Management (CRUD operations)
- JWT Authentication
- Form Validation
- RESTful API
- MySQL Database Integration
- Unit Tests

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v8 or higher)
- npm or yarn

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   DB_HOST=localhost
   DB_USER=your_mysql_username
   DB_PASSWORD=your_mysql_password
   DB_NAME=fullstack_app
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```
4. Create the database:
   ```sql
   CREATE DATABASE fullstack_app;
   ```
5. Run the database migrations:
   ```bash
   npm run migrate
   ```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## Running Tests

```bash
npm test
```

## API Documentation

### Authentication Endpoints

- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user
- GET /api/auth/profile - Get user profile
- PUT /api/auth/profile - Update user profile

### Form Endpoints

- POST /api/form - Submit form data
- GET /api/form - Get submitted form data

## Deployment

### Database Deployment Options

1. Railway
   - Create an account on Railway
   - Create a new MySQL database
   - Update the .env file with Railway credentials

2. PlanetScale
   - Create an account on PlanetScale
   - Create a new database
   - Update the .env file with PlanetScale credentials

### Application Deployment Options

1. Railway
   - Connect your GitHub repository
   - Set environment variables
   - Deploy

2. Render
   - Create a new Web Service
   - Connect your GitHub repository
   - Set environment variables
   - Deploy

## License

MIT #   B a c k e n d - a s s e s s m e n t  
 #   B a c k e n d - a s s e s s m e n t  
 