const title = document.getElementById("title");

const start = document.getElementById("start");
const help = document.getElementById("help");

const game_box = document.getElementById("game_box");
const home = document.getElementById("home");

const card = document.getElementsByClassName("card");
const main_card = document.getElementById("main_card");
const computer_card = document.getElementById("computer_card");
const gogo = document.getElementById("gogo");

const player_blood_bar = document.getElementById("player_blood");
const computer_blood_bar = document.getElementById("computer_blood");

const main_card_text = document.getElementById("main_card_text");
const m_front = document.getElementById("m_front");
const m_back = document.getElementById("m_back");

const computer_card_text = document.getElementById("computer_card_text");
const c_front = document.getElementById("c_front");
const c_back = document.getElementById("c_back");

let player_cards = [];
let player_blood ;
let computer_blood ;
let click = true;

const player_blood_bar1 = document.getElementById("player_blood_bar1");
const player_blood_bar2 = document.getElementById("player_blood_bar2");
const player_blood_bar3 = document.getElementById("player_blood_bar3");
const player_blood_bar4 = document.getElementById("player_blood_bar4");
const player_blood_bar5 = document.getElementById("player_blood_bar5");

const computer_blood_bar1 = document.getElementById("computer_blood_bar1");
const computer_blood_bar2 = document.getElementById("computer_blood_bar2");
const computer_blood_bar3 = document.getElementById("computer_blood_bar3");
const computer_blood_bar4 = document.getElementById("computer_blood_bar4");
const computer_blood_bar5 = document.getElementById("computer_blood_bar5");

const win_screen = document.getElementById("win_screen");
const win_text = document.getElementById("win_text");

const play_again = document.getElementById("play_again");
const back_home = document.getElementById("back_home");

const help_box = document.getElementById("help_box");
const help_button = document.getElementById("help_button");

help.addEventListener("click", function() {
    help_box.style.transform = "translate(-50%, 1050px)";
});

help_button.addEventListener("click", function() {
    help_box.style.transform = "translate(-50%, 0)";
});

play_again.addEventListener("click", function() {
    
    win_screen.style.transform = "scale(0)";

    player_cards = [];
    player_blood = 5;
    computer_blood = 5;

    for (let i = 0; i <= 4; i++) {

        
        if(Math.random() < 0.8){
            player_cards.push(Math.floor(Math.random() * 3));
        }else{
            player_cards.push(Math.floor(Math.random() * 4) + 3);
        }
            
    }

    player_cards[5] = '';
    player_cards.sort((a, b) => b - a);

    for (let i = 0; i <= 5; i++) {
        card[i].innerHTML = player_cards[i];
    }

    dolo.style.display = 'flex';

    card_back();
    show_card();
    show_player_blood();
    show_computer_blood();
}); 

start.addEventListener("click", function() {
    player_cards = [];
    title.style.transform = "scale(0)";
    game_box.style.transform = "translate(-50%, 990px)";

    help.style.transform = "scale(0)";
    start.style.transform = "scale(0)";

    home.style.transform = "scale(1)";

    player_blood = 5;
    computer_blood = 5;

    for (let i = 0; i <= 4; i++) {

        
        if(Math.random() < 0.8){
            player_cards.push(Math.floor(Math.random() * 3));
        }else{
            player_cards.push(Math.floor(Math.random() * 4) + 3);
        }
            
    }

    player_cards[5] = '';
    player_cards.sort((a, b) => b - a);

    for (let i = 0; i <= 5; i++) {
        card[i].innerHTML = player_cards[i];
    }

    dolo.style.display = 'flex';

    card_back();
    show_card();
    show_player_blood();
    show_computer_blood();
}); 

back_home.addEventListener("click", function() {
    title.style.transform = "scale(1)";
    game_box.style.transform = "translate(-50%, 0)";

    help.style.transform = "scale(1)";
    start.style.transform = "scale(1)";

    home.style.transform = "scale(0)";

    main_card.style.transform = "translate(-50%, 600px)";
    computer_card.style.transform = "translate(-50%, -700px)";
    gogo.style.display = 'none';
    win_screen.style.transform = "scale(0)";
})

home.addEventListener("click", function() {
    title.style.transform = "scale(1)";
    game_box.style.transform = "translate(-50%, 0)";

    help.style.transform = "scale(1)";
    start.style.transform = "scale(1)";

    home.style.transform = "scale(0)";

    main_card.style.transform = "translate(-50%, 600px)";
    computer_card.style.transform = "translate(-50%, -700px)";
    gogo.style.display = 'none';
    win_screen.style.transform = "scale(0)";
});

gogo.addEventListener("click", function() {
    computer_card.style.transform = "translate(-50%,-300px)"
    card_img(m_front)
    click = false;

    gogo.style.display = 'none';

    setTimeout(function(){

        computer_card_text.style.transform = "rotateY(360deg)";
        main_card_text.style.transform = "rotateY(360deg)";
        vs_card();

        const cardIndex = player_cards.indexOf(parseInt(m_front.innerHTML));


        for(i=0 ; i<card.length ; i++){
            card[i].style.transform = "translateY(300px)";
        }

        setTimeout(function(){
            const cardIndex = player_cards.indexOf(parseInt(m_front.innerHTML));
            player_cards.splice(cardIndex, 1);
            player_cards.sort((a, b) => b - a);
            arry_card();

            computer_card_text.style.transform = "rotateY(180deg)";
            main_card_text.style.transform = "rotateY(180deg)";

            main_card.style.transform = "translate(-50%, 600px)";
            computer_card.style.transform = "translate(-50%,-700px)"

            setTimeout(function(){
                dolo.style.display = 'flex';
            }, 2000);
            

        },2000);

    }, 2000);

})

dolo.addEventListener("click", function() {

    for(i=0 ; i<card.length ; i++){
        card[i].style.transform = "translateY(300px)";
    }

    setTimeout(function(){
        for(i=0 ; i<card.length ; i++){
            card[i].style.transform = "translateY(0)";
        }
    }, 1000);

    setTimeout(function(){
        
        if(Math.random() < 0.9){
            player_cards[5] = Math.floor(Math.random() * 3) ;
        }else{
            player_cards[5] = Math.floor(Math.random() * 4) + 3;
        }

        card[5].innerHTML = player_cards[5];

        player_cards.sort((a, b) => b - a);

        for(i=0 ; i<6 ; i++){
            card[i].innerHTML = player_cards[i];
        }
        show_card()
    }, 500);

    dolo.style.display = 'none';
    click = true;
})

function card_back() {
    for (let i = 0; i < card.length; i++) {
        if(card[i].style.transform === "translateY(160px)") {
            card[i].style.transform = "translateY(0)";
        }
    }
}

function main_card_move(){
    if(main_card.style.transform === "translate(-50%, 100px)"){
        gogo.style.display = 'none'
        main_card.style.transform = "translate(-50%, 600px)";
        setTimeout(function(){
            gogo.style.display = 'flex'
            main_card.style.transform = "translate(-50%, 100px)";
        }, 600);
    }else{
        setTimeout(function(){
            gogo.style.display = 'flex'
        }, 600);
        main_card.style.transform = "translate(-50%, 100px)";
    }
}

function arry_card(){
    
    for(i=0 ; i<6 ; i++){
        card[i].innerHTML = player_cards[i];
    }

    setTimeout(function(){
        for(i=0 ; i<card.length ; i++){
            card[i].style.transform = "translateY(0)";
        }
        show_card();
    }, 1000);

}

function show_card() {
    for(i=0 ; i<card.length ; i++){

        if(card[i].innerHTML === '' || card[i].innerHTML === 'undefined'){
            card[i].style.display = "none";
        }else{

            card_img(card[i]);

            card[i].style.display = "block";
        }
    }
}

function show_player_blood(){
    
    setTimeout(function(){
        if(player_blood === 5){
            player_blood_bar1.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar2.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar3.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar4.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar5.style.backgroundImage = "url('./img/love.png')";
        }else if(player_blood === 4){
            player_blood_bar1.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar2.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar3.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar4.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }else if(player_blood === 3){
            player_blood_bar1.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar2.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar3.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar4.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }else if(player_blood === 2){
            player_blood_bar1.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar2.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar3.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar4.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }else if(player_blood === 1){
            player_blood_bar1.style.backgroundImage = "url('./img/love.png')";
            player_blood_bar2.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar3.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar4.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }else if(player_blood === 0){
            player_blood_bar1.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar2.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar3.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar4.style.backgroundImage = "url('./img/x.png')";
            player_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }
    }, 1000);
}

function show_computer_blood(){

    setTimeout(function(){
        if(computer_blood === 5){
            computer_blood_bar1.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar2.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar3.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar4.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar5.style.backgroundImage = "url('./img/love_.png')";
        }else if(computer_blood === 4){
            computer_blood_bar1.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar2.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar3.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar4.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }else if(computer_blood === 3){
            computer_blood_bar1.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar2.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar3.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar4.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }else if(computer_blood === 2){
            computer_blood_bar1.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar2.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar3.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar4.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }else if(computer_blood === 1){
            computer_blood_bar1.style.backgroundImage = "url('./img/love_.png')";
            computer_blood_bar2.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar3.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar4.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }else if(computer_blood === 0){
            computer_blood_bar1.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar2.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar3.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar4.style.backgroundImage = "url('./img/x.png')";
            computer_blood_bar5.style.backgroundImage = "url('./img/x.png')";
        }
    }, 1000);
}

function card_img(x){

    if(x.innerHTML === '0'){
        x.style.backgroundImage = "url('./img/0.png')";
    }else if(x.innerHTML === '1'){
        x.style.backgroundImage = "url('./img/1.png')";
    }else if(x.innerHTML === '2'){
        x.style.backgroundImage = "url('./img/2.png')";
    }else if(x.innerHTML === '3'){
        x.style.backgroundImage = "url('./img/3.png')";
    }else if(x.innerHTML === '4'){
        x.style.backgroundImage = "url('./img/4.png')";
    }else if(x.innerHTML === '5'){
        x.style.backgroundImage = "url('./img/5.png')";
    }else if(x.innerHTML === '6'){
        x.style.backgroundImage = "url('./img/6.png')";
    }

}


function vs_card(){

    if(Math.random() < 0.9){
        c_front.innerHTML = Math.floor(Math.random() * 3)
    }else{
        c_front.innerHTML = Math.floor(Math.random() * 4) + 3
    }

    card_img(c_front)
    console.log(c_front.innerHTML)

    if(parseInt(m_front.innerHTML) === 0){
        if(parseInt(c_front.innerHTML) === 1){
            player_blood = player_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 2){
            computer_blood = computer_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 3){
            computer_blood = computer_blood + 1;

        }else if(parseInt(c_front.innerHTML) === 4){
            player_blood = player_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 5){
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;

        }
    }

    if(parseInt(m_front.innerHTML) === 1){
        if(parseInt(c_front.innerHTML) === 0){
            computer_blood = computer_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 2){
            player_blood = player_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 3){
            computer_blood = computer_blood + 1;

        }else if(parseInt(c_front.innerHTML) === 4){
            player_blood = player_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 5){
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;

        }
    }

    if(parseInt(m_front.innerHTML) === 2){
        if(parseInt(c_front.innerHTML) === 1){
            computer_blood = computer_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 0){
            player_blood = player_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 3){
            if(parseInt(computer_blood) < 5){
                computer_blood = computer_blood + 1;
            }

        }else if(parseInt(c_front.innerHTML) === 4){
            player_blood = player_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 5){
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;

        }
    }

    if(parseInt(m_front.innerHTML) === 3){
        if(parseInt(c_front.innerHTML) === 3){
            if(player_blood < 5){
                player_blood = player_blood + 1;
            }
            if(computer_blood < 5){
                computer_blood = computer_blood + 1;
            }

        }else if(parseInt(c_front.innerHTML) === 5){
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;
            if(parseInt(player_blood) < 5){
                player_blood = player_blood + 1;
            }

        }else{
            if(parseInt(player_blood) < 5){
                player_blood = player_blood + 1;
            }

        }
    }

    if(parseInt(m_front.innerHTML) === 4){
        if(parseInt(c_front.innerHTML) < 3){
            computer_blood = computer_blood - 1;

        }else if(parseInt(c_front.innerHTML) === 3){
            if(computer_blood < 5){
                computer_blood = computer_blood + 1;
            }

        }else if(parseInt(c_front.innerHTML) === 5){
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;

        }

    }

    if(parseInt(m_front.innerHTML) === 5){
        if(parseInt(c_front.innerHTML) === 3){
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;
            if(parseInt(computer_blood) < 5){
                computer_blood = computer_blood + 1;
            }

        }else if(parseInt(c_front.innerHTML) === 5){

        }else{
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;

        }
    }

    if(parseInt(m_front.innerHTML) === 6){

        if(parseInt(c_front.innerHTML) === 3){
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;
            if(parseInt(computer_blood) < 5){
                computer_blood = computer_blood + 1;
            }

        }else if(parseInt(c_front.innerHTML) === 5){
            let x = computer_blood;
            let y = player_blood;
            computer_blood = y;
            player_blood = x;

        }

        for(i=0 ; i<=4; i++){
            player_cards[i] = Math.floor(Math.random() * 6) + 1;
            card[i].innerHTML = player_cards[i];
        }
        show_card();
    }

    show_player_blood();
    show_computer_blood();
    setTimeout(() => {

        if(player_blood === 0){
            win_screen.style.transform = "translate(-50%,-50%) scale(1)";
            win_screen.style.backgroundColor = "#BDBDBD"
            win_text.style.backgroundImage = "url('./img/LOSE.png')";
        }
    
        if(computer_blood === 0){
            win_screen.style.transform = "translate(-50%,-50%) scale(1)";
            win_screen.style.backgroundColor = "#9FB4FF"
            win_text.style.backgroundImage = "url('./img/WIN.png')";
        }
    }, 2000);
}

function search_dolo(){
    if(dolo.style.display === 'none'){
        return true;
    }else{
        return false;
    }
}

card[0].addEventListener("click", function() {
    if(search_dolo() && click === true){
        card_back();
        main_card_move()
        card[0].style.transform = "translateY(160px)";
    
        setTimeout(function(){
            m_front.innerHTML = card[0].innerHTML;
        }, 600);
    }
})
card[1].addEventListener("click", function() {
    if(search_dolo() && click === true){
        card_back();
        main_card_move();
        card[1].style.transform = "translateY(160px)";
    
        setTimeout(function(){
            m_front.innerHTML = card[1].innerHTML;
        }, 600);
    }
})
card[2].addEventListener("click", function() {
    if(search_dolo() && click === true){
        card_back();
        main_card_move()
        card[2].style.transform = "translateY(160px)";
    
        setTimeout(function(){
            m_front.innerHTML = card[2].innerHTML;
        }, 600);
    }
})
card[3].addEventListener("click", function() {
    if(search_dolo() && click === true){
        card_back();
        main_card_move()
    
        card[3].style.transform = "translateY(160px)";
    
        setTimeout(function(){
            m_front.innerHTML = card[3].innerHTML;
        }, 600);
    }
})
card[4].addEventListener("click", function() {
    if(search_dolo() && click === true){
        card_back();
        main_card_move()
        card[4].style.transform = "translateY(160px)";
    
        setTimeout(function(){
            m_front.innerHTML = card[4].innerHTML;
        }, 600);
    }
})
card[5].addEventListener("click", function() {
    if(search_dolo() && click === true){
        card_back();
        main_card_move()
        card[5].style.transform = "translateY(160px)";
        
        setTimeout(function(){
            m_front.innerHTML = card[5].innerHTML;
        }, 600);
    }
})



