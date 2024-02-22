
document.getElementById("about1").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("portfolio1").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contact1").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

