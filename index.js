const botao = document.querySelectorAll(".botao")
const personagem = document.querySelectorAll('.personagem')


botao.forEach(function (botoes , constador) {
    botoes.addEventListener("click", function () {
        removerBotao()
        removerPersonagem()
        botoes.classList.add('selecionado');
        personagem[constador].classList.add('selecionado')
    })
})


function removerBotao() {
    const removerBotaoEsxistente = document.querySelector('.botao.selecionado');
    removerBotaoEsxistente.classList.remove('selecionado');
}
function removerPersonagem(){
    const removerPersonagemExistente = document.querySelector(".personagem.selecionado")
    removerPersonagemExistente.classList.remove('selecionado')
}