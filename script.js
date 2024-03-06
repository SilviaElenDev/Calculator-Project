function insert(num){
    let numero =  document.querySelector('.areaCalculoEResultado').innerHTML;
    document.querySelector('.areaCalculoEResultado').innerHTML = numero + num;
}

function calc(){
    let calculo =  document.querySelector('.areaCalculoEResultado').innerHTML;

    // expressão1 = permite a entrada ou o resultado com a letra'e',numeros fracionados e parenteses
    // expressão2 = permite apenas a entrada de calculos e não numeros soltos

    const expressaoRegular = /^[\d\s]*([-+*/]\s*)*[\d\s]*([eE][-+]?\d+\s*)*(,\d+)?([\d\s]*([-+*/]\s*)*[\d\s]*([eE][-+]?\d+\s*)*(,\d+)?[\d\s]*\([\d\s]*([-+*/]\s*)*[\d\s]*([eE][-+]?\d+\s*)*(,\d+)?[\d\s]*\))*/;
    const expressaoRegular2 =  /^[\d\s]*([-+*/()][\d\s]*)+$/;

    if (expressaoRegular.test(calculo ) && expressaoRegular2.test(calculo)){
        let resultado = document.querySelector('.areaCalculoEResultado').innerHTML = eval(calculo);
        document.querySelector('.ultimoCalculo').innerHTML = `${calculo} = ${resultado}`;
    } else {
        document.querySelector('.areaCalculoEResultado').innerHTML = "Insira seu calculo..."
        setTimeout(() => {
        document.querySelector('.areaCalculoEResultado').innerHTML = "";
        },"1000");
    }


    // Gerar HISTORICO
    let ultimoCalculo = document.querySelector('.ultimoCalculo').innerHTML;
    let calculosFeitos = document.querySelector('.calculosFeitos');

    if(ultimoCalculo === " "){}
    else{
        let newLi = document.createElement("li") ;
        newLi.textContent = ultimoCalculo;
        calculosFeitos.appendChild(newLi);
    }   
}

function mostrarHistorico(){
    let historico = document.querySelector('.historico');
    if(historico.style.display === "none"){
        historico.style.display = "block"
    }else{
        historico.style.display = "none"
    }
    
    
}

function cleanAll(){
    document.querySelector('.areaCalculoEResultado').innerHTML = ""
    document.querySelector('.ultimoCalculo').innerHTML = ""
}
function clean(){
    let limparNumero =  document.querySelector('.areaCalculoEResultado').innerHTML;
    document.querySelector('.areaCalculoEResultado').innerHTML =limparNumero.substring(0, limparNumero.length -1 )
}

