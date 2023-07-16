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

mediaQueryDesktop = window.matchMedia("(min-width: 1200px)");

mediaQueryDesktop.addEventListener('change', function(media) {
    if (media.matches) {        
      document.getElementById("nav").style.transform = "scale(1, 1)";
      document.getElementById("navClose").style.opacity = "0";
      document.getElementById("navMenu").style.opacity = "1";
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

// Pulls project data from a JSON file

async function populate() {
  const requestURL = "https://raw.githubusercontent.com/hermit-cait/portfolio/main/project-data.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const projectsText = await response.text();
  const content = JSON.parse(projectsText);

  populateProjects(content);
}

function populateProjects(obj) {

  const cardContainer = document.getElementById("cardContainer");
  const projects = obj.projects;

  for (const project of projects) {
  
    const myArticle = document.createElement("article");
    const myH3 = document.createElement("h3");
    const template = document.createElement('template');
    const myPara = document.createElement("p");
    myPara.className = "description";

    myH3.textContent = project.name;
    template.innerHTML = `
      <div class="buttonWrapper">
        <a href="${project.buttonDemo}" target="_blank" class="button buttonDemo" id="buttonDemo">
          <ion-icon name='globe-outline'></ion-icon>
          <span>
            Live Demo
          </span>
        </a>
        <a href="${project.buttonCode}" target="_blank" class="button buttonCode" id="buttonCode">
          <ion-icon name='logo-github'></ion-icon>
          <span>
            View Code
          </span>
        </a>
      </div>
    `;
    myPara.textContent = project.description;

    let image = new Image();
    image.src = project.image;

    myArticle.appendChild(myH3);
    myArticle.appendChild(image);
    myArticle.appendChild(template.content)
    myArticle.appendChild(myPara);
    
    cardContainer.appendChild(myArticle);
  }
}

populate()
