var cartaPaulo={
    nome:"seya de pegaso",
    atributos:{
    ataque:80,
    defesa:60,
    margia:90
    }
    
}
var cartaRafa={
    nome:"bulbasauro",
    atributos:{
    ataque:70,
    defesa:65,
    margia:85
    }
   
}
var cartaGui={
    nome:"Lorde darth vader",
    atributos:{
    ataque:88,
    defesa:62,
    margia:90

    }
   
}

var cartas=[cartaPaulo,cartaRafa,cartaGui]

function sortearCarta() {
    var numeroCartaMaquina=parseInt(Math.random()*3)
    cartaMaquina=cartas[numeroCartaMaquina]

    var numeroCartaJogador=parseInt(Math.random()*3)
    while (numeroCartaJogador==numeroCartaMaquina) {
        numeroCartaJogador=parseInt(Math.random()*3)
        
    }
    cartaJogador=cartas[numeroCartaJogador]
    console.log(cartaJogador)
    document.getElementById('btnSortear').disabled=true
    document.getElementById('btnJogar').disabled=false
    exibirOpcoes()
     
}

function exibirOpcoes() {
    var opcoes=document.getElementById('opcoes')
    var opcoesTextos=""
    for(var atributo in cartaJogador.atributos){
        opcoesTextos+="<input type='radio' name='atributo' value='"+ atributo + "'>"+ atributo
    }
    opcoes.innerHTML=opcoesTextos
}
function obtemAtributoSelecionado() {
    var radioAtributo=document.getElementsByName('atributo')
    for(var i=0;i<radioAtributo.length;i++){
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
            
        }
    }
    
}
function jogar() {
    var  atributoSelecionado=obtemAtributoSelecionado()
    if(cartaJogador.atributos[atributoSelecionado]> cartaMaquina.atributos[atributoSelecionado]){
        alert('venceu a carta máquina')

    }else if(cartaJogador.atributos[atributoSelecionado]<cartaMaquina.atributos[atributoSelecionado]){
        alert('Perdeu. carta da máquina é maior')
    }else{
        alert("Empatou!")
    }
    console.log(cartaMaquina)
}
