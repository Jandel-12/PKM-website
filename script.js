
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
function showSection(id) {
    // Hide all sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
      section.style.display = "none";
    });

    // Show only the selected section
    const target = document.getElementById(id);
    if (target) {
      target.style.display = "block";
    }
  }

  //home
  function showSection(id) {
    const sections = document.querySelectorAll("section");

    if (id === "home") {
      sections.forEach(section => {
        // Show all except history
        if (section.id === "history") {
          section.style.display = "none";
        } else {
          section.style.display = "block";
        }
      });
    } else {
      // Hide all
      sections.forEach(section => {
        section.style.display = "none";
      });

      // Show selected
      const target = document.getElementById(id);
      if (target) {
        target.style.display = "block";
      }
    }
  }

  //

  function showSection(id) {
    // Define the sections you want to toggle
    const sections = ['home', 'history', 'structure', 'programs', 'projects', 'admission', 'policies', 'contact'];

    // Hide all sections
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.style.display = 'none';
      }
    });

    // Show the selected section
    const selected = document.getElementById(id);
    if (selected) {
      selected.style.display = 'block';
    }
  }


