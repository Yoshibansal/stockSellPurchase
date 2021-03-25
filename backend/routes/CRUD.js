const express = require('express')
const router = new express.Router()
const axios = require('axios')
const processValue = require('../middleware/processValue')


router.get('/purchase',async(req,res)=>{
    const request = await axios.get(`https://${process.env.PROJECT_ID}.firebaseio.com/purchase.json?access_token=${req.headers['token']}`)
    if(request.status === 400) return res.status(400).send({error: 'Cant fetch data'})
    else return res.status(200).send(request.data)
})

router.get('/sell',async(req,res)=>{
    const request = await axios.get(`https://${process.env.PROJECT_ID}.firebaseio.com/sell.json?access_token=${req.headers['token']}`)
    if(request.status === 400) return res.status(400).send({error: 'Cant fetch data'})
    else return res.status(200).send(request.data)
})

router.post('/purchase', processValue(['date','name','mandi-prangan','bahar','bag', 'bajan', 'rate']) , async(req,res)=>{
   const data = { ...req.body, amount: req.body.rate * req.body.bajan } 
    axios.post(`https://${process.env.PROJECT_ID}.firebaseio.com/purchase.json?access_token=${req.headers['token']}`,data)
    .then(resp=>{res.status(200).send({created : true})})
    .catch(error => {res.status(400).send({created: false})})
})

router.post('/sell',processValue(['date','name','bag','bajan','rate','balance','transport','gadiNo','bhada']),async(req,res)=>{
    axios.post(`https://${process.env.PROJECT_ID}.firebaseio.com/sell.json?access_token=${req.headers['token']}`,{
        ...req.body
    })
    .then(resp=>{res.status(200).send({created : true})})
    .catch(error => {res.status(400).send({created: false})})
})

router.patch('/purchase',processValue(['id','date','name','mandi-prangan','bahar','bag', 'bajan', 'rate']),async(req,res)=>{
    const id = req.body.id
    delete req.body.id
    axios.patch(`https://${process.env.PROJECT_ID}.firebaseio.com/purchase/${id}.json?access_token=${req.headers['token']}`,{
        ...req.body
    })
    .then(resp=>{res.status(200).send({updated: true, data: resp.data})})
    .catch(error => {res.status(400).send({updated: false})})
})

router.patch('/sell', processValue(['id','date','name','bag','bajan','rate','balance','transport','gadiNo','bhada']) , async(req,res)=>{
    const id = req.body.id
    delete req.body.id
    axios.post(`https://${process.env.PROJECT_ID}.firebaseio.com/sell/${id}.json?access_token=${req.headers['token']}`,{
        ...req.body
    })
    .then(resp=>{res.status(200).send({updated: true, data: resp.data})})
    .catch(error => {res.status(400).send({updated: false})})
})

router.delete('/purchase',async(req,res)=>{
    axios.delete(`https://${process.env.PROJECT_ID}.firebaseio.com/purchase/${req.body.id}.json?access_token=${req.headers['token']}`)
    .then(resp=>{res.status(200).send({deleted: true})})
    .catch(error => {res.status(400).send({deleted: false})})
})

router.delete('/sell',async(req,res)=>{
    axios.delete(`https://${process.env.PROJECT_ID}.firebaseio.com/sell/${req.body.id}.json?access_token=${req.headers['token']}`)
    .then(resp=>{res.status(200).send({deleted: true})})
    .catch(error => {res.status(400).send({deleted: false})})
})


module.exports = router