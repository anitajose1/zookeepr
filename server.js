const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')
const path = require('path')
const express = require('express')

// Note: Heroku sets the environment variable PORT to 80
const PORT = process.env.PORT || 3001

const app = express()

// middleware to parse incoming string or array data
app.use(express.urlencoded({ extended: true}))
// middleware to parse incoming JSON data
app.use(express.json())

app.use('/api', apiRoutes)
app.use('./', htmlRoutes)

// middleware that instructs server to make 'public/' files static resources so that
// front-end code can be accessed without requiring specific server endpoint.
app.use(express.static('public'))

const {animals} = require('./data/animals.json')
const { json } = require('body-parser')

// this method should always be placed at the end, 
// but okay to place this method at the top instead of here as long as 'app' is declared first
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})