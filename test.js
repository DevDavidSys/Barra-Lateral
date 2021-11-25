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