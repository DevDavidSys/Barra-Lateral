let game_memory = {
    display: document.getElementById('game'),
    currentBalls: 0,
    totalBalls:5,
    points:0,
    time:0,
    speed:5000,
    state:false,

    createCircle:function (){
        let Height = getRandomIntInclusive(0,478);
        let Width = getRandomIntInclusive(0,478);
        game.display.innerHTML=`<div class="circle" style="position: relative; top:${Height}px; left:${Width}px"></div>`;
        document.getElementsByClassName('circle')[0].addEventListener('click',addPoint);
    
    },
    
    addPoint: function (){
        game.points++;
        game.currentBalls++;
        console.log(game.points);
        game.display.innerHTML="";
        if(game.points != game.totalBalls){
            createCircle();
        }
        else{
            endGame();
        }
    },
    
    endGame:function (){
        game.display.innerHTML ='<h1>Fim de jogo</h1>'
        game.state = false;
    
    },
    
    getRandomIntInclusive: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    
    


}
export default game_memory;