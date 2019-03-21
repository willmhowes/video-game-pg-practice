const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
   database: 'videogames',
   host: 'localhost',
   port: 5432,
   max: 10,
   idleTimeoutMillis: 30000,
});

pool.on('connect', () => {
   console.log('PostgreSQL connected!');
})

pool.on('error', (error) => {
   console.log('Database error', error);
})

module.exports = pool;
