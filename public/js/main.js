function toggleOverlay(card) {
  const overlay = card.querySelector('div:nth-child(2)');
  overlay.classList.toggle('opacity-0');
  overlay.classList.toggle('pointer-events-none');
  overlay.classList.toggle('opacity-100');
  overlay.classList.toggle('pointer-events-auto');
} 

document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});