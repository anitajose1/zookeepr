const path = require('path')
const router = require('express').Router();

// route to serve index.html page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

// route to serve animals.html page
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'))
})

// route to serve zookeepers.html page
router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'))
})

// wildcard route to catch an error request for a route that doesn't exist
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router