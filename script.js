// Activar enlace del menú y scroll suave
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-link");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      // Remover clase "active" de todos
      links.forEach(l => l.classList.remove("active"));
      // Agregar clase "active" al actual
      this.classList.add("active");
    });
  });
});
