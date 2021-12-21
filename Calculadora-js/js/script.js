function inserir(num){
    document.getElementById('tela').innerHTML += num
}

function limpar(){
    document.getElementById('tela').innerHTML = ""
}

function voltar(){
    var resultado = document.getElementById('tela').innerHTML
    document.getElementById('tela').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular(){
    let display = document.getElementById('tela').innerHTML
    let ultimo = display
    ultimo = ultimo.charAt(ultimo.lengt -1)

    let resultado = display

    if(resultado){
        document.getElementById('tela').innerHTML = eval(resultado)
    }else{
        document.getElementById('tela').innerHTML = display
    }
}