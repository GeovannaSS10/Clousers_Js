const calculadora = (function calculadora() {
    let resultado;
    
    function calculo() {
        return resultado;
    }
    
    return {
    potencia (){
        console.log(5**5);
    },
    areaquadrado () {
        console.log(40*40) ;
    },
    retangulo(){
    console.log((20*2)/2);
    }
    }
    })();
    
    calculadora.potencia();
    calculadora.areaquadrado();
    calculadora.retangulo();
    
    