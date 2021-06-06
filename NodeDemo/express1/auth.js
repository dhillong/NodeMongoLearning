function authanticate(req, resp, next){
    console.log("Authanticated");
    next();
}

module.exports=authanticate;