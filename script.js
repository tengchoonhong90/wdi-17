document.addEventListener("keydown", function(event) {
    keybind(event); 
 });

window.onload = function() {
    board.style.width = `${game.size * 10}px`;
    board.style.height = `${game.size * 10}px`;
    startGame();
};


//new game button
//score
//setting/difficulty button
//canvas background
//touch up css
//mobile version
