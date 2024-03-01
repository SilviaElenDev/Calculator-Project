function insert(num){
    let numero =  document.querySelector('.areaCalculoEResultado').innerHTML;
    document.querySelector('.areaCalculoEResultado').innerHTML = numero + num;
}

function calc(){
    let resultado =  document.querySelector('.areaCalculoEResultado').innerHTML;
    if (resultado){
        document.querySelector('.areaCalculoEResultado').innerHTML = eval(resultado);
    }else{
        document.querySelector('.areaCalculoEResultado').innerHTML = "Insira seu calculo..."
    }
}

function clean(){
    let limparNumero =  document.querySelector('.areaCalculoEResultado').innerHTML;
    document.querySelector('.areaCalculoEResultado').innerHTML =limparNumero.substring(0, limparNumero.length -1 )
}

function cleanAll(){
    document.querySelector('.areaCalculoEResultado').innerHTML = ""
}