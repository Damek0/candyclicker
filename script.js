let candy = document.querySelector('#candy');
let money = document.querySelector('#score');
let score = 5000000;
moneye();
let lvl2work = 0;
let lvl3work = 0;
let lvl4work = 0;
let lvl5work = 0;
let lvl6work = 0;
let lvl7work = 0;
let lvl8work = 0;
let lvl9work = 0;
let lvl10work = 0;
let lvl11work = 0;
let lvl12work = 0;

let lvl2bwork = 0;
let lvl3bwork = 0;
let lvl4bwork = 0;
let lvl5bwork = 0;
let lvl6bwork = 0;
let lvl7bwork = 0;
let lvl8bwork = 0;
let lvl9bwork = 0;
let lvl10bwork = 0;
let lvl11bwork = 0;
let lvl12bwork = 0;

let additionscore = 1;
let candy11code = 0;

let points = 1200
const level1 = document.querySelector('#auto20rotate1');
const level2 = document.querySelector('#auto20rotate2');
const level3 = document.querySelector('#auto20rotate3');
const level4 = document.querySelector('#auto20rotate4');
const level5 = document.querySelector('#auto20rotate5');
const level6 = document.querySelector('#auto20rotate6');
const level7 = document.querySelector('#auto20rotate7');
const level8 = document.querySelector('#auto20rotate8');
const level9 = document.querySelector('#auto20rotate9');
const level10 = document.querySelector('#auto20rotate10');
const level11 = document.querySelector('#auto20rotate11');
const level12 = document.querySelector('#auto20rotate12');

const level1b = document.querySelector('#per20secound1');
const level2b = document.querySelector('#per20secound2');
const level3b = document.querySelector('#per20secound3');
const level4b = document.querySelector('#per20secound4');
const level5b = document.querySelector('#per20secound5');
const level6b = document.querySelector('#per20secound6');
const level7b = document.querySelector('#per20secound7');
const level8b = document.querySelector('#per20secound8');
const level9b = document.querySelector('#per20secound9');
const level10b = document.querySelector('#per20secound10');
const level11b = document.querySelector('#per20secound11');
const level12b = document.querySelector('#per20secound12');

let close = document.querySelector('#close');
let key = document.querySelector('#key');
let button1 = document.querySelector('#button1s');
let cos = 0;
let menu = document.querySelector('#hamburger-menu');
let iks = document.querySelector('#iks');

iks.addEventListener('click', function click() {
    document.querySelector('#management').classList.add('manage');
    document.querySelector('#management').classList.remove('management-event');
})

menu.addEventListener('click', function click() {
    document.querySelector('#management').classList.remove('manage');
    document.querySelector('#management').classList.add('management-event');
})


button1.addEventListener('click', async function click() {
    if (candy11code != 1) {
        if (document.querySelector('#inp1').value == 'candy11') {
            document.querySelector('#inp1').value = '';
            candy11code = 1;
            score += 1000;
            moneye();
            document.querySelector('#monologue').innerHTML = 'Checking code completed successfully!';
            await sleep(5000)
            document.querySelector('#monologue').innerHTML = 'Enter gift code';
        }
    } else {
        document.querySelector('#monologue').innerHTML = 'This code is used already!'
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
    document.querySelector('.communicat1').classList.add('communicat1-event');
    document.querySelector('#candy').classList.add('block-event');
})

close.addEventListener('click', function click() {
    document.querySelector('.communicat1').classList.remove('communicat1-event');
    document.querySelector('#candy').classList.remove('block-event');
    document.querySelector('main').classList.remove('main-event');
    document.querySelector('#monologue').innerHTML = 'Enter gift code';
    document.querySelector('#inp1').value = '';
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

candy.addEventListener('click', async function click() {
    score += additionscore;
    moneye()
    document.querySelector('#candy').classList.add('candyv-event');
    await sleep(100);
    candy.style.transform += 'rotate(1deg)'
    document.querySelector('#candy').classList.remove('candyv-event');
})



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

