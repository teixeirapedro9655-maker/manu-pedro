const startDate = new Date("2025-12-10T00:00:00");

function updateCounter() {
  const now = new Date();
  let diff = now - startDate;

  if (diff < 0) diff = 0;

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (daysEl) daysEl.textContent = days;
  if (hoursEl) hoursEl.textContent = hours;
  if (minutesEl) minutesEl.textContent = minutes;
  if (secondsEl) secondsEl.textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();

const photoGrid = document.getElementById("photoGrid");
const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.getElementById("closeModal");

if (photoGrid && Array.isArray(window.PHOTOS)) {
  window.PHOTOS.forEach((file, index) => {
    const card = document.createElement("button");
    card.className = "photo-card";
    card.type = "button";
    card.setAttribute("aria-label", `Abrir memória de Manu e Pedro ${index + 1}`);

    const img = document.createElement("img");
    img.src = file;
    img.alt = `Memória de Manu e Pedro ${index + 1}`;
    img.loading = "lazy";

    card.appendChild(img);
    card.addEventListener("click", () => {
      if (!modal || !modalImg) return;
      modalImg.src = file;
      modalImg.alt = `Memória de Manu e Pedro ${index + 1}`;
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
    });

    photoGrid.appendChild(card);
  });
}

if (closeModal && modal) {
  closeModal.addEventListener("click", () => {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  });
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  });
}

const musicBtn = document.getElementById("musicBtn");
if (musicBtn) {
  musicBtn.addEventListener("click", () => {
    window.open("https://www.youtube.com/results?search_query=Eu+e+Minha+Casa+Jullyane+Nos+Dois", "_blank", "noopener,noreferrer");
  });
}

const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

revealElements.forEach((el) => observer.observe(el));

const hearts = document.getElementById("hearts");
if (hearts) {
  for (let i = 0; i < 28; i++) {
    const heart = document.createElement("span");
    heart.textContent = "♡";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 10}s`;
    heart.style.animationDuration = `${8 + Math.random() * 8}s`;
    heart.style.fontSize = `${12 + Math.random() * 18}px`;
    hearts.appendChild(heart);
  }
}
