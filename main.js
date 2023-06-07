const botao = document.getElementById('botao')
const texto = document.getElementById('teste_texto-change')

var textoVariaveis = ['texto mudando', 'testando', 'de novo', 'mais uma vez'];



function change() {
    const textoVariaveisMath = textoVariaveis
    [Math.floor(Math.random() * textoVariaveis.length)]
    texto.innerHTML = `<img class='imagem' src='./big-beijo-meme.gif'/>
                        <audio autoplay>
                        <source src="./bigbeijo.mp3" type="audio/mp3">  
                        </audio>`
    
}