const DB = require('pg');

const db = new DB.Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    },
    keepAlive: true
})

db.connect().then(async res => {
    console.log('DB Connection established.')
}).catch(err => {
    console.log('DB Connection failure.\n' + err)
});

db.on('error', err => {
    console.log('=============== DB Connection error. ==============')
    console.error(err)
    process.exit()
})

setInterval(() => {
    db.query(`SELECT * FROM users`).then(res => {
        console.log('Pinged the DB. Received rows:',res.rowCount)
    }).catch(console.error)
}, 900000);

module.exports = {db};