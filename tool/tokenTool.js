var jwt = require("jsonwebtoken");
var tokent = {}

const privateKey = "wdnmd";//加密字段
const exp = 60*60*24; //有效期 s

tokent.GetToken = function (data){
    let d = {
        id:data.id,
        userEmail:data.userEmail
    }
    return jwt.sign(d,privateKey,{expiresIn:exp});
}

tokent.CheckToken = function (token){
    let now = Date.now() / 1000;

    try{
        let dec = jwt.verify(token,privateKey)
        return dec.exp<now ? false : true;
    }catch(err){
        return false;
    }
}

module.exports = tokent;