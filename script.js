let order = [];
let clickedOrder = [];
let score = 0;

//0-verde 
//1-vermelho
//2-amarelo
//3-azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];
    for(let i in order){
        let elementColor = createColorElement(order[i]);
lightColor(elementColor, Number(i) + 1);

    }
}
let lightColor = (element, number) => {
 number = number = 500; 
 setTimeout(() => {
 element.classList.add('selected');
},tempo - 250);
setTimeout(() => {
element.classList.remove('selected');

});

} 

let clickedOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
if(clickedOrder.length == order.length){
    alert('Pontuação: $(score)\nVocê acertou! Iniciando o próximo nível.');
    nextlevel();
 
}
}
 
//para o click do usario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
   createColorElement(color).classList.add('selected');

setTimeout(() => {
  createColorElement(color).classList.remove('selected');
  clickedOrder();
})
clickedOrder();
} 
//retorna a cor 
let  createColorElement = (color) => {
    if(color == 0){
        return green;
    }if (color == 1){
        return red;
    }if (color == 2){
        return yellow;
    }if (color == 3){
        return blue;
    }
}
let nextlevel = () => {
    score++;
    shuffleOrder();
}
//game over
let gameOver = () => {
    alert('Pontuação: $(score)!\nVocê perdeu o jogo\nClique em OK para iniciar um novo jogo');
    order =[];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem vindo ao Genesis! Iniciando novo jogo');
    score = 0;

    nextlevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
green.onclick = () => click(3);







playGame();








