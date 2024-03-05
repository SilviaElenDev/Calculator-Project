function insert(num){
    let numero =  document.querySelector('.areaCalculoEResultado').innerHTML;
    document.querySelector('.areaCalculoEResultado').innerHTML = numero + num;
}

function calc(){
    let resultado =  document.querySelector('.areaCalculoEResultado').innerHTML;

       const expressaoRegular = /^[\d\s]*([-+*/]\s*)*[\d\s]*([eE][-+]?\d+\s*)*(.\d+)?([\d\s]*([-+*/]\s*)*[\d\s]*([eE][-+]?\d+\s*)*(.\d+)?[\d\s]*)*$/;

    if (expressaoRegular.test(resultado )){
        let ultimoResultado = document.querySelector('.areaCalculoEResultado').innerHTML = eval(resultado);
        var ultimoCalculo = document.querySelector('.ultimoResultado').innerHTML = `${resultado} = ${ultimoResultado}`;
    } else {
        document.querySelector('.areaCalculoEResultado').innerHTML = "Insira seu calculo..."
        setTimeout(() => {
        document.querySelector('.areaCalculoEResultado').innerHTML = "";
        },"1000");
    }
}

function cleanAll(){
    document.querySelector('.areaCalculoEResultado').innerHTML = ""
    document.querySelector('.ultimoResultado').innerHTML = ""
}
function clean(){
    let limparNumero =  document.querySelector('.areaCalculoEResultado').innerHTML;
    document.querySelector('.areaCalculoEResultado').innerHTML =limparNumero.substring(0, limparNumero.length -1 )
}

