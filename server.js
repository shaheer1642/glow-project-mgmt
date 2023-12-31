const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')
require('./modules/db')

app.use(cors())
app.use(bodyParser.json())

app.use('/api', require('./routes/reliefweb'))
app.use('/api', require('./routes/users'))

app.use(express.static(path.join(__dirname, 'front_end', 'dist')))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'front_end', 'dist', 'index.html'))
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})