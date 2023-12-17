let btn = document.querySelector("header nav button");
let ul = document.querySelector("header nav ul");
console.log(btn);
console.log(ul);
btn.onclick = function () {
  ul.classList.toggle("active");
};
ul.onclick = function () {
  ul.classList.remove("active");
};
