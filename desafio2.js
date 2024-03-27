const carro = (function carro() {
    let acelerar = 0;
    let tanque = 50;
    let marcha= 1; 
    let frear = 0;
    var quantGasolina = 50;

    function acelerarCarro() {
        console.log ("Acelerando");
        return acelerar;
    }   

    function freiarCarro() {
        console.log ("freiando");
        return frear;
    }

    function abastecer() {
        console.log ("coloque gazoza");
        return tanque;
    }

    function colocarGasolina(){
        quantGasolina += 50 
        console.log("O novo valor após a adição é: "+ quantGasolina);
    }

    return {
        freiar(){
            return freiarCarro();
        },
        ligar(){
            return acelerarCarro();
        },
        abastecerr(){
            return abastecer();
        },
        colocarGasolina(){
            return colocarGasolina();
        },
    }
})();

carro.ligar();
carro.freiar();
carro.colocarGasolina();
carro.abastecerr();
