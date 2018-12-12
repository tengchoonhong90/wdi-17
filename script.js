document.addEventListener("keydown", function(event) {
    keybind(event);
    if (game.pause === true) {
      pausePrompt.textContent = "Press Spacebar to Start"
    } else {
      pausePrompt.textContent = "Press Spacebar to Pause"
    }
 });

window.onload = function() {
    board.style.width = `${game.size * 10}px`;
    board.style.height = `${game.size * 10}px`;
    startGame();
};

//animation for .head class
$('.head').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.head .letter',
      translateX: [40,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: function(el, i) {
        return 500 + 30 * i;
      }
    }).add({
      targets: '.head .letter',
      translateX: [0,-30],
      opacity: [1,0],
      easing: "easeInExpo",
      duration: 1100,
      delay: function(el, i) {
        return 100 + 30 * i;
      }
    });