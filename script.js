
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  var typed = new Typed(".typing-text", {
  strings: ["Web Developer", "Java Programmer", "MySQL database Developer"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});


