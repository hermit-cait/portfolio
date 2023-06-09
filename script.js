window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}

document.getElementById("navMenu").addEventListener("click", navShowMenu);
document.getElementById("navMenu").addEventListener("keydown", navShowMenu);

function navShowMenu() {
  document.getElementById("nav").style.transform = "scale(1, 1)";
  document.getElementById("aboutLink").style.opacity = "1";
  document.getElementById("projectsLink").style.opacity = "1";
  document.getElementById("contactLink").style.opacity = "1";
  document.getElementById("navMenu").style.opacity = "0";
  document.getElementById("navClose").style.transform = "scale(1, 1)";
  document.getElementById("navClose").style.opacity = "1";
}

document.getElementById("navClose").addEventListener("click", navCloseMenu);
document.getElementById("navClose").addEventListener("keydown", navCloseMenu);

function navCloseMenu() {
  document.getElementById("nav").style.transform = "scale(1, 0)";
  document.getElementById("navClose").style.opacity = "0";
  document.getElementById("navClose").style.transform = "scale(1, 0)";
  document.getElementById("navMenu").style.opacity = "1";
}

var widthMatch = window.matchMedia("(min-width: 1200px)");

widthMatch.addEventListener('change', function(media) {
    if (media.matches) {        
      document.getElementById("nav").style.transform = "scale(1, 1)";
    }
    else {      
      document.getElementById("nav").style.transform = "scale(1, 0)";
    }
});
