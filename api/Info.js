var mssql = require("../tool/mssqldb");
var strTool = require("../tool/stringTool");

var Info = {};

Info.addFirstCategory = function(data,res){
    if(data.txt.length >10){
        res.send({
            result:false,
            message:"修改不得超过10个字符",
            resCode:1006
        })
        return;
    }
    let sqlstr = strTool.format(
        "select * from Category where userId = '?' and txt = '?'",
        data.userId,
        data.txt
    );
    mssql.sql(sqlstr,(err,result)=>{
        if(err){console.log(err);return;}

        let r = result.recordset;
        if(r.length>0){
            res.send({
                result:false,
                message:"该分类已存在",
                resCode:1005
            })
        }
        else{
            sqlstr = strTool.format(
                "insert into Category (userId,txt) values  ('?', '?')",
                data.userId,
                data.txt
            )
            mssql.sql(sqlstr,(e,ru)=>{
                if(e){console.log(e);return;}
                res.send({
                    result:true,
                    message:"添加分类成功",
                    resCode:0
                })
            })
        }
    })
}

Info.getCategory = function(userId,res){
    let sqlstr = strTool.format(
        "select * from Category where userId = '?'",
        userId
    );

    mssql.sql(sqlstr,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        
        res.send({
            result:true,
            message:"获取分类列表成功",
            resCode:0,
            data:result.recordset
        });

    })
}

Info.reviseCategory = function(data,res){
    if(data.txt.length >10){
        res.send({
            result:false,
            message:"修改不得超过10个字符",
            resCode:1006
        })
        return;
    }
    else{
        let sqlstr = strTool.format(
            "update Category set txt = '?' where id = '?'",
            data.txt,
            data.id
        );
        mssql.sql(sqlstr,(err,result)=>{
            if(err){console.log(err);return;}
        });
        res.send({
            result:true,
            message:"修改成功",
            resCode:0
        })
    }
    
}

Info.removeCategory = function(id,res){
    let sqlstr = strTool.format(
        "delete from Category where id = '?'",
        id
    );
    mssql.sql(sqlstr,(err,result)=>{
        if(err){console.log(err);return;}
    });
    res.send({
        result:true,
        message:"删除成功",
        resCode:0
    })
}

module.exports = Info;