const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupDatabase() {
    try {
        // Create connection without database
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        });

        // Create database if it doesn't exist
        await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
        console.log(`Database ${process.env.DB_NAME} created or already exists`);

        // Use the database
        await connection.query(`USE ${process.env.DB_NAME}`);

        // Create users table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                username VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);
        console.log('Users table created or already exists');

        // Create form_submissions table
        await connection.query(`
            CREATE TABLE IF NOT EXISTS form_submissions (
                id INT PRIMARY KEY AUTO_INCREMENT,
                user_id INT,
                name VARCHAR(255) NOT NULL,
                age INT NOT NULL,
                phone_number VARCHAR(20) NOT NULL,
                email VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log('Form submissions table created or already exists');

        // Close the connection
        await connection.end();
        console.log('Database setup completed successfully');
    } catch (error) {
        console.error('Error setting up database:', error.message);
        process.exit(1);
    }
}

setupDatabase(); 