document.addEventListener("DOMContentLoaded", function () {
  iniciarProgreso(".dias-container");

  function iniciarProgreso(contenedorPulsado) {
    let dia = 0;
    let circulos = document.querySelectorAll(`.circulo`);

    console.log(circulos);

    let btnNext = document.getElementById("siguiente");
    let btnPrev = document.getElementById("retroceso");
    let lineaProgreso = document.getElementById("progreso");
  
    btnNext.addEventListener("click", function () {
      const cantidadDias = document.querySelectorAll(`${contenedorPulsado} fieldset`);
      if (dia < cantidadDias.length - 1) {
        dia++;
        cantidadDias.forEach((contenedorDia, posicion) => {
          if (dia === posicion) {
            contenedorDia.classList.add("campoActivo");
  
            AumDismLineaProgreso(lineaProgreso, dia, cantidadDias);
            colorearCirculoActivo(circulos, dia);
          } else {
            contenedorDia.classList.remove("campoActivo");
          }
        });
      }
    });
  
    btnPrev.addEventListener("click", function () {
      const cantidadDias = document.querySelectorAll(`${contenedorPulsado} fieldset`);
      if (dia > 0) {
        dia--;
        cantidadDias.forEach((contenedorDia, posicion) => {
          if (dia === posicion) {
            contenedorDia.classList.add("campoActivo");
            AumDismLineaProgreso(lineaProgreso, dia, cantidadDias);
            colorearCirculoActivo(circulos, dia);
          } else {
            contenedorDia.classList.remove("campoActivo");
          }
        });
      }
    });
  }
});



function AumDismLineaProgreso(lineaProgreso, dia, cantidadDias) {
  const porcentaje = (dia / (cantidadDias.length - 1)) * 100;
  lineaProgreso.style.width = `${porcentaje}%`;
}

function colorearCirculoActivo(circulos, dia) {
  circulos.forEach((circulo, indice) => {
    if (indice < dia) {
      circulo.classList.add("activo-paginacion");
    } else {
      circulo.classList.remove("activo-paginacion");
    }
  });
}
