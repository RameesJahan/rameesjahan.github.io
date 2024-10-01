//pre loader
window.addEventListener("load", loaderHide);
function loaderHide() {
  let loaderIcon = document.getElementById("loader-container");
  loaderIcon.classList.add("hide");
  loadSkills();
  loadProjects();
}

const skillSet = [
  {
    name: "React Native",
    pro: 65,
  },
  {
    name: "React JS",
    pro: 70,
  },
  {
    name: "Typescript/Javascript",
    pro: 75,
  },
  {
    name: "Node JS",
    pro: 65,
  },
  {
    name: "HTML",
    pro: 90,
  },
  {
    name: "CSS",
    pro: 75,
  },
  {
    name: "MongoDB",
    pro: 65,
  },
  {
    name: "Git",
    pro: 70,
  },
];

const projects = [
  {
    name: "SOS Game",
    image: "sos-game-thumb.png",
    tags: ["React Native", "Expo", "Tailwind CSS", "Typescript"],
    link: "https://github.com/RameesJahan/SOS-Game-React-Native",
    desc: "A mobile multiplayer version of the classic SOS pencil-and-paper game. It supports 2 to 6 players with customizable nicknames and adjustable board sizes. The game features local storage for saving player data, offering a fully interactive and customizable gaming experience.",
  },
  {
    name: "Pomodoro Timer App",
    image: "pomodoro-thumb.png",
    tags: ["React Native", "Expo", "Javascript"],
    link: "https://github.com/RameesJahan/pomodoro-timer-react-native",
    desc: "A productivity tool built for Android using the Pomodoro Technique. This app allows users to manage their work and break intervals with customizable timers. It operates in the background and sends push notifications for uninterrupted sessions, enhancing time management.",
  },
  {
    name: "Chat App",
    image: "chat-app-thumb.png",
    tags: ["ReactJS", "Tailwind CSS", "Firebase"],
    link: "https://github.com/RameesJahan/chelakkedo",
    desc: "A real-time messaging platform built with ReactJS and Tailwind CSS for the front end and Firebase Firestore for the back end. It incorporates Firebase Authentication for secure phone number verification and enables users to send and receive text messages in real time.",
  },
  {
    name: "E-Commerce API",
    image: "e-com-api-thumb.png",
    tags: ["NodeJS", "ExpressJS", "MongoDB"],
    link: "https://github.com/RameesJahan/FillKart-Api",
    desc: "A fully functional API for an e-commerce platform, designed using Node.js and Express.js with MongoDB as the database. The API allows users to retrieve product lists, view detailed product information, and filter products by category, providing a robust back-end solution for online stores.",
  },
];

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-bar").classList.add("bg-show");
    document.getElementById("scroll-me").classList.add("hide");
  } else {
    document.getElementById("nav-bar").classList.remove("bg-show");
    document.getElementById("scroll-me").classList.remove("hide");
  }
};

const navToggle = () => {
  document.getElementById("nav-humburger").classList.toggle("is-active");
  document.getElementById("nav-toggle").classList.toggle("nav-show");
};

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}

function loadSkills() {
  const skillContainer = document.getElementById("skills-container");
  let innerTxt = "";

  skillSet.forEach((item) => {
    const txt = `<div class="skills-content-main-block col-sm-6">
                <div class="skills-content-main-title-container">
                  <h5 class="skills-content-main-title">${item.name}</h5>
                  <h5 class="skills-content-main-progress">${item.pro}%</h5>
                </div>
                <div class="bar-container">
                  <div class="bar-progress" style="width: ${item.pro}%"></div>
                </div>
              </div>`;
    innerTxt += txt;
  });

  skillContainer.innerHTML = innerTxt;
}

function loadProjects() {
  const productsContainer = document.getElementById("projects-container");
  let innerTxt = ""

  projects.forEach(item => {
    let tagTxt = '';
    item.tags.forEach(tag => {
      tagTxt += `<span class="project-item-tag">${tag}</span>`
    })
    const txt = `<div class="col-md-6 col-lg-4 p-2" >
      <div class="project-item-container">
                <div class="project-item-img-container">
                  <img class="project-item-img" src="./images/projects/${item.image}" alt="${item.name}" />
                </div>
                <div class="project-item-content">
                  <h6 class="project-item-title">${item.name}</h6>
                  <div class="project-item-tags-container">${tagTxt}</div>
                  <p class="project-item-desc">${item.desc}</p>
                  <a href="${item.link}" class="project-item-link">Learn More</a>
                </div>
                </div>
              </div>`;
    
    innerTxt += txt
  })
  productsContainer.innerHTML = innerTxt
}
