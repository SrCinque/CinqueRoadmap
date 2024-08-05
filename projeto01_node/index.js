const express = require('express');
const path = require('path');
const app = express();


// Definindo para a Engine que rode com HTML
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public', express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, '/views'));

var tarefas = ['Task1','Task2','Task3'];


app.get('/', (req, res) => {

    res.render('index',{tasks: tarefas})

})

app.get('/deletar/:id', (req, res) => {

    tarefas = tarefas.filter((val,index)=>{
        if(index != req.params.id){
            return val
        }
    })

    res.render('index',{tasks: tarefas})

})


app.listen(5000, (req, res) => {
    console.log("Funfou!");

})