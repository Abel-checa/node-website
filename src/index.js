const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send("<h2>Pagina principal</h2>")
    res.end()
});


app.get('/about',(req,res) =>{
    res.send("<h2>Acerca de</h2>")
    res.end()
});

app.listen(3000);
console.log('El servidor arrancando en el puerto 3000;');








