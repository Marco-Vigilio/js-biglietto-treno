/*
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

const nome = (prompt("Benvenuto nel Polar Express, inserisci il tuo nome: "));
console.log("Il nome del passeggiero è: " + nome);
document.getElementById('name').innerHTML += nome;

// TODO: il numero di chilometri che vuole percorrere /
const numerokm = parseInt(prompt("Inserisci il numero di kilomentri che devi fare: "));

if (isNaN(numerokm)){
    console.log("Questo non è un numero");
    document.getElementById('kilometri').innerHTML = "Mi dispiace non ha inserito un numero, ricaricare la pagina";
}
else{
    console.log("Il passeggero deve fare: "+ numerokm + "km");
    document.getElementById('kilometri').innerHTML += numerokm + "km";

    //todo: l'età del passeggero /
    const età = parseInt(prompt("Inserisci la tua età: "));

    if (isNaN(età)){
        console.log("Questo non è un numero");
        document.getElementById('eta').innerHTML = "Mi dispiace non ha inserito un numero, ricaricare la pagina";
    }
    else{    
        console.log("Età del passeggero: "+ età);
        document.getElementById('eta').innerHTML += età;
        
        //*Prezzo biglietto al km */
        let prezzobiglietto = 0.21;
        let sconto;
        prezzobiglietto = prezzobiglietto * numerokm;
        console.log("In base hai chilometri il prezzo del biglietto è di: " + prezzobiglietto +"€");

        // todo: va applicato uno sconto del 20% per i minorenni*/
        if(età < 18){
            console.log("Il passeggiero è minorenne");
            console.log("Ha uno sconto del 20%");
            sconto = (20 / 100) * prezzobiglietto; 
            prezzobiglietto = prezzobiglietto - sconto;
            console.log("Il prezzo del biglietto è: " + prezzobiglietto + "€");

            console.log(" ");
            prezzobiglietto = prezzobiglietto.toFixed(2);
            console.log("Prezzo del biglietto approssimato " + prezzobiglietto +"€");

            document.getElementById('prezzo').innerHTML += prezzobiglietto + "€";
        }
        else{
            console.log("Il passeggero è maggiorenne");

            // todo: va applicato uno sconto del 40% per gli over 65.*/
            if (età > 65){
                console.log("Ma se è over 65 ha il prezzo scontato del 40%");
                sconto = (40 / 100) * prezzobiglietto; 
                prezzobiglietto = prezzobiglietto - sconto;
                console.log("Il prezzo del biglietto è: " + prezzobiglietto +"€");

                console.log(" ");
                prezzobiglietto = prezzobiglietto.toFixed(2);
                console.log("Prezzo del biglietto approssimato " + prezzobiglietto +"€");

                document.getElementById('prezzo').innerHTML += prezzobiglietto + "€";
            }
            else{
                console.log("Il passeggero paga la tariffa normale di: " + prezzobiglietto);

                console.log(" ");
                prezzobiglietto = prezzobiglietto.toFixed(2);
                console.log("Prezzo del biglietto approssimato " + prezzobiglietto +"€");

                document.getElementById('prezzo').innerHTML += prezzobiglietto + "€";
            }
        }
    }
}



