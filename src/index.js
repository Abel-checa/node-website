require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get('/',(req,res) =>{
    const user = "<h1> USER: "+process.env.MYSQL_USER+"HOLA MODIFICACION</h1>"
    const host =  "<h1> HOST: "+process.env.MYSQL_HOST+"</h1>"
    const pass =  "<h1>PASS: "+process.env.MYSQL_PASS+"</h1>"

    res.send(user + host + pass)
})

app.get('/about',(req,res) =>{
    res.send("<h2>Acerca de</h2>")
    res.end()
});

console.log(process.env.MYSQL_HOST)

app.listen(PORT);
console.log('El servidor arrancando en el puerto', PORT);








