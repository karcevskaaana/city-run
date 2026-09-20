// ===== ТАЙМЕР ДО СТАРТА =====
const raceDate = new Date("2027-03-15T09:00:00").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const diff = raceDate - now;

  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "<p>Забег стартовал!</p>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}, 1000);


// ===== ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ ПРИ СКРОЛЛЕ =====
const revealElements = document.querySelectorAll(
  ".about__card, .dist-card, .timeline__item, .gallery img"
);

const revealOnScroll = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach(function (el) {
  el.classList.add("reveal");
  revealOnScroll.observe(el);
});
