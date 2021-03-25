const express = require('express')
const app = express()

const CRUD = require('./routes/CRUD')
const Login = require('./routes/Login')

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/crud', CRUD)
app.use(Login)


app.listen(PORT, ()=>{
    console.log(`Server is listening on port : ${PORT}`)
})