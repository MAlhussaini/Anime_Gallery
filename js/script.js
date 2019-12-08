const theme = document.querySelector("html");

document.querySelector(".dark").addEventListener("click", function() {
  theme.style.color = "white";
  theme.style.backgroundColor = "black";
});
document.querySelector(".light").addEventListener("click", function() {
  theme.style.color = "black";
  theme.style.backgroundColor = "white";
});
