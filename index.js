const sumUltils = (function sumUltils(){
    let value = 0;
    function bombaPatch(pontos){
        return value += pontos;
    }

    return {
        rasteira (){
            return bombaPatch(-1);

        },

        golaco () {
            return bombaPatch (2);

        },

        placar (){
           console.log(value);
        }
    }
})();
sumUltils.placar(); //0

sumUltils.golaco();
sumUltils.golaco();
sumUltils.placar(); //2


sumUltils.rasteira();
sumUltils.placar(); //1
