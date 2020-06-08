const { Pool } = require('pg');

module.exports = new Pool({
    user: "postgress",
    password: "1234",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
});
