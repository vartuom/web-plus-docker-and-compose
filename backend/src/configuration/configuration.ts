export default () => ({
    port: parseInt(process.env.PORT, 10) || 3001,
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRESIN,
    },
    database: {
        type: process.env.DATABASE_TYPE,
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
        synchronize: JSON.parse(process.env.DATABASE_SYNCHRONIZE) || false,
    },
});
