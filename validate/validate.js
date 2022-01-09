const validatePhoneNumber = require('validate-phone-number-node-js');
var validateEmail = require("email-validator");

let validateOffsetAndLimit = (req,res,next)=>{
    if(!req.query.offset || !req.query.limit){
        res.json({message: "limit and offset can't be empty"})
    }
    else {
        next();
    }
}

let validateTypeUser = (req,res,next)=>{
    if(req.body.username == null || req.body.email == null ||  req.body.phoneNumber == null){
        res.json({message: "Nothing can be null!"})
    }
    else if(req.body.username == "" || req.body.email == "" ||  req.body.phoneNumber == ""){
        res.json({message: "Nothing can be empty!"})
    }
    else if(typeof req.body.username !== 'string' || typeof req.body.email !== 'string' || typeof req.body.phoneNumber !== 'string' ){
        res.json({message: "Everything has to be a string!"})
    }
    else {
        next();
    }
}

let validateTypeIdea = (req,res,next)=>{
    if(req.body.idea == null || req.body.for == null ){
        res.json({message: "Nothing can be null!"})
    }
    else if(req.body.idea == "" || req.body.for == ""){
        res.json({message: "Nothing can be empty!"})
    }
    else if(typeof req.body.idea !== 'string' || typeof req.body.for !== 'string'){
        res.json({message: "Everything has to be a string!"})
    }
    else {
        next();
    }
}

let validateUserPhoneNumber = (req,res,next)=>{
    const result = validatePhoneNumber.validate(req.body.phoneNumber);
    if(result == false || req.body.phoneNumber.startsWith("+32") == false){
        res.json({message: "Wrong phone format! It needs to be formatted like: +320478552015"})
    }
    else {
        next();
    }
}
//source: https://www.npmjs.com/package/email-validator
//source: https://stackoverflow.com/questions/52456065/how-to-format-and-validate-email-node-js
let validateUserEmail = (req,res,next)=>{
    if(!validateEmail.validate(req.body.email)){
        res.json({message: "Wrong email format! It needs to be formatted like: test@gmail.com"})
    }
    else {
        next();
    }
}

module.exports = {
    validateTypeUser,
    validateOffsetAndLimit,
    validateTypeIdea,
    validateUserPhoneNumber,
    validateUserEmail
};