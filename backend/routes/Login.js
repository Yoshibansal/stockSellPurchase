const axios  = require('axios')
const express = require('express')
const processValue = require('../middleware/processValue')
const router = express.Router()

router.post('/signup',processValue(['email', 'password']), async(req,res)=>{
    await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.FIREBASE_API}`, {...req.body, returnSecureToken: true})
    .then((response => {res.status(200).send({response: response.data})}))
    .catch(error => {res.status(400).send({...error.response.data})})   
})


router.post('/signin', processValue(['email', 'password']), async(req,res)=>{
    await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API}`, {...req.body, returnSecureToken: true})
    .then((response => {res.status(200).send({response: response.data})}))
    .catch(error => {res.status(400).send({...error.response.data})})   
})


module.exports = router