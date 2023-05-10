// Immediately invoked function expression
// to not pollute the global scope
(function() {
  const wheel = document.querySelector('.wheel');
  const game = document.querySelector('.game');
  const prize = document.querySelector('.prize');
  const imageprize = document.querySelector('.imageprize');
  const startButton = document.querySelector('.button');
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
  for (let i = 0; i < 360; i+=18) { // выведет 0, затем 1, затем 2
    degs.push(i);
  }
  var selected_deg =0;

  startButton.addEventListener('click', () => {
    prize.classList.add('d-none');
    imageprize.src = "";
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    selected_deg = degs[Math.floor(Math.random()*degs.length)];
    deg = Math.floor(5760 + selected_deg);
    // Set the transition on the wheel
    wheel.style.transition = 'all 3s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
  });
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  wheel.addEventListener('transitionend', () => {
    // Remove blur
    wheel.classList.remove('blur');
    // Enable button when spin is over
    startButton.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value from 360
    const actualDeg = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actualDeg}deg)`;
    imageprize.src = "static/prizes/"+prize_images[selected_deg];
    setTimeout(() => {  prize.click(); }, 1300);
    

  });
})();
