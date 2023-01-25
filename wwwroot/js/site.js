// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var about = document.getElementsByClassName("about");
var i;

for (i = 0; i < about.length; i++) {
  about[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var section = this.nextElementSibling;
    if (section.style.display === "block") {
      section.style.display = "none";
    } else {
      section.style.display = "block";
    }
  });
}