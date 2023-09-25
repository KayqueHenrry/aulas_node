const express = require("express") /*importar o express*/

const app = express() 

app.get('/', (requisicao, resposta) => {
    resposta.send("Seja bem vindo(a) ao meu servidor e vai São Paulo!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})


//https://localhost:3000