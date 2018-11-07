document.addEventListener('DOMContentLoaded', function() {
    // M.AutoInit();

  let fortunes = [
  "Do these tacos taste funny to you?",
  "You will find a rat and a cracker in the street. Poke it.",
  "Help! Someone at our prom has been killed! Calm down, we don't want a panic at the disco.",
  "Your cat will need specialized obesity equipement.",
  "Hi, welcome to Chili's!",
  "Be careful children, that's a lot of sodium!",
  "It is Wednesday my Dudes... aaaahhhhhhh!!!",
  "The end is near and it's all your fault",
  "Your family isn't done screwing you up... not by a long shot.",
  "The fortune you seek is in another cookie.",
  "The mother ship will be picking you up shortly. No worries – your visa to Aldebaran has not expired.",
  "You will be hungry again in one hour.",
  "Don’t bother paying for those parking tickets! You will need to post bail in a third-world country soon.",
  "You laugh now, wait till you get home.",
  "Congratulations! You're hired! We expect to see you at Dunder Mifflin on Monday.",
  "Remember what Mr. T said, treat your momma right.",
  "Today is a good day to wear that pair of rainbow narwhal underwear your mom gave you.",
  "Wear your sunglasses at night so you can keep track of the visions in your eyes.",
  "You might consider new hangers for your closet or a new toothbrush.",
  "Sometimes you have to wear one sock and walk around your house."];


// newFortune(fortunes)

  let maxRandomNums = Math.floor(Math.random() * 20);
    // console.log("hello", maxRandomNums);
  document.getElementById('genFort').addEventListener('click', function(){
    newFortune(fortunes);
  })
  function newFortune(fortunes){

    let randomFortune = Math.floor(Math.random() * fortunes.length);

    addFortuneToScreen(randomFortune)

  }
  function addFortuneToScreen(randomFortune){
    document.getElementById('fortuneDisplay').innerHTML = fortunes[randomFortune];
  }
});
