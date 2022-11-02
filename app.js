const express = require('express');
const app = express();

app.listen(300, () => console.log("Servidor está rodando na porta 300"))

app.get('/usuario', (req, res) => res.send("Você está na porta Usuario"))
app.post('/usuario', (req, res) => res.send("Adicionando novo Usuario"))
app.put('/usuario/:id', (req, res) => res.send("Editando Usuario"))
app.delete('/usuario/:id', (req, res) => res.send("Excluindo Usuario"))