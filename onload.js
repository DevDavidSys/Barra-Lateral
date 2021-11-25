window.onload(onload());
let game ={
    display: document.getElementById('game'),
    ElementCard1: null,
    ElementCard2:null,
    indexCard1: null,
    indexCard2: null,
    currentMatches: 0,
    totalMatches:10,
    time:0,
    state:false

}

function onload(){
    
    window.document.getElementById('op0').addEventListener('click',newGame);
    window.document.getElementById('op1').addEventListener('click',open_configuration);
    window.document.getElementById('op2').addEventListener('click',open_about);

}



function open_configuration(){
    
}
function open_about(){
    let background = document.getElementById('background_about');
    background.style.display = "flex";
    document.getElementById('close_about').addEventListener('click',()=>{
        background.style.display = 'none';
    });
    
}   

/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
*/
async function newGame(){
    game.state = true;
    game.currentMatches = 0;
    let cheap = createCheap();
    game.display.innerHTML = '';
    let html = '';
    cheap.forEach(card=>{
        html += `<div class="card" index=${card.index}> ${card.index}</div>`
    });
    
    game.display.style.display = 'grid';
    game.display.innerHTML = html;
    
    document.querySelectorAll('.card').forEach(card=>{
        card.addEventListener('click',showCard);
    });
    
}
function showCard() {
    let index = parseInt(this.getAttribute("index")); 
    console.log(this)
    if(game.indexCard1 == null){
        game.ElementCard1 = this;
        game.indexCard1 = index;
        this.removeEventListener('click',showCard,false);
    }
    else{
        game.ElementCard2 = this;
        game.indexCard2 = index;
        removeEventListener('click',showCard,false);
        if(game.indexCard1 == game.indexCard2){
            addPoint();
        }
        else{
            game.ElementCard1.addEventListener('click',showCard);
            game.ElementCard2.addEventListener('click',showCard);
            game.indexCard1 = null;
            game.indexCard2 = null;


            
            game.ElementCard1 = null;
            game.ElementCard2 = null;
        }
    }
}

function addPoint(params) {
    
}
function createCheap() {


    /*criar par*/
    //colocar no objeto
    //embaralhar o objeto
    let cheap = [];

    for(let a = 0;a < 10;a++){
        let card1 = {
            index: a,
        }
        
        cheap.push(card1);
        cheap.push(card1);
    
    }
    console.log(cheap.length);
    cheap = shuffle_array(cheap);
    return cheap;

    
}
function shuffle_array(array){
    let size = array.length;
    let old = array;
    let n = [];
    for (let i = 0;i < size;i++){
        let index = getRandomIntInclusive(0,old.length-1);
        var card = old[index];
        
        old.splice(index,1);
        n.push(card);
    }
    return n;
}
    
    
function getRandomIntInclusive(min,max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
createCheap();