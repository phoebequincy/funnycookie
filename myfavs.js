document.addEventListener('DOMContentLoaded', function(){
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);

  function addMyFavToScreen(addToLocalStorage){
    console.log("hello");
    localStorage.getItem('favFortune').randomFortune;
  }
});
// document.getElementById('profile').addEventListener('submit', function() {
//   let displayName = document.getElementById('first_name').value
//   localStorage.setItem('first_name', displayName);
//
//   addWelcomeToScreen(displayName)
//   })
//
// function addWelcomeToScreen(displayName) {
//
//   document.getElementById('welcomeDisplay').innerHTML = "Hi there " + displayName;
// }
