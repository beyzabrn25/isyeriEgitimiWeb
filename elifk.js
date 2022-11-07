const sql= require("mssql/msnodesqlv8");
const { TYPES } = require("tedious");

const conn= new sql.ConnectionPool({
    database:"BsgOTP",
    server:"DESKTOP-5Q0UHTN",
    driver:"msnodesqlv8",
    options:{
        trustServerCertificate:true,     
        trustedConnection:true,
    }
})
let Makeread =function read() { 

    conn.connect().then((result)=>{
        if (result.connecting){
            console.log("connecting")
        }
        if (result.connected){
            result.request().query('SELECT * FROM dbo.ogrenci', (err,result)=>{
                if(err){
                console.log('hata',err)  }
                console.log('result',result.recordset)
            } )   
        }  
    })
}
let Makecreate =function create() { 
    conn.connect().then((result)=>{
        if (result.connecting){
            console.log("connecting")
        }
        if (result.connected){
            result.request().query("INSERT INTO dbo.ogrenci (numara,ad,soyad,kayitYıl,donemi,sigorta,isyeri) VALUES ('200541005','elif','kandemir','2020','5','7hhhukub','True')",(err,res)=>{
            
                if(err){
                    console.log('error',err)
                }
                console.log('ekleme tamamlandı',res.recordset)
            }) 
        }  
    })
}
let Makedelete = function deletem() { 
    conn.connect().then((result)=>{
        if (result.connecting){
            console.log("connecting")
        }
        if (result.connected){
            result.request().input('y','elif').query('DELETE FROM dbo.ogrenci where ad=@y',(err,res)=>{
                if(err){
                    console.log('error',err)
                }
                console.log('silme tamamlandı',res.recordset)
            })
        }  
    })
}
let Makeupdate = function updatem() { 
    conn.connect().then((result)=>{
        if (result.connecting){
            console.log("connecting")
        }
        if (result.connected){
            result.request().input('z','keyza').query("UPDATE dbo.ogrenci SET numara=200541023 where ad=@z",(err,res)=>{
                if(err){
                    console.log('error',err)
                }
                console.log('güncelleme tamamlandı',res.recordset)
            })
        }  
    })
}
module.exports= {
    Makeupdate:Makeupdate,
    Makecreate:Makecreate,
    Makeread:Makeread,
    Makedelete:Makedelete
}