
function Inicial (){
    
    let icon = document.getElementById('icon');
    icon.addEventListener('click',changeMenu);
    console.log('foi')

}

function changeMenu(){
    let Menu = document.getElementById('menu');
    Menu.classList.toggle('Menu-Open')
    console.log('oi');
}
Inicial();
