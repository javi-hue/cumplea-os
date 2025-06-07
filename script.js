function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.classList.remove("oculto");
  mensaje.classList.add("mostrar");
}
function ocultarMensaje() {
  const mensaje = document.getElementById("mensaje");
  mensaje.classList.remove("mostrar");
  mensaje.classList.add("oculto");
}
