var typed = new Typed(".auto-type", {
    strings: ["Software Engineer", "Front End Developer"],
    typeSpeed: 80,
    backSpeed: 30,
})


function myFunction() {
    var x = document.getElementById("myLinks");
    var y = document.getElementById("topnavs");  
    if (x.style.display === "flex") {
      x.style.display = "none";
      y.style.backgroundPosition ="bottom left";
    } else {
      x.style.display = "flex";
      x.style.flexDirection = "column";
      y.style.backgroundPosition ="center";
    }
  }

  

function toggleIcon() {
    let x = document.getElementById("menu-icon");  
      x.classList.toggle('ri-close-circle-line');
      x.classList.toggle('ri-menu-line');
}  

  