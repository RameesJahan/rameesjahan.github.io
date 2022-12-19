window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav-bar").classList.add("bg-show");
  } else {
    document.getElementById("nav-bar").classList.remove("bg-show");
  }
}

const navToggle = () => {
  document.getElementById("nav-humburger").classList.toggle("is-active");
  document.getElementById("nav-toggle").classList.toggle("nav-show");
}

