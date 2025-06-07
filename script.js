function devamEt() {
  document.querySelector(".giris-ekrani").style.display = "none";
  document.getElementById("dogumGunu").style.display = "flex";
}

function sohbetBolumuneGec() {
  document.getElementById("dogumGunu").style.display = "none";
  document.getElementById("sohbetler").style.display = "flex";
}

function gizliBolumeGec() {
  document.getElementById("sohbetler").style.display = "none";
  document.getElementById("gizliMesaj").style.display = "flex";
}

function kapanisBolumuneGec() {
  document.getElementById("gizliMesaj").style.display = "none";
  document.getElementById("kapanis").style.display = "flex";
}
