document.addEventListener('DOMContentLoaded', function() {
    localStorage.getItem("first_name");
    localStorage.setItem['first_name'] = '';

document.getElementById('first_name').addEventListener('submit', function() {
  let displayName = document.getElementById('first_name').value;
  localStorage.setItem('first_name', displayName);

  let displayName = localStorage.getItem('first_name');

  if (displayName != "undefined" || displayName != "null") {
    document.getElementById('welcomeMessage').innerHTML = "Hello " + name + "!";
  } else
    document.getElementById('welcomeMessage').innerHTML = "Hello!";
  })
  function addWelcomeToScreen(displayName){
    document.getElementById('welcomeDisplay').innerHTML = displayName[name];
}
});
