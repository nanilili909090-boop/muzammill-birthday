const openBtn = document.getElementById("openBtn");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");


/* =========================
   OPEN SURPRISE
========================= */

openBtn.addEventListener("click", function () {

  welcome.style.display = "none";

  mainContent.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   MUSIC
========================= */

musicBtn.addEventListener("click", function () {

  if (bgMusic.paused) {

    bgMusic.play();

    musicBtn.textContent = "⏸ Pause Music";

  } else {

    bgMusic.pause();

    musicBtn.textContent = "🎵 Play Music";

  }

});