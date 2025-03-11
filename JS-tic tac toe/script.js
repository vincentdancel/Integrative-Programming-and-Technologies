let playerTurn ="O";

function setSymbol(btnId){

    if (
    document.getElementById(btnId).innerHTML == "O" || document.getElementById(btnId).innerHTML == "X" 
    ) {
        return;
    }
    document.getElementById(btnId).innerHTML = playerTurn;
    let player = playerTurn;

    if (justWon()){
        setTimeout(() => {
            alert(player + "wins. Congratualions");
            window.location.reload();
        } , 100);
    }

    if (playerTurn == "X"){
        playerTurn = "O";
    } else {
        playerTurn = "X";
    }


function justWon() {
    if (

        document.getElementById("bOO").innerHTML ==playerTurn &&
        document.getElementById("bO1").innerHTML ==playerTurn &&
        document.getElementById("bO2").innerHTML ==playerTurn 


    ) {
        return true;
    } else if (
        document.getElementById("bO3").innerHTML ==playerTurn &&
        document.getElementById("bO4").innerHTML ==playerTurn &&
        document.getElementById("bO5").innerHTML ==playerTurn 

    ) {
        return true;
    } else if (
        document.getElementById("bO6").innerHTML ==playerTurn &&
        document.getElementById("bO7").innerHTML ==playerTurn &&
        document.getElementById("bO8").innerHTML ==playerTurn 

    ) {
        return true;
    } else if (
        document.getElementById("bOO").innerHTML ==playerTurn &&
        document.getElementById("bO4").innerHTML ==playerTurn &&
        document.getElementById("bO8").innerHTML ==playerTurn 

    ) {
        return true;
    } else if (
        document.getElementById("bO2").innerHTML ==playerTurn &&
        document.getElementById("bO4").innerHTML ==playerTurn &&
        document.getElementById("bO6").innerHTML ==playerTurn 

    ) {
        return true;
    } else if (
        document.getElementById("bOO").innerHTML ==playerTurn &&
        document.getElementById("bO3").innerHTML ==playerTurn &&
        document.getElementById("bO6").innerHTML ==playerTurn
    ) {
        return true;
    } else if (
        document.getElementById("bO1").innerHTML ==playerTurn &&
        document.getElementById("bO4").innerHTML ==playerTurn &&
        document.getElementById("bO7").innerHTML ==playerTurn 

    ) {
        return true;
    } else if (
        document.getElementById("bO2").innerHTML ==playerTurn &&
        document.getElementById("bO5").innerHTML ==playerTurn &&
        document.getElementById("bO8").innerHTML ==playerTurn 

    ) {
        return true;

    }

    return false;
    
    
}
}