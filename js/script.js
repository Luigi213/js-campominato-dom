// js-campominato-grid

//1- Creare bottone in html che al click genererà una griglia di gioco
//2- Creare la griglia di gioco in js
//2.1 ogni ha un numero progressivo, da 1 a 100, quindi 10 caselle per ognuna delle 10 righe
//2.2 al click di una delle caselle si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// js-campominato-dom

//1- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe
//1.1 usare un fuction con i relativi math
//1.2 cassella solo una bomba, quindi non ci devono essere numeri uguali nell’array generato dal computer
//1.3 cella si colora di rosso qualora avessimo preso il numero presente nell'array, quindi abbiamo preso
//1.4 cella non appartenente ai numeri dell'array si va avanti
//1.5 vince chi non prende nemmeno una cella in cui al suo interno ci sia un numero presente nell’array
//2- Visuallizare il punteggio fatto a schermo, ossia il numero di volte che si ha cliccato sulla casella giusta
function createSquare(num){
    let elementSquare = document.createElement('div');
    
    elementSquare.classList.add('square');
    
    elementSquare.innerText = num;
    
    return elementSquare;
}

let button = document.getElementById('btn');
button.addEventListener('click', function(){
    let difficult = document.getElementById('stage').value;
    if(difficult === 'easy'){        
        let grid = document.getElementById('grid');
        
        document.getElementById('grid').innerHTML="";

        let bombs = createBombsArrey(1, 100);

        let counter = 0;;

        for(let i=0; i<100; i++){
            let newElement = createSquare(i +1);

            newElement.style.width = 'calc(100% / 10)';

            newElement.style.height = 'calc(100% / 10)';
            
            grid.appendChild(newElement);

            newElement.addEventListener('click', function(){
                this.classList.add('click');
                if(bombs.includes(parseInt(this.innerText))){
                    this.classList.add('red');
                    grid.classList.add('blockEvents');
                    alert(`Mi dispiace, hai perso, il tuo punteggio è: ${counter}`);
                    location.reload()
                }
                if(counter == 100 - bombs.length){
                    alert(`Congratulazioni, hai vinto, il tuo punteggio è: ${counter}`);
                }
                counter++;
            }, {once : true})
        }

    }
    else if(difficult === 'medium'){        
        let grid = document.getElementById('grid');

        document.getElementById('grid').innerHTML="";

        let bombs = createBombsArrey(1, 81);

        let counter = 0;
        
        for(let i=0; i<81; i++){
            let newElement = createSquare(i +1);

            newElement.style.width = 'calc(100% / 9)';

            newElement.style.height = 'calc(100% / 9)';
            
            grid.appendChild(newElement);
            
            newElement.addEventListener('click', function(){
                this.classList.add('click');
                if(bombs.includes(parseInt(this.innerText))){
                    this.classList.add('red');
                    grid.classList.add('blockEvents');
                    alert(`Mi dispiace, hai perso, il tuo punteggio è: ${counter}`);
                    location.reload()
                }
                if(counter == 81 - bombs.length){
                    alert(`Congratulazioni, hai vinto, il tuo punteggio è: ${counter}`);
                }
                counter++;
            }, {once : true});
        }    
    }
    else{        
        let grid = document.getElementById('grid');

        document.getElementById('grid').innerHTML="";

        let bombs = createBombsArrey(1, 49);
        
        let counter = 0;
        
        for(let i=0; i<49; i++){
            const newElement = createSquare(i +1);

            newElement.style.width = 'calc(100% / 7)';

            newElement.style.height = 'calc(100% / 7)';
            
            grid.appendChild(newElement);

            console.log(newElement)
            
            newElement.addEventListener('click', function(){
                this.classList.add('click');
                if(bombs.includes(parseInt(this.innerText))){
                    this.classList.add('red');
                    grid.classList.add('blockEvents');
                    alert(`Mi dispiace, hai perso, il tuo punteggio è: ${counter}`);
                    location.reload()
                }
                if(counter == 49 - bombs.length){
                    alert(`Congratulazioni, hai vinto, il tuo punteggio è: ${counter}`);
                }
                counter++;
            }, {once : true});
        }    
    }
});

// funzione che genera causali
function createBombsArrey(min, max)
{
    let arrayBombBlackList = [];
    let i = 0;
    while(i < 16){
        let radomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!arrayBombBlackList.includes(radomNumber)){
            arrayBombBlackList.push(radomNumber)
            i++;
        }
    }
    return arrayBombBlackList;
} 