// Make the menu button clickable

document.getElementById("navMenu").addEventListener("click", navShowMenu);
document.getElementById("navMenu").addEventListener("keydown", navShowMenu);

// Open menu, hide menu button and show close button

function navShowMenu() {
  document.getElementById("nav").style.transform = "scale(1, 1)";
  document.getElementById("aboutLink").style.opacity = "1";
  document.getElementById("projectsLink").style.opacity = "1";
  document.getElementById("contactLink").style.opacity = "1";
  document.getElementById("navMenu").style.opacity = "0";
  document.getElementById("navClose").style.transform = "scale(1, 1)";
  document.getElementById("navClose").style.opacity = "1";
}

// Make the close button clickable

document.getElementById("navClose").addEventListener("click", navCloseMenu);
document.getElementById("navClose").addEventListener("keydown", navCloseMenu);

// Close menu, hide close button and show menu button again

function navCloseMenu() {
  document.getElementById("nav").style.transform = "scale(1, 0)";
  document.getElementById("navClose").style.opacity = "0";
  document.getElementById("navClose").style.transform = "scale(1, 0)";
  document.getElementById("navMenu").style.opacity = "1";
}

// When menu is opened in small viewport and then the window is enlarged the desktop nav would disappear so this ensures that the nav bar is always visible

let mediaQueryDesktop = window.matchMedia("(min-width: 1200px)");

mediaQueryDesktop.addEventListener('change', function(media) {
    if (media.matches) {        
      document.getElementById("nav").style.transform = "scale(1, 1)";
    }
    else {      
      document.getElementById("nav").style.transform = "scale(1, 0)";
    }
});

// Clears contact form after sending

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}
