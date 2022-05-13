module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "admin@123",
    DB: "task_manager",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    jwtExpiration: 3600,           // 1 hour
    jwtRefreshExpiration: 86400,   // 24 hours
};