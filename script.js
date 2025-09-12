
function kontrolEt() {
  const isim = document.getElementById("isimInput").value.trim().toLowerCase();
  const hataMesaji = document.getElementById("hataMesaji");

  if (isim === "sümeyra") {
    document.getElementById("girisEkrani").style.display = "none";
    document.getElementById("hosgeldin").style.display = "flex";
    yaziyiGoster();
  } else {
    hataMesaji.textContent = "Hmm... Bu sürpriz sana ait değil gibi 😊";
  }
}

function yaziyiGoster() {
  const yazi = "Hoş geldin Prensesim 💖\nBugün... senin doğum günün \nBitanem Canım Hayatım Benim.";
  const hedef = document.getElementById("hosgeldinYazi");
  let index = 0;

  function yaz() {
    if (index < yazi.length) {
      hedef.innerHTML += yazi.charAt(index) === "\n" ? "<br>" : yazi.charAt(index);
      index++;
      setTimeout(yaz, 40);
    }
  }

  yaz();
}

function mesajBolumuneGec() {
  document.getElementById("hosgeldin").style.display = "none";
  document.getElementById("dogumGunuMesaji").style.display = "flex";
  baslatKalpYagmuru();
}

function gizliMesajaGec() {
  document.getElementById("dogumGunuMesaji").style.display = "none";
  alert("Buradan sonra gizli mesaj bölümüne geçilecek.");
}

// Kalp yağmuru
function baslatKalpYagmuru() {
  const canvas = document.getElementById("kalpCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let hearts = [];

  function createHeart() {
    return {
      x: Math.random() * canvas.width,
      y: -20,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      alpha: Math.random() * 0.5 + 0.5,
    };
  }

  function drawHeart(heart) {
    ctx.globalAlpha = heart.alpha;
    ctx.font = heart.size + "px serif";
    ctx.fillText("💗", heart.x, heart.y);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (hearts.length < 50) {
      hearts.push(createHeart());
    }
    hearts.forEach((heart, i) => {
      heart.y += heart.speed;
      drawHeart(heart);
      if (heart.y > canvas.height) {
        hearts.splice(i, 1);
      }
    });
    requestAnimationFrame(animate);
  }

  animate();
}


function gizliMesajaGec() {
  document.getElementById("dogumGunuMesaji").style.display = "none";
  document.getElementById("gizliMesaj").style.display = "flex";
}

function kapanisBolumuneGec() {
  document.getElementById("gizliMesaj").style.display = "none";
  alert("Buradan sonra kapanış mesajı gelecek.");
}


function kapanisBolumuneGec() {
  document.getElementById("gizliMesaj").style.display = "none";
  document.getElementById("kapanisMesaji").style.display = "flex";
}
