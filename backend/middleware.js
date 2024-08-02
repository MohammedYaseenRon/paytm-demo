//it just do authenticated request that usersend

const {JWT_SECRET} = require("./config");
const jwt = require("jsonwebtoken");

//anytime the req comes gets a auth header

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    //bearer means types of token this is we can have multiple types of token
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    //decode and verify it

    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        if(decoded.userId){
            req.userId = decoded.userId; 
            next();
        }else{
            return res.status(403).json({});
        }
    }catch(err){
        return res.status(403).json({});
    }
}; 
module.exports ={
    authMiddleware  
}




