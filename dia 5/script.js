let imagen = document.getElementById("imagen");
let contador = document.getElementById("contador");

let numeros = setInterval(sumar, 40);
let carga = 0;
let desenf = 20;

function sumar() {
  carga++;
  if (carga > 99) {
    clearInterval(numeros);
  }
  let desenfoque = desenf - carga * (desenf / 100);
  contador.innerHTML = `${carga}%`;
  imagen.style.filter = `blur(${desenfoque}px)`;
  contador.style.opacity = carga + `%`;
}
