document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();

  let fortunes = [
  "Run!",
  "Your family isn't done screwing you up... not by a long shot.",
  "The fortune you seek is in another cookie.",
  "The mother ship will be picking you up shortly. No worries – your visa to Aldebaran has not expired.",
  "Your tendencies toward paranoia will turn out to be highly advantageous. That aluminum foil hat you are wearing means your fellow students cannot steal your brilliant ideas!",
  "Don’t bother paying for those parking tickets! You will be moving to a third world country soon and you will need all your cash to post bail there.",
  "All your hard work will soon pay off. You will get a job with the only tech company in America that has not fired its CEO for sexual harassment or insider trading.",
  "Congratulations! You're hired!, We expect to see you at Dunder Mifflin on Monday.",
  "Remember what Mr. T said, treat your momma right.",
  "Today is a good day to wear that pair of rainbow narwhal underwear your mom gave you.",
  "Wear your sunglasses at night so you can keep track of the visions in your eyes.",
  "You might consider new hangers for your closet or a new toothbrush.",
  "Sometimes having two left feat puts you in the right direction."];

  let maxRandomNums = Math.floor(Math.random() * 20);
    // console.log("hello", maxRandomNums);
  document.getElementById('genFort').addEventListener('click', function(){
    newFortune(fortunes);
  })

  //
  function newFortune(fortunes){
    // console.log('firing fxn');
    let randomFortune = Math.floor(Math.random() * fortunes.length);
    // console.log(randomFortune);
    addFortuneToScreen(randomFortune)
    // console.log("YAAAASSSSS");
  }
  //
  function addFortuneToScreen(randomFortune){
    document.getElementById('fortuneDisplay').innerHTML = fortunes[randomFortune];
  }
});
