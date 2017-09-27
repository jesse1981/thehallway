document.addEventListener("DOMContentLoaded", function(event) {
  var f = new formRender();
  var forms = document.querySelectorAll('.formRender');
  for (var i in forms) if (forms[i].attributes!=undefined) f.render(forms[i].attributes[1].value);
});
