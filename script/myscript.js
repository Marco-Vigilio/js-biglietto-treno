/**
//todo: 
Il programma dovrà chiedere all'utente 
il numero di chilometri che vuole percorrere e l'età 
del passeggero.
Sulla base di queste informazioni dovrà calcolare 
il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto 
è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
*/

const numerokm = parseInt(prompt("Inserisci il numero di kilomentri che devi fare: "));

if (isNaN(numerokm)){
    console.log("Questo non è un numero");
    document.getElementById('kilometri').innerHTML = "Mi dispiace non ha inserito un numero, ricaricare la pagina";
}
else{
    console.log("Il passeggero deve fare: "+ numerokm + "km");
    document.getElementById('kilometri').innerHTML += numerokm + "km";

    const età = parseInt(prompt("Inserisci la tua età: "));

    if (isNaN(età)){
        console.log("Questo non è un numero");
    }
    else{    
    console.log("Età del passeggero: "+ età);
    }
}