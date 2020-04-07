const { createConnection } = require('mysql2')

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  connection = mysql.createConnection({
    root: root
    host: 'izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // host: process.env.DB_HOST,
    port: 8080,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASS,
    // database: "burgers_db"

    user: 'cdusm5feh24564p5',
    password: 'vqe8wyqxvbnkjao4',
    database: 'gv15h6r8z7vpjpe8'
  })
}
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack)
    return
  }
  console.log("connected as id " + connection.threadId)
})
// Export Connection
module.exports = connection