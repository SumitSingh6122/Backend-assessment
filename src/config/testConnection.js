const pool = require('./database');

async function testConnection() {
    try {
        // Try to connect to the database
        const connection = await pool.getConnection();
        console.log('Database connection successful!');
        
        // Test query to check if tables exist
        const [tables] = await connection.query('SHOW TABLES');
        console.log('\nExisting tables:');
        tables.forEach(table => {
            console.log(`- ${Object.values(table)[0]}`);
        });

        // Release the connection
        connection.release();
        
        // Close the pool
        await pool.end();
        console.log('\nDatabase connection closed successfully.');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
}

testConnection(); 