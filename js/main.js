// ==== Start Mode Dark Light ====
if (localStorage.getItem("dark-mode")) {
  document.querySelector(".page").classList.add("dark");
  let divs = [...document.querySelector(".page").children];
  divs.forEach((div) => div.classList.add("dark"));
}

document.querySelector(".light-dark").onclick = function () {
  this.classList.toggle("dark");
  document.querySelector(".page").classList.toggle("dark");
  if (document.querySelector(".page").classList.contains("dark")) {
    localStorage.setItem("dark-mode", "dark");
    let divs = [...document.querySelector(".page").children];
    divs.forEach((div) => div.classList.add("dark"));
  } else {
    let divs = [...document.querySelector(".page").children];
    divs.forEach((div) => div.classList.remove("dark"));
    localStorage.removeItem("dark-mode");
  }
};
