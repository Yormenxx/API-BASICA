const conectar = require("./cnxMysql");

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const logger = require("morgan");


//SETTINGS

conectar.cnx();

app.use(logger("dev"))

app.set("port",3000)


app.use(bodyParser.json())


//ROUTES

app.use(require("./Routes/routesIndex"))


app.use((req,res,next) =>{
    res.status(404).send("not found")
})


module.exports= app




















