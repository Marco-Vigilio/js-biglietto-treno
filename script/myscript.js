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

let numerokm;
let età;

numerokm = parseInt(prompt("Inserisci il numero di kilomentri che devi fare: "));
if (numerokm === 3){
    console.log("questo è un numero");
    console.log("Il passeggero deve fare: "+ numerokm + "km");

}
else{
    console.log("Deve inserire un numero, ricarichi la pagina");
}