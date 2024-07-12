let player = 10;
let computer = 10;

let player_number = '';
let computer_number = '';

let player_cards = [];

const player_blood = document.getElementById('player_blood')
const computer_blood = document.getElementById('computer_blood')

const player_cards_div = document.getElementById('player_cards')

const player_card1 = document.getElementById('player_card1')
const player_card2 = document.getElementById('player_card2')
const player_card3 = document.getElementById('player_card3')
const player_card4 = document.getElementById('player_card4')
const player_card5 = document.getElementById('player_card5')
const player_card6 = document.getElementById('player_card6')

const start = document.getElementById("start");
start.addEventListener("click", function() {
    player_blood.innerHTML = player;
    computer_blood.innerHTML = computer;

    player_cards = [];

    player_card6.innerHTML = '';
    player_show.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        player_cards.push(Math.floor(Math.random() * 13) + 1);
    }
    player_cards[6]='';

    player_cards.sort((a, b) => b - a);

    player_card1.innerHTML = player_cards[0];
    player_card2.innerHTML = player_cards[1];
    player_card3.innerHTML = player_cards[2];
    player_card4.innerHTML = player_cards[3];
    player_card5.innerHTML = player_cards[4];

    player_cards_div.innerHTML = 'player:' + player_cards;
})

const draw = document.getElementById("draw_card");
draw.addEventListener("click", function() {

    if(player_cards[5] === ''){
        player_cards[5] = Math.floor(Math.random() * 13) + 1;
        player_card6.innerHTML = player_cards[5];
    }else{
        alert('牌組已滿');
    }
})

const player_show = document.getElementById("player_show");
const computer_show = document.getElementById("computer_show");
player_card1.addEventListener("click", function() {
    if(player_cards[5] === ''){
        alert('請先抽牌');
    }else{
        player_show.innerHTML = player_cards[0];
        computer_show.innerHTML = ''
    }
})
player_card2.addEventListener("click", function() {
    if(player_cards[5] === ''){
        alert('請先抽牌');
    }else{
        player_show.innerHTML = player_cards[1];
        computer_show.innerHTML = ''
    }
})
player_card3.addEventListener("click", function() {
    if(player_cards[5] === ''){
        alert('請先抽牌');
    }else{
        player_show.innerHTML = player_cards[2];
        computer_show.innerHTML = ''
    }
})
player_card4.addEventListener("click", function() {
    if(player_cards[5] === ''){
        alert('請先抽牌');
    }else{
        player_show.innerHTML = player_cards[3];
        computer_show.innerHTML = ''
    }
})
player_card5.addEventListener("click", function() {
    if(player_cards[5] === ''){
        alert('請先抽牌');
    }else{
        player_show.innerHTML = player_cards[4];
        computer_show.innerHTML = ''
    }
})
player_card6.addEventListener("click", function() {
    if(player_cards[5] === ''){
        alert('請先抽牌');
    }else{
        player_show.innerHTML = player_cards[5];
        omputer_show.innerHTML = ''
    }
})

const play_card = document.getElementById("play_card");
play_card.addEventListener("click", function() {

    if (player_show.innerHTML == '') {
        alert('請選擇一張牌');
    } 
    else {
        computer_number = Math.floor(Math.random() * 13) + 1;
        computer_show.innerHTML = computer_number;

        const player_card_value = parseInt(player_show.innerHTML);

        if (player_show.innerHTML > computer_number){
            computer_blood.innerHTML = computer - 1;
            computer = computer - 1;
        }
        else if (player_show.innerHTML < computer_number){
            player_blood.innerHTML = player - 1;
            player = player - 1;
        }

        const cardIndex = player_cards.indexOf(player_card_value);
        player_cards[cardIndex] = ''

        player_cards.sort((a, b) => b - a);
        player_card1.innerHTML = player_cards[0];
        player_card2.innerHTML = player_cards[1];
        player_card3.innerHTML = player_cards[2];
        player_card4.innerHTML = player_cards[3];
        player_card5.innerHTML = player_cards[4];
        player_card6.innerHTML = player_cards[5];

    }
})