document.addEventListener("DOMContentLoaded", function () {
  let nImagen = 0;

  const btnAvance = document.getElementById("avance");
  const btnRetroceso = document.getElementById("retroceso");

  btnAvance.addEventListener("click", function () {
    const cantidadImagenes = document.querySelectorAll(".imagen fieldset");
    if (nImagen < cantidadImagenes.length - 1) {
      nImagen++;
      cantidadImagenes.forEach((imagenes, posicion) => {
        if (nImagen === posicion) {
          imagenes.classList.add("campoActivo");
        } else {
          imagenes.classList.remove("campoActivo");
        }
      });
    }
  });
  btnRetroceso.addEventListener("click", function () {
    const cantidadImagenes = document.querySelectorAll(".imagen fieldset");
    if (nImagen > 0) {
      nImagen--;
      cantidadImagenes.forEach((imagenes, posicion) => {
        if (nImagen === posicion) {
          imagenes.classList.add("campoActivo");
        } else {
          imagenes.classList.remove("campoActivo");
        }
      });
    }
  });
});