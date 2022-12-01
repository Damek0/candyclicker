let score = 0;
let candy = document.querySelector('#candy');
let money = document.querySelector('#score');
moneye();
let purchased1 = 0
let purchased2 = 0
let purchased3 = 0
let purchased4 = 0

let additionscore = 1;
let candy11code = 0;
let namebpre = 0

let volumecandy = 1
let volumecode = 1
let volumebuy = 1

let ibought1 = 0
let ibought2 = 0
let ibought3 = 0
let ibought4 = 0

let points = 1200

let close = document.querySelector('#close');
let key = document.querySelector('#key');
let button1 = document.querySelector('#button1s');
let menu = document.querySelector('#hamburger-menu');
let iks = document.querySelector('#iks');
let iks2 = document.querySelector('#close2');
let settings = document.querySelector('#settings');
let button2 = document.querySelector('#button2s');
let nameb = document.querySelector('#name-b')
let buttonb1 = document.querySelector('#button-b1');
let buttonb2 = document.querySelector('#button-b2');
let buttonb3 = document.querySelector('#button-b3');
let buttonb4 = document.querySelector('#button-b4');
let close3 = document.querySelector('#close3');
let shop = document.querySelector('#shop');
let slider1 = document.querySelector('#slider');
let slider2 = document.querySelector('#slider2');
let slider3 = document.querySelector('#slider3');
let button21x = document.querySelector('#button21x');
let button22x = document.querySelector('#button22x');
let button23x = document.querySelector('#button23x');
let button24x = document.querySelector('#button24x');
let close4 = document.querySelector('#close4');
let account = document.querySelector('#account');

account.addEventListener('click', function click() {
    document.querySelector('.communicat4').style.display = "block";
    document.querySelector('#candy').classList.add('block-event');
    document.querySelector('#candy').classList.add('display-none-all-event');
    document.querySelector('.communicat3').classList.remove('display-block-all-event');
    document.querySelector('.communicat2').classList.remove('communicat2-event');
    document.querySelector('.communicat1').classList.remove('communicat1-event');
})

close4.addEventListener('click', function click() {
    document.querySelector('.communicat4').style.display = "none"
    document.querySelector('#candy').classList.remove('display-none-all-event');
})

button21x.addEventListener('click', function click() {
    red();
})

button22x.addEventListener('click', function click() {
    yellow();
})

button23x.addEventListener('click', function click() {
    green();
})

button24x.addEventListener('click', function click() {
    violet();
})

slider3.addEventListener('change', function click() {
    volumebuy = document.querySelector('#slider3').value / 100
})

slider2.addEventListener('change', function click() {
    volumecode = document.querySelector('#slider2').value / 100
})

slider1.addEventListener('change', function click() {
    volumecandy = document.querySelector('#slider').value / 100
})

shop.addEventListener('click', function click() {
    document.querySelector('.communicat3').classList.add('display-block-all-event');
    document.querySelector('#candy').classList.add('display-none-all-event');
    document.querySelector('.communicat1').classList.remove('communicat1-event');
    document.querySelector('.communicat2').classList.remove('communicat2-event');
    document.querySelector('.communicat4').style.display = "none";
})

close3.addEventListener('click', function click() {
    document.querySelector('.communicat3').classList.remove('display-block-all-event');
    document.querySelector('#candy').classList.remove('display-none-all-event');
    document.querySelector('#candy').classList.add('display-block-all-event');
})


buttonb1.addEventListener('click', function click() {
    if (score >= 7000) {
        if (purchased1 == 0) {
            score -= 7000;
            play("sounds/buy.wav", volumebuy);
            document.querySelector('#button21x').style.display = "block";
        }
        red()
        moneye();
        purchased1 = 1;
} else {    
        alert("You haven't so much money!");
    }
})

buttonb2.addEventListener('click', function click() {
    if (score >= 7000) {
        if (purchased2 == 0) {
            score -= 7000;
            play("sounds/buy.wav", volumebuy);
            document.querySelector('#button22x').style.display = "block";
        }
        yellow()
        moneye();
        purchased2 = 1;
    } else {
        alert("You haven't so much money!");
    }
})

buttonb3.addEventListener('click', function click() {
    if (score >= 7000) {
        if (purchased3 == 0) {
            score -= 7000;
            play("sounds/buy.wav", volumebuy);
            document.querySelector('#button23x').style.display = "block";
        }
        green()
        moneye();
        purchased3 = 1;
    } else {
        alert("You haven't so much money!");
    }
})

buttonb4.addEventListener('click', function click() {
    if (score >= 7000) {
        if (purchased4 == 0) {
            score -= 7000;
            play("sounds/buy.wav", volumebuy);
            document.querySelector('#button24x').style.display = "block";
        }
        violet()
        moneye();
        purchased4 = 1;
    } else {
        alert("You haven't so much money!");
    }
})


button2s.addEventListener('click', function click() {
    namebpre = document.querySelector('#inp2').value;
    nameb = document.querySelector('#name-b').innerHTML = namebpre + "'s " + 'confectionery'
})

settings.addEventListener('click', function click() {
    document.querySelector('.communicat1').classList.remove('communicat1-event');
    document.querySelector('.communicat2').classList.add('communicat2-event');
    document.querySelector('#candy').classList.add('display-none-all-event');
    document.querySelector('.communicat3').classList.remove('display-block-all-event');
    document.querySelector('.communicat4').style.display = "none";
})

iks2.addEventListener('click', function click() {
    document.querySelector('.communicat2').classList.remove('communicat2-event');
    document.querySelector('#candy').classList.remove('block-event');
    document.querySelector('#candy').classList.remove('display-none-all-event');
})

iks.addEventListener('click', function click() {
    document.querySelector('#management').classList.add('manage');
    document.querySelector('#management').classList.remove('management-event');
})

menu.addEventListener('click', function click() {
    document.querySelector('#management').classList.remove('manage');
    document.querySelector('#management').classList.add('management-event');
})


button1.addEventListener('click', async function click() {
    if (candy11code != 1 && document.querySelector('#inp1').value == 'candy11' ) {
        if (document.querySelector('#inp1').value == 'candy11') {
            play("sounds/powerup.wav", volumecode)
            document.querySelector('#inp1').value = '';
            candy11code = 1;
            score += 1000;
            moneye();
            document.querySelector('#monologue').innerHTML = 'Checking code completed successfully!';
            await sleep(5000);
            document.querySelector('#monologue').innerHTML = 'Enter gift code';
        } else {
            document.querySelector('#monologue').innerHTML = 'Code not found';
        }
    } else {
        document.querySelector('#monologue').innerHTML = 'This code is used already!';
    }
    if (document.querySelector('#inp1').value != 'candy11') {
        document.querySelector('#monologue').innerHTML = 'Code not found';
    }
    if (document.querySelector('#inp1').value == 'tools4dev2022') {
        play("sounds/powerup.wav", volumecode)
            document.querySelector('#inp1').value = '';
            score += 100000000;
            moneye();
            document.querySelector('#monologue').innerHTML = 'Checking code completed successfully!';
            await sleep(5000);
            document.querySelector('#monologue').innerHTML = 'Enter gift code';
    }
})

function moneye() {
    money = document.querySelector('#score').innerHTML = 'Money: ' + score;
}

async function rotate(points) {
    while (0.1 > 0) {
        score++;
        moneye();
        await sleep(points);
    }
}

key.addEventListener('click', function click() {
    document.querySelector('.communicat2').classList.remove('communicat2-event');
    document.querySelector('.communicat1').classList.add('communicat1-event');
    document.querySelector('#candy').classList.add('block-event');
    document.querySelector('#candy').classList.add('display-none-all-event');
    document.querySelector('.communicat3').classList.remove('display-block-all-event');
    document.querySelector('.communicat4').style.display = "none";
})

close.addEventListener('click', function click() {
    document.querySelector('.communicat1').classList.remove('communicat1-event');
    document.querySelector('#candy').classList.remove('block-event');
    document.querySelector('main').classList.remove('main-event');
    document.querySelector('#monologue').innerHTML = 'Enter gift code';
    document.querySelector('#inp1').value = '';
    document.querySelector('#candy').classList.remove('display-none-all-event');
})

candy.addEventListener('click', async function click() {
    play("sounds/pop.wav", volumecandy);
    score += additionscore;
    moneye()
    document.querySelector('#candy').classList.add('candyv-event');
    await sleep(100);
    candy.style.transform += 'rotate(1deg)'
    document.querySelector('#candy').classList.remove('candyv-event');
})

function green() {
    document.querySelector('#candy').src = 'img/skin-green-pc.png';
    document.querySelector('#candy-repost').src = 'img/skin-green-pc.png';
}

function yellow() {
    document.querySelector('#candy').src = 'img/skin-yellow-pc.png';
    document.querySelector('#candy-repost').src = 'img/skin-yellow-pc.png';
}

function violet() {
    document.querySelector('#candy').src = 'img/skin-violet-pc.png';
    document.querySelector('#candy-repost').src = 'img/skin-violet-pc.png';
}

function red() {
    document.querySelector('#candy').src = 'img/skin-red-pc.png';
    document.querySelector('#candy-repost').src = 'img/skin-red-pc.png';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function play(soundname, volume) {
    let audio = new Audio(soundname);
    audio.volume = volume
    audio.play();
}

// upgrades 2

