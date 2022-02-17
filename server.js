const express = require("express");
const app = express();
const routes = require('./routes');
const delay = require("express-delay");

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("API está funcionando");
});
app.use(express.json())
app.use(delay(1500));

app.use(routes);

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})