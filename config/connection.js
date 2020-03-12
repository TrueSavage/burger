const { createConnection } = require('mysql2')

let connection;

if (process.env.JAWSDB_URL) {
  connection = createConnection(process.env.JAWSDB_URL)
}
else {
  connection = createConnection({
    host: 'izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'cdusm5feh24564p5',
    password: 'vqe8wyqxvbnkjao4',
    database: 'gv15h6r8z7vpjpe8'
  })
}
module.exports = connection