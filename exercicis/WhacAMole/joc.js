let puntuacio = 0;
let audio = new Audio('boing.mp3');
let numimatge = 0;
let ontopo = 0;
let time = 60

mostrarTalpAleatori();

function posarTemps() {
  document.getElementById('temps').innerHTML = time;

  if (time == 0) {
    alert('El temps ha acabat \nPuntuació final: '+ puntuacio);
  }
  else {
    time--;
    setTimeout("posarTemps()", 1000)
  }
}

function mostrarTalpAleatori() {
  let aleatori = Math.trunc((Math.random() * (9)) + 1);


  document.getElementById("img1").src = "topoNo.jpg";
  document.getElementById("img2").src = "topoNo.jpg";
  document.getElementById("img3").src = "topoNo.jpg";
  document.getElementById("img4").src = "topoNo.jpg";
  document.getElementById("img5").src = "topoNo.jpg";
  document.getElementById("img6").src = "topoNo.jpg";
  document.getElementById("img7").src = "topoNo.jpg";
  document.getElementById("img8").src = "topoNo.jpg";
  document.getElementById("img9").src = "topoNo.jpg";

  if (aleatori == 1) {
    document.getElementById("img1").src = "topoSi.jpg";
    ontopo = 1;
  }
  if (aleatori == 2) {
    document.getElementById("img2").src = "topoSi.jpg";
    ontopo = 2;
  }
  if (aleatori == 3) {
    document.getElementById("img3").src = "topoSi.jpg";
    ontopo = 3;
  }
  if (aleatori == 4) {
    document.getElementById("img4").src = "topoSi.jpg";
    ontopo = 4;
  }
  if (aleatori == 5) {
    document.getElementById("img5").src = "topoSi.jpg";
    ontopo = 5;
  }
  if (aleatori == 6) {
    document.getElementById("img6").src = "topoSi.jpg";
    ontopo = 6;
  }
  if (aleatori == 7) {
    document.getElementById("img7").src = "topoSi.jpg";
    ontopo = 7;
  }
  if (aleatori == 8) {
    document.getElementById("img8").src = "topoSi.jpg";
    ontopo = 8;
  }
  if (aleatori == 9) {
    document.getElementById("img9").src = "topoSi.jpg";
    ontopo = 9;
  }

}
setInterval(mostrarTalpAleatori, 1000);


function encertarTalp(numimatge) {
  let idImatge = "img" + numimatge;
  document.getElementById(idImatge).src = "topoPam.jpg";

  if (numimatge == ontopo) {
    puntuacio = puntuacio + 10;
    audio.play();
  } else {
    puntuacio = puntuacio - 5;
    audio.play();
  }
  document.getElementById("punt").innerHTML = puntuacio;

}

