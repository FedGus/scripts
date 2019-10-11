
let total_score = document.getElementsByClassName('score')[0]; 
let score = 0; 
let hole_number = 1;

function hole(n){
    let a = (n == hole_number) ? score++ : (score > 0) ? score-- : 0;
    total_score.innerHTML = score;
}

let time = setTimeout(function Game(){
    document.getElementsByClassName(`hole${hole_number}`)[0].innerHTML = '';
    time = setTimeout(Game, 800);
    hole_number = Math.floor(Math.random() * (9 - 1)) + 1;
    document.getElementsByClassName(`hole${hole_number}`)[0].innerHTML = '<div class="mole"></div>';
}, 800);

function newGame(){
    score = 0;
    total_score.innerHTML = score;
}

