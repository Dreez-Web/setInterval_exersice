let fecha = document.getElementById("fecha");
let reloj = document.getElementById("reloj");
let contador = document.getElementById("contador");
let botonInicio = document.getElementById("startbtn");
let botonStop = document.getElementById("stopbtn");

let fechaActual = new Date();

let diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

fecha.innerHTML = `${diaSemana[fechaActual.getDay()]}, ${fechaActual.getDate()} de ${mes[fechaActual.getMonth()]} de ${fechaActual.getFullYear()}`;

setInterval(() => {
  let fechaActual = new Date();
  let horas = fechaActual.getHours().toString().padStart(2, "0");
  let minutos = fechaActual.getMinutes().toString().padStart(2, "0");
  let segundos = fechaActual.getSeconds().toString().padStart(2, "0");
  reloj.innerHTML = `${horas}:${minutos}:${segundos}`;
}, 1000);

let tiempo = 0;
contador.innerHTML = "00:00:00";
let intervalo = null;

botonInicio.addEventListener("click", () => {
  if (intervalo === null) {
    intervalo = setInterval(() => {
      tiempo++;
      let horas = Math.floor(tiempo / 3600)
        .toString()
        .padStart(2, "0");
      let minutos = Math.floor((tiempo % 3600) / 60)
        .toString()
        .padStart(2, "0");
      let segundos = (tiempo % 60).toString().padStart(2, "0");
      contador.innerHTML = `${horas}:${minutos}:${segundos}`;
    }, 1000);
  }
});

botonStop.addEventListener("click", () => {
  clearInterval(intervalo);
  intervalo = null;
  tiempo = 0;
  contador.innerHTML = "00:00:00";
});
