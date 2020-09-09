var strTool ={};

strTool.format = function(str){
    let index = 1;
    for(let i =0 ;i<str.length;){
    if(str.charAt(i)=='?'){
        str = insertString(str,i,arguments[index]);
        i = i+arguments[index].toString().length;
        index++;
    }
    else{
        i++;
    }
    }
    return str;
}

function insertString(soure,insert,str) {
    return soure.slice(0,insert) + str +soure.slice(insert+1);
  }

module.exports = strTool;