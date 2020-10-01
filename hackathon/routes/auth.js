const { router } = require("../app");
var express = require('express');
var router = express.Router();

router.post('/signin',(req,res)=>{
    const {username, pass} = req.body
    if(username && pass){
        res.status(200).json({status:'login successsfull'})
    }
})


module.exports = router