const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3000

// --- MIDDLEWARE SETUP ---
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// --- CORS MIDDLEWARE ---
app.use(cors({
    origin: ["http://localhost:3001"]
}))

const index = require('./routes/index.routes')
app.use('/', index)
const phones = require('./routes/phones.routes')
app.use('/telefonos', phones)

app.listen(PORT, () => {
    console.log('contectado')
})