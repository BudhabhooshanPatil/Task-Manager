const mysql = require("mysql2");
const dbConfig = require("./db.config");


let connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// connect to the MySQL server
async function connect() {
    try {
        connection.connect(error => {
            console.log(`database connection error ${error}`)
        });
    } catch (error) {
        throw new Error(`database failed to connect with error ${error}`);
    }
}

module.exports = {
    connect,
    connection,
}