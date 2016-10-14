var mobileStrings = [
  "iPhone",
  "Android",
  "iPad"
];
function insertCSS (uri) {
  var headTag = document.getElementsByTagName("head")[0];
  var newLink = document.createElement("link");
  newLink.rel = "stylesheet";
  newLink.href = uri;
  headTag.appendChild(newLink);
}
function isMobile() {
  for (var i=0; i<mobileStrings.length; i++) {
    if (navigator.userAgent.indexOf(mobileStrings[i]) != -1) {
      return true;
    }
  }
}
(function() {
  if (isMobile()) {
    insertCSS("/css/mobile.css");
  }
  else {
    insertCSS("/css/main.css");
  }
})();
