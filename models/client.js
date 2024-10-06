const { Client } = require("pg");

module.exports = new Client({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT    
});