const express = require("express");
const app = express();

app.use("/", (req, res)=>{
    res.send("Olá Mundo");
})

app.listen(8080, console.log("Servidor iniciado na porta 8000"));