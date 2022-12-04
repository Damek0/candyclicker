let score = 0;
let candy = document.querySelector('#candy');
let money = document.querySelector('#score');
moneye();
let purchased1 = 0;
let purchased2 = 0;
let purchased3 = 0;
let purchased4 = 0;

let additionscore = 1;
let candy11code = 0;
let namebpre = 0;

let volumecandy = 1;
let volumecode = 1;
let volumebuy = 1;

let ibought1 = 0;
let ibought2 = 0;
let ibought3 = 0;
let ibought4 = 0;

let points = 1200;

let workrotate = 1;
let workanim = 1;

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
let txon = document.querySelector('#txon');
let txoff = document.querySelector('#txoff');
let txon2 = document.querySelector('#txon2');
let txoff2 = document.querySelector('#txoff2');
let admin = document.querySelector('#admin');
let warning1 = document.querySelector('#warning1');
let warning2 = document.querySelector('#warning2');
let buttonx3 = document.querySelector('#buttonx3v');
let close5 = document.querySelector('#close5');
let recycler = document.querySelector('#recycler');
let button1xi = document.querySelector('#button1xi');
let aub = document.querySelector('#authorization-b');

aub.addEventListener('click', function click() {
    if (document.querySelector('#id200').value == '010011' && document.querySelector('#password200').value == 'candytk') {
        document.querySelector('main').style.display = 'flex'
        document.querySelector('.preauthorization').style.display = 'none'
    } else {
        alert('Data in the fields are invalid')
    }
})

button1xi.addEventListener('click', function click() {

})

recycler.addEventListener('click', function click() {
    score = 0;
    moneye();
})

close5.addEventListener('click', function click() {
    document.querySelector('.communicat5').style.display = 'none'
    document.querySelector('#candy').style.display = 'block';
})

buttonx3.addEventListener('click', function click() {
    if (document.querySelector('#inp-admin1').value == '') {
        warning1active();
    }
    if (document.querySelector('#inp-admin2').value == '') {
        warning2active();
    }
    if (document.querySelector('#inp-admin1').value == 'admin@im.here' && document.querySelector('#inp-admin2').value == '1234554321') {
        document.querySelector('.communicat5').style.display = 'none';
        document.querySelector('#inp-admin1').value = '';
        document.querySelector('#inp-admin2').value = '';
        document.querySelector('.debug-tools').style.display = 'block';
        document.querySelector('#candy').style.display = 'block';
    }
});

async function warning1active() {
    document.querySelector('#warning1').style.display = 'block';
    await sleep(5000);
    document.querySelector('#warning1').style.display = 'none';
}

async function warning2active() {
    document.querySelector('#warning2').style.display = 'block';
    await sleep(5000);
    document.querySelector('#warning2').style.display = 'none';
}

admin.addEventListener('click', function click() {
    document.querySelector('.communicat5').style.display = 'block';
    document.querySelector('#candy').style.display = 'none';
    document.querySelector('.communicat4').style.display = "none";
    document.querySelector('.communicat3').style.display = "none";
    document.querySelector('.communicat2').style.display = "none";
    document.querySelector('.communicat1').style.display = "none";
})

txon2.addEventListener('click', function click() {
    workanim = 1;
})

txoff2.addEventListener('click', function click() {
    workanim = 0;
})

txon.addEventListener('click', function click() {
    workrotate = 1;
})

txoff.addEventListener('click', function click() {
    workrotate = 0;
})


account.addEventListener('click', function click() {
    document.querySelector('.communicat4').style.display = "block";
    document.querySelector('#candy').style.display = 'none';
    document.querySelector('.communicat3').style.display = 'none';
    document.querySelector('.communicat2').style.display = 'none';
    document.querySelector('.communicat1').style.display = 'none';
    document.querySelector('.communicat5').style.display = 'none';
})

close4.addEventListener('click', function click() {
    document.querySelector('.communicat4').style.display = "none";
    document.querySelector('#candy').style.display = 'block';
})

button21x.addEventListener('click', function click() {
    red();
});

button22x.addEventListener('click', function click() {
    yellow();
});

button23x.addEventListener('click', function click() {
    green();
});

button24x.addEventListener('click', function click() {
    violet();
});

slider3.addEventListener('change', function click() {
    volumebuy = document.querySelector('#slider3').value / 100;
});

slider2.addEventListener('change', function click() {
    volumecode = document.querySelector('#slider2').value / 100;
});

slider1.addEventListener('change', function click() {
    volumecandy = document.querySelector('#slider').value / 100;
});

shop.addEventListener('click', function click() {
    document.querySelector('.communicat3').style.display = 'block';
    document.querySelector('#candy').style.display = 'none';
    document.querySelector('.communicat1').style.display = 'none';
    document.querySelector('.communicat2').style.display = 'none';
    document.querySelector('.communicat4').style.display = "none";
    document.querySelector('.communicat5').style.display = "none";
});

close3.addEventListener('click', function click() {
    document.querySelector('.communicat3').style.display = 'none';
    document.querySelector('#candy').style.display = 'block';
});


buttonb1.addEventListener('click', function click() {
    if (score >= 7000) {
        if (purchased1 == 0) {
            score -= 7000;
            play("sounds/buy.wav", volumebuy);
            document.querySelector('#button21x').style.display = "block";
        }
        red();
        moneye();
        purchased1 = 1;
} else {    
        alert("You haven't so much money!");
    }
});

buttonb2.addEventListener('click', function click() {
    if (score >= 7000) {
        if (purchased2 == 0) {
            score -= 7000;
            play("sounds/buy.wav", volumebuy);
            document.querySelector('#button22x').style.display = "block";
        }
        yellow();
        moneye();
        purchased2 = 1;
    } else {
        alert("You haven't so much money!");
    }
});

buttonb3.addEventListener('click', function click() {
    if (score >= 7000) {
        if (purchased3 == 0) {
            score -= 7000;
            play("sounds/buy.wav", volumebuy);
            document.querySelector('#button23x').style.display = "block";
        }
        green();
        moneye();
        purchased3 = 1;
    } else {
        alert("You haven't so much money!");
    }
});

buttonb4.addEventListener('click', function click() {
    if (score >= 7000) {
        if (purchased4 == 0) {
            score -= 7000;
            play("sounds/buy.wav", volumebuy);
            document.querySelector('#button24x').style.display = "block";
        }
        violet();
        moneye();
        purchased4 = 1;
    } else {
        alert("You haven't so much money!");
    }
});


button2s.addEventListener('click', function click() {
    namebpre = document.querySelector('#inp2').value;
    nameb = document.querySelector('#name-b').innerHTML = namebpre + "'s " + 'confectionery';
});

settings.addEventListener('click', function click() {
    document.querySelector('.communicat1').style.display = 'block';
    document.querySelector('.communicat2').style.display = 'none';
    document.querySelector('#candy').style.display = 'none';
    document.querySelector('.communicat3').style.display = 'none';
    document.querySelector('.communicat4').style.display = "none";
    document.querySelector('.communicat5').style.display = "none";
});

iks2.addEventListener('click', function click() {
    document.querySelector('.communicat2').style.display = 'none';
    document.querySelector('#candy').style.display = 'block';
});

iks.addEventListener('click', function click() {
    document.querySelector('#management').classList.add('manage');
    document.querySelector('#management').classList.remove('management-event');
});

menu.addEventListener('click', function click() {
    document.querySelector('#management').classList.remove('manage');
    document.querySelector('#management').classList.add('management-event');
});


button1.addEventListener('click', async function click() {
    if (candy11code != 1 && document.querySelector('#inp1').value == 'candy11' ) {
        if (document.querySelector('#inp1').value == 'candy11') {
            play("sounds/powerup.wav", volumecode);
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
        play("sounds/powerup.wav", volumecode);
            document.querySelector('#inp1').value = '';
            score += 100000000;
            moneye();
            document.querySelector('#monologue').innerHTML = 'Checking code completed successfully!';
            await sleep(5000);
            document.querySelector('#monologue').innerHTML = 'Enter gift code';
    }
});

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
    document.querySelector('.communicat2').style.display = 'block';
    document.querySelector('.communicat1').style.display = 'none';
    document.querySelector('#candy').style.display = 'none';
    document.querySelector('.communicat3').style.display = 'none';
    document.querySelector('.communicat4').style.display = "none";
    document.querySelector('.communicat5').style.display = "none";
});

close.addEventListener('click', function click() {
    document.querySelector('.communicat1').style.display = 'none'
    document.querySelector('#candy').style.display = 'block'
    document.querySelector('main').classList.remove('main-event');
    document.querySelector('#monologue').innerHTML = 'Enter gift code';
    document.querySelector('#inp1').value = '';
    document.querySelector('#candy').classList.remove('display-none-all-event');
});

candy.addEventListener('click', async function click() {
    play("sounds/pop.wav", volumecandy);
    score += additionscore;
    moneye();
    if (workanim == 1) {
        document.querySelector('#candy').classList.add('candyv-event');
    }
    await sleep(100);
    if (workrotate == 1) {
        candy.style.transform += 'rotate(1deg)';
    } 
    document.querySelector('#candy').classList.remove('candyv-event');
});

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
    audio.volume = volume;
    audio.play();
}

// upgrades 2



