const {Router} = require("express");
const { con, cnx } = require("../cnxMysql");


const router = Router();


router.get("/",(req,res)=>{
    res.send("Bievenido a la Api")
})


router.get("/clientes",(req,res)=>{

    const sql =" SELECT * FROM cliente";

    con.query(sql, (error, results) => {

        if (error) throw error;

        if (results.length > 0) {

          res.json(results);

        } else {
          res.send('Not result');
        }
    });
})

router.get("/clientes/:id",(req,res)=>{

    const { id } = req.params

    const sql = `SELECT * FROM  cliente WHERE id = ${ id }`;

    con.query(sql, (error, result) => {

        if (error) throw error;

        if (result.length > 0) {

          res.json(result);

        } else {
          res.send('Not result');
        }
    });
})

router.post("/add",(req,res)=>{
    
    const sql = "INSERT INTO cliente SET ?"

    const clienteObj ={

        nombre: req.body.nombre,

        direccion: req.body.direccion,

        telefono: req.body.telefono
    }

    con.query(sql,clienteObj , error =>{

        if(error) throw error;

        res.send("cliente creado");
    })


})

router.put("/update/:id",(req,res)=>{
    
    const {id } = req.params;
    const {nombre,direccion,telefono} = req.body;
    const sql = `UPDATE cliente SET nombre = "${nombre}",direccion  = "${direccion}", telefono = "${telefono}"
    WHERE id = ${id}`

    con.query(sql, error =>{

        if(error) throw error;

        res.send("cliente actualizado");
    })


})

router.delete("/delete/:id",(req,res)=>{
    
    const { id } = req.params
    const sql = `DELETE FROM cliente WHERE id = ${id}`

    con.query(sql, error=>{
        if(error) throw error;

        res.send("cliente eleminado")
    })
})

module.exports =router;