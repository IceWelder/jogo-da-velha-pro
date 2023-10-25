let jogador = "1";

function play(cell){

    if(cell.innerHTML === ""){
        cell.innerHTML = jogador;
    } else{
        return
    }


    if(jogador == "1"){
       jogador = "0"; 

    } else{
        jogador = "1"
    }
}