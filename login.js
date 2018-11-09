
document.addEventListener('DOMContentLoaded', function() {
  Materialize.updateTextFields();
  M.AutoInit();
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
