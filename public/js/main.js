document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll("[data-animate-on-scroll]");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const animationClass = el.dataset.animateOnScroll;

      el.classList.remove("opacity-0", "translate-y-4", "translate-x-4", "translate-x--4", "scale-95"); // optional
      el.classList.add(animationClass); 

      observer.unobserve(el);
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
});
