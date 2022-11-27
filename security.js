// blokada prawego przycisku

// document.addEventListener("contextmenu", function(e){
//     e.preventDefault();
// }, false);

document.onselectstart = function(){return false;};

document.ondragstart = function(){return false;};