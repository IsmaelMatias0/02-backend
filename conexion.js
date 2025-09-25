const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',     
  host: 'localhost',      
  database: 'test',  
  password: '123',
  port: 5432,              
});
pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error conectando a la BD', err.stack);
  }
  console.log('Conexión exitosa a PostgreSQL');
  release();
});
module.exports = pool;