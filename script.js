const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const main = document.getElementById("main");

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let playing = false;

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

const secretBtn = document.getElementById("secretBtn");
const secret = document.getElementById("secret");
const closeSecret = document.getElementById("closeSecret");

/* Entrar */
enterBtn.addEventListener("click", () => {
  welcome.classList.add("hidden");
  main.classList.remove("hidden");
});

/* Música */
musicToggle.addEventListener("click", () => {
  if (!playing) {
    music.play();
    musicToggle.textContent = "⏸";
  } else {
    music.pause();
    musicToggle.textContent = "🎶";
  }
  playing = !playing;
});

/* Abrir modal */
document.querySelectorAll(".ship").forEach(ship => {
  ship.addEventListener("click", () => {
    modalImg.src = ship.querySelector("img").src;
    modalText.textContent = ship.dataset.text;
    modal.classList.remove("hidden");
  });
});

/* Cerrar modal */
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

/* Mensaje secreto */
secretBtn.addEventListener("click", () => {
  secret.classList.remove("hidden");
});

closeSecret.addEventListener("click", () => {
  secret.classList.add("hidden");
});
