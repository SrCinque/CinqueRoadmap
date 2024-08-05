const express = require('express');

const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.use('/public', express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {

    res.send("Carregou com sucesso!");

})

app.listen(5000, (req, res) => {
    console.log("Funfou!");

})