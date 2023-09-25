const express = required('express')
const app = express()
app.get('/', (requisicao, resposta) => {
    resposta.send("Que fase que tá o Tricolor paulista!!!")
})
app.listen(3000, () => {
    console.log("Tricolor ganhou o mundo em 92, 93 e 05!")
})
