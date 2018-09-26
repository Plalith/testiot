const express = require('express');
const router = express.Router();
var localStorage = require('localStorage')


router.use((req,res,next)=> {
    if(localStorage.getItem('auth_token')!=null) {
        if(req.header('idd') == localStorage.getItem('auth_token'))
        { 
            next();
        }
        else {
            console.log(req.body);
            return res.status(501).send("http intersecpetor failed ");
        }
    } else {
        if(req.originalUrl=='/api/login' || req.originalUrl=='/api/logout'){
             next(); 
        } else {
            console.log(req.body);
            return res.status(501).send("http intersecpetor failed ");
        } 
    } 
});

router.post('/login',(req,res)=>{
    if(req.body.token) {
        localStorage.setItem('auth_token', req.body.token);
        res.send({"status":true,'message':'successfully Logged in'});
    } 
});
router.get('/logout',(req,res)=>{
        localStorage.removeItem('auth_token');
        res.send({"status":true,'message':'successfully Logged out'});
});

router.get('/insert',(req,res)=>{
    res.send({status:'connected to server'});
})

router.post('/second', function(req,res,next){
    res.send({status:'You connected to post request'});

});


module.exports = router;


