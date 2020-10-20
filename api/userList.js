var mssql = require("../tool/mssqldb");
var strTool = require("../tool/stringTool");

var userList = {};


userList.addUser =function(data,res){
    console.log(data);
    let sqlstr = strTool.format(
        "select top 1 * from [User] where userEmail = '?' ",
        data.userEmail
    )
    mssql.sql(sqlstr,function(e1,r1){

        if(r1.rowsAffected[0]>0){
            res.send({
                result:false,
                message:"该邮箱已注册",
                resCode:1002
            });
        }
        else{
            sqlstr = strTool.format(
                "insert into [User] (userEmail,password,leaderId,name,phone,address,role,state) values ('?','?','?','?','?','?','?','?')",
                data.userEmail,data.password,data.userId,data.name,data.phone,
                JSON.stringify(data.address),
                data.role,data.state
            )

            mssql.sql(sqlstr,(e2,r2)=>{
                if(r2.rowsAffected[0]>0){
                    res.send({
                        result:true,
                        message:"添加成功",
                        resCode:0
                    })
                }
                else{
                    res.send({
                        result:true,
                        message:"添加用户失败",
                        resCode:1010
                    })
                }
            })
        }
    })

}

userList.getUser = function(data,res){
    let strsql = strTool.format(
        "select userEmail,name,phone,address,role,state from [User] where leaderId='?' order by id offset ? rows fetch next 10 rows only",
        data.userId,
        (data.page-1)*10
    );

    mssql.sql(strsql,(e,r)=>{
        console.log(r);

        strsql = strTool.format(
            "select count(*) as count from [User] where leaderId='?'",
            data.userId
        )

        mssql.sql(strsql,(e1,r1)=>{
            let count = r1.recordset[0].count;
            res.send({
                result:true,
                message:"获取用户列表成功",
                resCode:0,
                data:{
                    count:count,
                    data:r.recordset,
                }
            });
        })

        
    })
}

module.exports = userList; 