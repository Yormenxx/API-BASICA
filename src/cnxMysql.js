//MYSQL

const mysql = require("mysql2");

const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '-CONTRA',
    database : 'nombre-DB'
});


const cnx = ()=>{

    con.connect(error =>{

        if(error)throw error;
        console.log("Server mysql running");
    
    })

}

module.exports= {
    cnx,
    con
}