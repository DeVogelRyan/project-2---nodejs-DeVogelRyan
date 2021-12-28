
let validate = (req,res,next)=>{
    if(!req.query.offset || !req.query.limit){
        res.json({message: "limit and offset can't be empty"})
    }
    else {
        next();
    }
}

module.exports = validate;