const express = require('express')
const app = express()
const cors = require('cors')


app.use(cors())
app.get('/', (req, res) => {
    res.send('Welcome to GLOW API!')
})

app.use('/api', require('./routes/reliefweb'))

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})