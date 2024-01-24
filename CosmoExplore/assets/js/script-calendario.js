//Array con los nombre de los meses
let nombreMeses = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October', 'November', 'December'];

//Obtengo el objeto fecha de JS
let ObjFecha = new Date();

let dia = ObjFecha.getDate();
let mes = ObjFecha.getMonth();
let ano = ObjFecha.getFullYear();

let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');

//Obtengo los elementos con la ID
let retrocederMesElemento = document.getElementById('prev-month');
let siguienteMesElemento = document.getElementById('next-month');

month.textContent = nombreMeses[mes];
year.textContent = ano.toString();


//Añadimmos eventos de click y le asignamos la funcion.
retrocederMesElemento.addEventListener('click', ()=>anteriorMes());
siguienteMesElemento.addEventListener('click', ()=>siguenteMes());



const escribirMes = (month) => {
    for (let i = startDay(); i > 0; i--) {
        dates.innerHTML += ` <div class="calendar__date calendar__item calendar__last-days">
            ${getTotalDays(mes - 1) - (i - 1)}
        </div>`;
    }

    for (let i = 1; i <= getTotalDays(month); i++) {
        let isHighlighted = shouldHighlight(); // Llamamos a una función para determinar si el día debe resaltarse
        if (i === dia) {
            dates.innerHTML += ` <div class="calendar__date calendar__item calendar__today">${i}</div>`;
        } else {
            // Agregamos la clase 'highlighted' si el día debe resaltarse
            dates.innerHTML += ` <div class="calendar__date calendar__item ${isHighlighted ? 'highlighted' : ''}">${i}</div>`;
        }
    }
}

// Función para determinar aleatoriamente si un día debe ser resaltado
const shouldHighlight = () => {
    // Probabilidad de que un día sea resaltado (ajusta este valor según tus preferencias)
    const probability = 0.2; // Por ejemplo, un 20% de probabilidad

    // Generar un número aleatorio entre 0 y 1
    const randomValue = Math.random();

    // Devolver true si el número aleatorio es menor que la probabilidad
    return randomValue < probability;
}
//En funcion de mes que obtenemos comprobamos cuantos dias tiene que tener
const getTotalDays = month => {
    if(month === -1) month = 11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return  31;

    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30;

    } else {

        return visiesto() ? 29:28;
    }
}
//Comprobamos si un año es visiesto
const visiesto = () => {
    return ((ano % 100 !==0) && (ano % 4 === 0) || (ano % 400 === 0));
}

const startDay = () => {
    let start = new Date(ano, mes, 1);
    return ((start.getDay()-1) === -1) ? 6 : start.getDay()-1;
}

const anteriorMes = () => {
    if(mes !== 0){
        mes--;
    }else{
        mes = 11;
        ano--;
    }

    setNewDate();
}

const siguenteMes = () => {
    if(mes !== 11){
        mes++;
    }else{
        mes = 0;
        ano++;
    }

    setNewDate();
}

const setNewDate = () => {
    ObjFecha.setFullYear(ano,mes,dia);
    month.textContent = nombreMeses[mes];
    year.textContent = ano.toString();
    dates.textContent = '';
    escribirMes(mes);
}

escribirMes(mes);