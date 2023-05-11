
(function() {
  const wheel = document.querySelector('.wheel');
  const game = document.querySelector('.game');
  const prize = document.querySelector('.prize');
  const imageprize = document.querySelector('.imageprize');
  const startButton = document.querySelector('.button');
  const angle = document.querySelector('.angle');
  let deg = 0;
  const degs = [];
  const prize_images = {
    0:"sticker.png",
    18:"unicorn.png",
    36:"water-game-1.png",
    54:"tetris.png",
    72:"fleyta.png",
    90:"molotok.png",
    108:"gravura.png",
    126:"vinni-pooh.png",
    144:"solt-1.png",
    162:"pepper.png",
    180:"fanta.png",
    198:"planner.png",
    216:"tr.png",
    234:"soap-bubble.png",
    252:"solt-2.png",
    270:"arm.png",
    288:"soap-bubble-2.png",
    306:"swon.png",
    324:"water-game-2.png",
    342:"soap-bubble-2.png",
  }
  for (let i = 0; i < 360; i+=18) { 
    degs.push(i);
  }
  var selected_deg =0;

  startButton.addEventListener('click', () => {
    prize.classList.add('d-none');
    imageprize.src = "";
    startButton.style.pointerEvents = 'none';
    selected_deg = parseInt(angle.textContent);
    deg = Math.floor(5760 + selected_deg);
    wheel.style.transition = 'all 3s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
  });
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
    const actualDeg = deg % 360;
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    imageprize.src = "static/prizes/"+prize_images[selected_deg];
    setTimeout(() => {  prize.click(); }, 1300);
    

  });
})();
