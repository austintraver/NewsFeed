const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const router = express.Router()
const favicon = require('express-favicon')
const cors = require('cors')
// wrapper for MongoDB server access
const mongoose = require('mongoose')
// support parsing jsons
app.use(bodyParser.json());
// load the favicon
app.use(favicon(path.join('./frontend/build/favicon.ico')))
// store session variables
app.use(session({
  secret: "hashedforprotection"
}))
// client can look at our server code ^ .join() defaults to the root directory if none is specified
app.use(express.static(path.join('./frontend/build')))

let User = require('./models/User')

// begin connection to the MongoDB server
mongoose.connect(
  "mongodb+srv://cluster0-h3iy9.mongodb.net/test",
{
  useNewUrlParser: true,
  dbName: "newsfeed",
  poolSize: 5,
  user: "pillow",
  pass: "fight"
})

app.post('/login', cors(), async (request, response) => {
  let query = User.findOne({
    // query parameters in json
    username: `${request.body.username}`,
    password: `${request.body.password}`
  },
  // callback function for a query, executed when calling query.exec()
  (error, result) => {
    if (error || result === null) {
      response.status(400).send({
        error: 'Error: username/password not found'
      })
    }
    else {
      console.log(`Username: ${result.username}\nPassword: ${result.password}`)
      response.status(200).send(result)
    }
  })
  query.exec()
})

app.post('/register', cors(), async (req, res) => {
  let user = new User({
    username: `${req.body.username}`,
    password: `${req.body.password}`,
    firstname: `${req.body.firstname}`,
    lastname: `${req.body.lastname}`
  })
  console.log("Registration was attempted, server received the POST request.")
  // save the new user to the database
  user.save()
  .then( (doc) => {
    // print the output
    console.log(doc)
    res.status(200).json({
      error: null
    })
  })
  // or catch the error
  .catch( (err) => {
    // if the error is code 11000
    // Then MongoDB has thrown a duplicate key error, username is taken
    console.log("User already exists")
    return res.status(500).send({
      error: 'Username already exists'
    })
  })
})

app.post('/updatetopics', cors(), async (req, res))
{

}

// default redirect, loads the application when the user visits the site
app.get('/', async (req, res) => {
  res.sendFile(path.join('./frontend/build/index.html'))
})

// Choose the port and start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
})
