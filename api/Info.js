var mssql = require("../tool/mssqldb");
var strTool = require("../tool/stringTool");
var dateTool = require("../tool/dateTool")
var tokenTool = require("../tool/tokenTool")

var Info = {};

var checktoken = function(data,res){
    if(!tokenTool.CheckToken(data.token)){
        res.send({
            result:false,
            message:"token失效",
            resCode:1007
        })
        return false;
    }
    return true;
}

Info.addFirstCategory = function(data,res){

    if(!checktoken(data,res))return;

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

                sqlstr = strTool.format(
                    "select * from Category where userId = '?' and txt = '?'",
                    data.userId,
                    data.txt
                );
                mssql.sql(sqlstr,(error,r2)=>{
                    res.send({
                        result:true,
                        message:"添加分类成功",
                        resCode:0,
                        data:r2.recordset[0]
                    })
                })
                
            })
        }
    })
}

Info.getCategory = function(data,res){

    if(!checktoken(data,res))return;

    let sqlstr = strTool.format(
        "select * from Category where userId = '?'",
        data.userId
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

    if(!checktoken(data,res))return;

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
            "update Category set txt = '?' where id = '?' and userId = '?'",
            data.txt,
            data.id,
            data.userId
        );
        mssql.sql(sqlstr,(err,result)=>{
            if(err){console.log(err);return;}
            if(result.rowsAffected[0]>0){
                res.send({
                    result:true,
                    message:"修改成功",
                    resCode:0
                })
            }
            else{
                res.send({
                    result:true,
                    message:"分类不存在",
                    resCode:1009
                })
            }
        });
    }
    
}

Info.removeCategory = function(data,res){

    if(!checktoken(data,res))return;

    let sqlstr = strTool.format(
        "delete from Category where id = '?' and userId='?'",
        data.id,
        data.userId
    );
    mssql.sql(sqlstr,(err,result)=>{
        if(err){console.log(err);return;}
        if(result.rowsAffected[0]>0){
            res.send({
                result:true,
                message:"删除成功",
                resCode:0
            })
        }
        else{
            res.send({
                result:true,
                message:"分类不存在",
                resCode:1009
            })
        }
        
    });
    
}

Info.addInfo = function(data,res){

    if(!checktoken(data,res))return;

    let sqlstr = strTool.format(
        "insert into Info (categoryId,userId,title,[content],date) values ('?','?','?','?','?')",
        data.categoryId,data.userId,data.title,data.content,parseInt(Date.now().valueOf()) 
    )

    mssql.sql(sqlstr,(err,result)=>{
        if(err){console.log(err);return;}

        sqlstr = strTool.format(
            "select * from Info where title = '?' and userId = '?'",
            data.title,data.userId
        )

        mssql.sql(sqlstr,(e1,r1)=>{
            if(e1){console.log(e1);return;}

            res.send({
                result:true,
                message:"信息添加成功",
                resCode:0,
                data:r1.recordset[0]
            })
        })
    })
}

Info.getInfo = function(data,res){

    if(!checktoken(data,res))return;

    let cdt = "";
    
    if(data.id!=null&&data.id!=""){
        cdt += " and id = "+data.id;
    }
    else{
        if(data.categoryId!=null && data.categoryId!="") cdt += " and categoryId = "+data.categoryId;
        if(data.startTime!=null && data.endTime!=null) {
            cdt+=strTool.format(" and date > ? and date <?",data.startTime,data.endTime);
        }
        if(data.title!=null && data.title!=""){
            cdt+=strTool.format(" and title like '%?%'",data.title)
        }
    }
    

    let sqlstr = strTool.format(
        "select count(*) as count from Info where userId = '?' ?",
        data.userId,
        cdt
    )

    mssql.sql(sqlstr,(e,r)=>{
        if(e){console.log(e);return;}
        let count = r.recordset[0].count;
        
        sqlstr = strTool.format(
            "select * from Info where userId='?' ? order by id offset ? rows fetch next 10 rows only ",
            data.userId,cdt,(data.page-1)*10
        )

        mssql.sql(sqlstr,(e1,r1)=>{
            if(e1){console.log(e1);return;}

            res.send({
                result:true,
                message:"获取成功",
                resCode:0,
                data:{
                    count:count,
                    info:r1.recordset
                }
            })
        })
    })
}

Info.removeInfo = function(data,res){
    if(!checktoken(data,res))return;

    let sqlstr = strTool.format(
        "delete from Info where id in (?) and userId = '?'",
        data.id.toString(),
        data.userId
    );
    mssql.sql(sqlstr,(err,result)=>{
        if(err){console.log(err);return;}
        if(result.rowsAffected[0]>0){
            res.send({
                result:true,
                message:"删除成功",
                resCode:0
            })
        }
        else{
            res.send({
                result:true,
                message:"信息不存在",
                resCode:1008
            })
        }
    });
    
}

Info.reviseInfo = function(data,res){

    if(!checktoken(data,res))return;

    let sqlstr = strTool.format(
        "update Info set categoryId = '?',title='?',[content]='?' where id = '?' and userId='?'",
        data.categoryId,data.title,data.content,data.id,data.userId
    );
    mssql.sql(sqlstr,(err,result)=>{
        if(err){console.log(err);return;}

        if(result.rowsAffected[0]>0){
            res.send({
                result:true,
                message:"修改成功",
                resCode:0
            })
        }
        else{
            res.send({
                result:true,
                message:"信息不存在",
                resCode:1008
            })
        }
        
    });
    
}



module.exports = Info;