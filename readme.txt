L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

//1- Creare bottone in html che al click genererà una griglia di gioco
//2- Creare la griglia di gioco in js
//2.1 ogni ha un numero progressivo, da 1 a 100, quindi 10 caselle per ognuna delle 10 righe
//2.2 al click di una delle caselle si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

//1- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe
//1.1 usare un fuction con i relativi math
//1.2 cassella solo una bomba, quindi non ci devono essere numeri uguali nell’array generato dal computer
//1.3 cella si colora di rosso qualora avessimo preso il numero presente nell'array, quindi abbiamo preso
//1.4 cella non appartenente ai numeri dell'array si va avanti
//1.5 vince chi non prende nemmeno una cella in cui al suo interno ci sia un numero presente nell’array
//2- Visuallizare il punteggio fatto a schermo, ossia il numero di volte che si ha cliccato sulla casella giusta