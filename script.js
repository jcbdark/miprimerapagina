/*let nombre = 'Fernando';
let ciudad = 'Lima';
let gusto = 'futbol';
let parrafo = document.querySelector('.parrafo');
function cambiarTexto(nombre, ciudad,gusto){
    let contenido = `Me llamo ${nombre}, naci en ${ciudad}, me gusta ${gusto}`;
    return contenido;
}
parrafo.innerText = cambiarTexto(nombre,ciudad,gusto);*/
let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};
//#region PARA EL FORMULARIO DE CONTACTO
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
const alertaContainer = document.getElementById("alerta-container");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  parrafo.innerHTML = valido ? "Enviado" : warnings;
  return valido;
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    alertaContainer.classList.add('oculto');
    formulario.submit();
  } else {
    alertaContainer.classList.remove('oculto');
  }
});
//#endregion