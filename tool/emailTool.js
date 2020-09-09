var nodemailer = require("nodemailer");


var email ={};



var transporter =nodemailer.createTransport({
    host:"smtp.163.com",
    secure:true,
    auth:{
        user:"wuzisheng114@163.com",
        pass:"GWVAZTXQPSOURCYB"
    }
})


email.sendRegister = async function(to,title,content){
    if(to=="")return;

    let mailConfig = {
        from:"wuzisheng114@163.com",
        to,
        subject:title,
        html: content
    }

    let info = await transporter.sendMail(mailConfig);
    
    console.log("Message sent: %s", info.messageId);
    return info;
}



module.exports = email;