
//Nave
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
  }

  // For dropdowns on mobile
  document.querySelectorAll('.dropdown > a').forEach(drop => {
    drop.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

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

//history

  //home
 function showSection(id) {
  const sections = document.querySelectorAll("section");

  if (id === "home") {
    sections.forEach(section => {
      // Show only about, academics, contact sections
      if (section.id === "about" || section.id === "academics" || section.id === "contact") {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  } else {
    // Hide all sections
    sections.forEach(section => {
      section.style.display = "none";
    });

    // Show selected section
    const target = document.getElementById(id);
    if (target) {
      target.style.display = "block";
    }
  }
}

  //




