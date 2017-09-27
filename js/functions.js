function loadCSS(filename){
  var cssFile = document.createElement("link")
  cssFile.setAttribute("rel", "stylesheet")
  cssFile.setAttribute("type", "text/css")
  cssFile.setAttribute("href", filename);

  var head = document.getElementsByTagName("head")[0];
  head.appendChild(cssFile);
}
