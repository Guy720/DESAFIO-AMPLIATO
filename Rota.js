const express = require('express');

const app = express();

app.get('/Paginas/Resultado.html', (req, res) => {
    const nome = req.query.nome;
    const email = req.query.email;
    const senha = req.query.senha;
    const idade = req.query.idade;
    const masculino = req.query.masculino;
    const feminino = req.query.feminino;
    const outro = req.query.outro;
    const futebol = req.query.futebol;
    const pipa = req.query.pipa;
    const videogame = req.query.videogame;
    const tipo = req.query.tipo;
    const mensagem = req.query.mensagem;

    res.json({nome: `${nome}`});
    res.json({email: `${email}`});
    res.json({senha: `${senha}`});
    res.json({idade: `${idade}`});
    res.json({masculino: `${masculino}`});
    res.json({feminino: `${feminino}`});
    res.json({outro: `${outro}`});
    res.json({futebol: `${futebol}`});
    res.json({pipa: `${pipa}`});
    res.json({videogame: `${videogame}`});
    res.json({tipo: `${tipo}`});
    res.json({mensagem: `${mensagem}`});   
});

app.listen(3000);