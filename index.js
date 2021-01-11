require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 80
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    credentials: true
}))

const lottery = require('./test')
app.use(lottery);
app.listen(PORT, () => console.log(`Server is ready! => ${PORT}`))