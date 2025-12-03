        //cria uma referencia ao forms e ao h3 e h4
        const frm = document.querySelector("form")
        const resp1 = document.querySelector("h3")
        const resp2 = document.querySelector("h4")

        //cria um ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventlistener("submit", (e)=> {
    const titulo = frm.inTitulo.value //obtem o conteúdo do campo titulo
    const duracao = Number(frm.inDuracao.value)

    const horas = Math.floor(duracao / 60) // arrendonda para baixo o resultado
    const minutos = duracao % 60 //divide duração por 60

    resp1.innerText = titulo //exibe a resposta no HTML
    resp2.innerText = `${horas} horas e ${minutos} minutos`

    e.preventDefault() //evita o envio do forms pelo botão submit.
})
