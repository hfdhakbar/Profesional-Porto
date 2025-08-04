function toggleOverlay(card) {
  const overlay = card.querySelector('div:nth-child(2)');
  overlay.classList.toggle('opacity-0');
  overlay.classList.toggle('pointer-events-none');
  overlay.classList.toggle('opacity-100');
  overlay.classList.toggle('pointer-events-auto');
} 

document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-in-left, .slide-in-right, .zoom-in"
  );
3                                           
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
});

