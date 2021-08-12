// function esconderTitulo() {
//     let titulo = document.querySelector('h1')
//     titulo.style.display = 'none'
// }


// function alternarClasseEscondido() {
//     let p = document.querySelector('p')
//     p.classList.toggle('escondido')
// }


// let btn = document.getElementById('btn-acao') // document.querySelector('#btn-acao')

// btn.addEventListener('click', alternarClasseEscondido)

// let form = document.querySelector('form')
// let btn = document.querySelector('button[type="button"]')

// btn.addEventListener('click', function () {
//     let res = document.querySelector('#resultado')
//     let dados = new FormData(form)

//     res.textContent = dados.get('mensagem')

//     let corSelecionada = dados.get('cor')
    
//     if (corSelecionada == 'azul') {
//         res.style.color = 'blue' 
//     } else if (corSelecionada == 'vermelho') {
//         res.style.color = 'red'
//     } else if (corSelecionada == 'verde') {
//         res.style.color = 'green'
//     }
// })



///////////////////////////////



let btnBusca = document.querySelector('#pesquisar')
let termoBusca = document.querySelector('#termo-de-busca')
let areaResultados = document.querySelector('#resultados')


btnBusca.addEventListener('click', function () {
    areaResultados.innerHTML = "..."
    pesquisarLivrosEExibir(termoBusca.value)
})


function pesquisarLivrosEExibir(termo) {
    termo = encodeURIComponent(termo)

    fetch('http://openlibrary.org/search.json?q=' + termo)
    .then(resp => resp.json())
    .then(dados => anexarResultados(dados.docs))
}

function anexarResultados(resultados) {
    areaResultados.innerHTML = ""

    resultados // docs
    .forEach(resultado => {
        let titulo = resultado.title
        let p = document.createElement('p')
        p.textContent = titulo

        areaResultados.appendChild(p)
    }) 
}