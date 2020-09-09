var random = {};

random.GetCode = function(){
    let code = '';
    for(let i = 0 ; i < 6 ; i++){
        code += String.fromCharCode(65+Math.floor(Math.random()*26));
    }
    return code;
}

module.exports = random;