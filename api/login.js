var email = require("../tool/emailTool");
var strTool = require("../tool/stringTool");
var random = require("../tool/randomTool");
var mssql = require("../tool/mssqldb");
var md5 = require("md5");
var tokent = require("../tool/tokenTool")

var login = {};
var codeList = [];

var codeExp = 60;

//获取验证码
login.getCode = function(to){
    let getcode = random.GetCode();
    let date = Date.now().valueOf();
    let expIn = date + codeExp*1000;

    let item = codeList.find(i=>{i.userEmail==expIn});
    if(item == null){
        codeList.push({
            code:getcode,
            userEmail:to,
            expIn:expIn
        })
    }
    else{
        item.code=getcode;
        item.expIn=expIn
    }

    
    console.log(codeList);
    let mailHtml = strTool.format(
        "<div><style type='text/css'>.table{width:400px;background:#17212e;margin:auto;font-family:'MicrosoftYahei';padding:0 50px 20px 50px;}.title{height:100px;width:100%;color:#66c0f4;font-size:30px;font-weight:bold;line-height:100px;}.content{width:100%;color:#c6d4df;font-size:19px;line-height:30px;}.code{margin-top:10px;font-size:30px;color:#66c0f4;font-weight:bold;}.tips{margin:20px 0px;background:#121a25;padding:10px 20px;font-size:14px;line-height:initial;}</style><div class='table'><div class='title'>邮箱验证</div><div class='content'>尊敬的用户：<br />以下是你使用<u>?</u>邮箱注册Managment账号的验证码:<div class='code'>?</div><div class='tips'>要完成注册，您将需要注册验证码。无人可以在不访问这封电子邮件的前提下注册您的帐户。该验证码有效时间为60s<br /><br />如果您未曾试图注册，请忽略这封邮件，并留意您的电子邮件账户是否泄漏，确保您的帐户安全。</div></div></div><br /></div>",
        to,
        getcode
    )
    email.sendRegister(to,"Management-邮箱注册",mailHtml);
}
//注册
login.register = function(data){
    if(checkCode(data.userEmail,data.code)){
        let index = codeList.findIndex(i=>{
            return i.userEmail == data.userEmail;
        });
        codeList.splice(index,1);

        let sqlstr = strTool.format(
            "insert into [User] (userEmail,password) values  ('?', '?')",
            data.userEmail,
            md5(data.password)
        )
        mssql.sql(sqlstr,function(err,result){
            if(err){
                console.log("sql err:" + err);
            }
        })
        return {
            result:true,
            message:"注册成功",
            resCode:0
        }
    }
    else return{
        result:false,
        message:"验证码不正确或者已过期",
        resCode:1001
    }
}
//检查邮箱重复
login.checkUserRepeat = async function(data,res){
    let sqlstr = strTool.format(
        "select top 1 * from [User] where userEmail = '?'",
        data.userEmail
    )

    await mssql.sql(sqlstr,(err,result)=>{
        if(err){
          console.log(err);
          return;
        }
        else{
          
          if(result.recordset.length>0){
            res.send({
              result:false,
              message:"该邮箱已注册",
              resCode:1002
            });
          }
          else{
            login.getCode(data.userEmail);
            res.send({
                result:true,
                message:"邮件发送成功",
                resCode:0
            })
          }
        }
      })
}
//登录检查
login.checkLogin = async function(data,res){
    let sqlstr = strTool.format(
        "select top 1 * from [User] where userEmail = '?'",
        data.userEmail
    )

    await mssql.sql(sqlstr,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        let r = result.recordset;
        if(r.length>0){
            if(r[0].password === md5(data.password)){
                let token = tokent.GetToken({
                    userId:r[0].id,
                    userEmail:r[0].userEmail,
                });
                res.send({
                    result:true,
                    message:"登录成功",
                    data:{
                        userId:r[0].id,
                        userEmail:r[0].userEmail,
                        token
                    },
                    resCode:0
                })
            }
            else{
                res.send({
                    result:false,
                    message:"密码不正确",
                    resCode:1003
                })
            }
        }else{
            res.send({
                result:false,
                message:"用户邮箱不存在",
                resCode:1004
            })
        }
    });
}


//检查验证码
function checkCode(userEmail,code){
    code = code.toUpperCase();
    let i = codeList.findIndex(t=>{
        return t.userEmail == userEmail;
    });
    let result = false;
    if(i==-1) result = false;
    else if(codeList[i].code == code && codeList[i].expIn>Date.now().valueOf()){result = true;codeList.splice(i,1);}
    else result = false

    

    return result;

}



module.exports = login;