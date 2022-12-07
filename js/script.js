//1- Creare bottone in html che al click genererà una griglia di gioco
//2- Creare la griglia di gioco in js
//2.1 ogni ha un numero progressivo, da 1 a 100, quindi 10 caselle per ognuna delle 10 righe
//2.2 al click di una delle caselle si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
function createSquare(num){
    
    let elementSquare = document.createElement('div');
    
    elementSquare.classList.add('square-easy');
    
    elementSquare.innerText = num;
    
    
    return elementSquare;
}
function createSquareMedium(num){
    let elementSquare = document.createElement('div');
    
    elementSquare.classList.add('square-medium');
    
    elementSquare.innerText = num;
    
    return elementSquare;
}
function createSquareHard(num){
    let elementSquare = document.createElement('div');

    elementSquare.classList.add('square-hard');

    elementSquare.innerText = num;

    return elementSquare;
}

let button = document.getElementById('btn');
button.addEventListener('click', function(){
    let difficult = document.getElementById('stage').value;
    if(difficult === 'easy'){        
        let grid = document.getElementById('grid');
        
        document.getElementById('grid').innerHTML="";

        let bombs = createBombsArrey(1, 100)

        console.log(bombs)

        for(let i=0; i<100; i++){
            const newElement = createSquare(i +1);
            
            grid.appendChild(newElement);

            newElement.addEventListener('click', function(){
                this.classList.toggle('click')
                if(bombs.includes(parseInt(this.innerText))){
                    this.classList.add('red');
                    grid.classList.add('blockEvents');
                    alert('Hai perso')
                }
            });

            let count = document.getElementById('point')
            newElement.addEventListener('click', function(){

            });
        }
    }
    else if(difficult === 'medium'){        
        let grid = document.getElementById('grid');

        document.getElementById('grid').innerHTML="";

        let bombs = createBombsArrey(1, 81)

        console.log (bombs)

        
        for(let i=0; i<81; i++){
            const newElement = createSquareMedium(i +1);
            
            grid.appendChild(newElement);
            
            newElement.addEventListener('click', function(){
                this.classList.toggle('click')
                if(bombs.includes(parseInt(this.innerText))){
                    this.classList.add('red')
                    grid.classList.add('blockEvents');
                    alert('Hai perso')
                }
                console.log(i + 1)
            });
        }    
    }
    else{        
        let grid = document.getElementById('grid');

        document.getElementById('grid').innerHTML="";

        let bombs = createBombsArrey(1, 49)
        console.log (bombs)
        
        for(let i=0; i<49; i++){
            const newElement = createSquareHard(i +1);
            
            grid.appendChild(newElement);
            
            newElement.addEventListener('click', function(){
                this.classList.toggle('click')
                if(bombs.includes(parseInt(this.innerText))){
                    this.classList.add('red')
                    grid.classList.add('blockEvents');
                    alert('Hai perso')
                }
                console.log(i + 1)
            });
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
        }
        i++;
    }
    return arrayBombBlackList;
} 