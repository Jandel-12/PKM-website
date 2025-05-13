
//Nave
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

//Carousel Page one
let slideIndex = 0;
autoSlides();

function autoSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(autoSlides, 5000); // 5 seconds per slide
}