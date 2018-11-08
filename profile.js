document.addEventListener('DOMContentLoaded', function() {
//This is happening when the user first loads page

  let savedName = localStorage.getItem("first_name") || ''

  addWelcomeToScreen(savedName)

//This is happening when the user submits the form
  document.getElementById('profile').addEventListener('submit', function() {
    let displayName = document.getElementById('first_name').value
    localStorage.setItem('first_name', displayName);

    addWelcomeToScreen(displayName)
    })

  function addWelcomeToScreen(displayName) {
    //can use anywhere
    document.getElementById('welcomeDisplay').innerHTML = "Hi there " + displayName;
  }
});
