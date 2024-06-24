document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("menu-left");
  menu.classList.toggle("open");
  this.style.display = "none";
});

document.getElementById("menu-left").addEventListener("click", function () {
  var menu = document.getElementById("menu-left");
  menu.classList.remove("open");
  document.getElementById("menu-toggle").style.display = "block";
});
