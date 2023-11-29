document.addEventListener("DOMContentLoaded", function () {
  iniciarProgreso(".dias-container");
  iniciarProgreso(".dias2-container");
  iniciarProgreso(".dias3-container");
  iniciarProgreso(".dias4-container");
});
function iniciarProgreso(contenedorPulsado) {
  let dia = 0;
  let circulos = document.querySelectorAll(`${contenedorPulsado} .circulo`);
  let btnNext = document.querySelector(`${contenedorPulsado} .next-step`);
  let btnPrev = document.querySelector(`${contenedorPulsado} .previous-step`);
  let lineaProgreso = document.querySelector(`${contenedorPulsado} .progreso`);

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

function AumDismLineaProgreso(lineaProgreso, dia, cantidadDias) {
  const porcentaje = (dia / (cantidadDias.length - 1)) * 100;
  let porcActual = lineaProgreso.offsetWidth;
  porcActual = porcentaje;
  lineaProgreso.style.width = `${porcActual}%`;
}

function colorearCirculoActivo(circulos, dia) {
  circulos.forEach((circulo, indice) => {
    if (indice < dia) {
      circulo.classList.add("activo");
    } else {
      circulo.classList.remove("activo");
    }
  });
}


