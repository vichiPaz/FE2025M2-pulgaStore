function mostrarAlerta(mensaje, tipo) {
  const alertaContenedor = document.getElementById("liveAlertPlaceholder");
  alertaContenedor.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      ${mensaje}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
}

//función para Validar los campos del formulario
function validarCampos() {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("mensaje").value;

  if (!nombre || !email || !mensaje) {
    mostrarAlerta("Todos los campos son obligatorios.", "danger");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    mostrarAlerta("El correo electrónico no es válido.", "danger");
    return false;
  }

  mostrarAlerta("Formulario válido.", "success");
  return true;
}

//función para manejar el envío del formulario
function validarFormulario(evento) {
  evento.preventDefault();

  if (validarCampos()) {
    mostrarAlerta("Formulario enviado correctamente.", "success");
    document.getElementById("formulario-contacto").reset();
  }
}

//función para escuchar eventos cuando la página está lista
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario-contacto");
  formulario.addEventListener("submit", validarFormulario);

  document.getElementById("nombre").addEventListener("input", validarCampos);
  document.getElementById("email").addEventListener("input", validarCampos);
  document.getElementById("mensaje").addEventListener("input", validarCampos);
});
