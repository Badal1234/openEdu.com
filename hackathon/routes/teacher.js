var express = require('express');
var router = express.Router();
var service = require('./service/fileCheck')
var db = require('./database/index')
router.post('/upload',(req,res)=>{
    const {classnumber, subject, Topic, Description} = req.body
    const {file} = req.files
    db.insertElement({db:'hackathon',collection:'teacher',
    obj:{classNumber:classnumber, subject: subject, Topic:Topic, Description:Description}})
    if(file.mimetype != 'application/pdf'){
        res.status(403).json({messsage:'only pdf is allowed'})
    }else{
        service.checkFileContent({filePath:file.path}).then()
    }


})