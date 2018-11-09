document.addEventListener('DOMContentLoaded', function() {

  let savedName = localStorage.getItem("first_name") || ''

  addWelcomeToScreen(savedName)

  document.getElementById('profile').addEventListener('submit', function() {
    let displayName = document.getElementById('first_name').value
    localStorage.setItem('first_name', displayName);

    addWelcomeToScreen(displayName)
    })

  function addWelcomeToScreen(displayName) {

    document.getElementById('welcomeDisplay').innerHTML = "Hi there " + displayName;
  }
});
