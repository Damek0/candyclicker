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

level1b.addEventListener('click', function click() {
    if (score >= 5000) {
        document.querySelector('#per20secound1').classList.add('level2-event');
        lvl2bwork = 1;
        score -= 5000;
        additionscore = 2
        moneye();
    } else {
        alert("You haven't so much money");
    }
})

level2b.addEventListener('click', function click() {
    if (lvl2bwork == 1) {
        if (score >= 10000) {
            document.querySelector('#per20secound2').classList.add('level2-event');
            lvl3bwork = 1;
            score -= 10000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 1");
    }
})

level3b.addEventListener('click', function click() {
    if (lvl3bwork == 1) {
        if (score >= 15000) {
            document.querySelector('#per20secound3').classList.add('level2-event');
            lvl4bwork = 1;
            score -= 15000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 2");
    }
})

level4b.addEventListener('click', function click() {
    if (lvl4bwork == 1) {
        if (score >= 20000) {
            document.querySelector('#per20secound4').classList.add('level2-event');
            lvl5bwork = 1;
            score -= 20000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    }
    else {
        alert("You must buy first level 3");
    }
})

level5b.addEventListener('click', function click() {
    if (lvl5bwork) {
        if (score >= 2500) {
            document.querySelector('#per20secound5').classList.add('level2-event');
            lvl6bwork = 1;
            score -= 25000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    }
    else {
        alert("You must buy first level 4");
    }
})

level6b.addEventListener('click', function click() {
    if (lvl6bwork == 1) {
        if (score >= 30000) {
            document.querySelector('#per20secound6').classList.add('level2-event');
            lvl7bwork = 1;
            score -= 30000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 5");
    }
})

level7b.addEventListener('click', function click() {
    if (lvl7bwork == 1) {
        if (score >= 35000) {
            document.querySelector('#per20secound7').classList.add('level2-event');
            lvl8bwork = 1;
            score -= 35000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 6");
    }
})

level8b.addEventListener('click', function click() {
    if (lvl8bwork == 1) {
        if (score >= 40000) {
            document.querySelector('#per20secound8').classList.add('level2-event');
            lvl9bwork = 1;
            score -= 40000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 7");
    }
})

level9b.addEventListener('click', function click() {
    if (lvl9bwork == 1) {
        if (score >= 45000) {
            document.querySelector('#per20secound9').classList.add('level2-event');
            lvl10bwork = 1;
            score -= 45000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 8");
    }
})

level10b.addEventListener('click', function click() {
    if (lvl10bwork == 1) {
        if (score >= 50000) {
            document.querySelector('#per20secound10').classList.add('level2-event');
            lvl11bwork = 1;
            score -= 50000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 9");
    }
})

level11b.addEventListener('click', function click() {
    if (lvl11bwork == 1) {
        if (score >= 55000) {
            document.querySelector('#per20secound11').classList.add('level2-event');
            lvl12bwork = 1;
            score -= 55000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 10");
    }
})

level12b.addEventListener('click', function click() {
    if (lvl12bwork == 1) {
        if (score >= 60000) {
            document.querySelector('#per20secound12').classList.add('level2-event');
            score -= 60000;
            additionscore = additionscore*2
            moneye();
        } else {
            alert("You haven't so much money");
        }
    } else {
        alert("You must buy first level 11");
    }
})

// upgrades 1

level1.addEventListener('click', function click() {
    if (score >= 1000) {
        rotate(1100)
        document.querySelector('#auto20rotate1').classList.add('level1-event');
        lvl2work = 1;
        score -= 1000;
        moneye();
    } else {
        alert("You haven't so much money");
    }
})

level2.addEventListener('click', function click() {
    if (score >= 2000) {
        if (lvl2work == 1) {
            rotate(1000);
            document.querySelector('#auto20rotate2').classList.add('level1-event');
            lvl3work = 1;
            score -= 2000;
            moneye();
        } else {
            alert("You must first buy level 1");
        }
    } else {
        alert("You haven't so much money");
    }
})

level3.addEventListener('click', function click() {
    if (score >= 3000) {
        if (lvl3work == 1) {
            rotate(900);
            document.querySelector('#auto20rotate3').classList.add('level1-event');
            lvl4work = 1;
            score -= 3000    ;
            moneye();
        } else {
            alert("You must first buy level 2");
        }
    } else {
        alert("You haven't so much money");
    }
})

level4.addEventListener('click', function click() {
    if (score >= 4000) {
        if (lvl4work == 1) {
            rotate(800);
            document.querySelector('#auto20rotate4').classList.add('level1-event');
            lvl5work = 1;
            score -= 4000;
            moneye();
        } else {
            alert("You must first buy level 3");
        }
    } else {
        alert("You haven't so much money");
    }
})

level5.addEventListener('click', function click() {
    if (score >= 5000) {
        if (lvl5work == 1) {
            rotate(700);
            document.querySelector('#auto20rotate5').classList.add('level1-event');
            lvl6work = 1;
            score -= 5000    ;
            moneye();
        } else {
            alert("You must first buy level 4");
        }
    } else {
        alert("You haven't so much money")
    }
})

level6.addEventListener('click', function click() {
    if (score >= 6000) {
        if (lvl6work == 1) {
            rotate(600);
            document.querySelector('#auto20rotate6').classList.add('level1-event');
            lvl7work = 1;
            score -= 6000;
            moneye();
        } else {
            alert("You must first buy level 5");
        }
    } else {
        alert("You haven't so much money");
    }
})

level7.addEventListener('click', function click() {
    if (score >= 7000) {
        if (lvl7work == 1) {
            rotate(500);
            document.querySelector('#auto20rotate7').classList.add('level1-event');
            lvl8work = 1;
            score -= 7000;
            moneye();
        } else {
            alert("You must first buy level 6");
        }
    } else {
        alert("You haven't so much money");
    }
})

level8.addEventListener('click', function click() {
    if (score >= 8000) {
        if (lvl8work == 1) {
            rotate(400);
            document.querySelector('#auto20rotate8').classList.add('level1-event');
            lvl9work = 1;
            score -= 8000;
            moneye();
        } else {
            alert("You must first buy level 7");
        }
    } else {
        alert("You haven't so much money");
    }
})

level9.addEventListener('click', function click() {
    if (score >= 9000) {
        if (lvl9work == 1) {
            rotate(300);
            document.querySelector('#auto20rotate9').classList.add('level1-event');
            lvl10work = 1;
            score -= 9000;
            moneye();
        } else {
            alert("You must first buy level 8");
        }
    } else {
        alert("You haven't so much money");
    }
})

level10.addEventListener('click', function click() {
    if (score >= 10000) {
        if (lvl10work == 1) {
            rotate(200);
            document.querySelector('#auto20rotate10').classList.add('level1-event');
            lvl11work = 1;
            score -= 10000;
            moneye();
        } else {
            alert("You must first buy level 9");
        }
    } else {
        alert("You haven't so much money");
    }
})

level11.addEventListener('click', function click() {
    if (score >= 11000) {
        if (lvl11work == 1) {
            rotate(100);
            document.querySelector('#auto20rotate11').classList.add('level1-event');
            lvl12work = 1;
            score -= 11000;
            moneye();
        } else {
            alert("You must first buy level 10");
        }
    } else {
        alert("You haven't so much money");
    }
})

level12.addEventListener('click', function click() {
    if (score >= 12000) {
        if (lvl12work == 1) {
            rotate(1);
            document.querySelector('#auto20rotate12').classList.add('level1-event');
            score -= 12000;
            moneye();
        } else {
            alert("You must first buy level 11");
        }
    } else {
        alert("You haven't so much money")
    }
})

