// Función del menú hamburguesa
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}


// Acciones al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  // Efecto hover en los enlaces del menú
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#ff6600';
    });
    link.addEventListener('mouseout', () => {
      link.style.color = '#fff';
    });
  });

  // Animaciones por scroll usando IntersectionObserver
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Envío del formulario
  const form = document.getElementById('formulario-contacto');
  const mensaje = document.getElementById('mensaje-enviado');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);

    fetch("https://formsubmit.co/iacapi268@gmail.com", {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    })
      .then(res => {
        if (res.ok) {
          form.reset();
          mensaje.style.display = 'block';
        } else {
          alert("Hubo un error al enviar el mensaje.");
        }
      })
      .catch(err => {
        console.error(err);
        alert("Error de conexión.");
      });
  });
});

