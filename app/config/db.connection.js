const mysql = require("mysql2");
const dbConfig = require("./db.config");

const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// connect to the MySQL server
const connect = (callback) => {
    connection.connect(callback);
};

module.exports = {
    connect,
    connection,
}