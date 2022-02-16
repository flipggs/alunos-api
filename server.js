const express = require("express");
const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send("API está funcionando");
});
app.use(express.json())

app.use(routes);

app.listen(3001, () => {
    console.log("Rodando na porta 3001");
})