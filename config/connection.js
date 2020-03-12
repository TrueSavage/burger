const { createConnection } = require('mysql2')

let connection;

if (process.env.JAWSDB_URL) {
  connection = createConnection(process.env.JAWSDB_URL)
}
else {
  connection = createConnection({
    host: 'kil9uzd3tgem3naa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'gth65b61xn9e39j8',
    password: 'pcssngrndutts6ne',
    database: 'ijxnzu9po2rfycik'
  })
}
module.exports = connection