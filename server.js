const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(cors())

app.use('/api', require('./routes/reliefweb'))

app.use(express.static(path.join(__dirname, 'front_end', 'build')))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'front_end', 'build', 'index.html'))
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})