function toggleOverlay(card) {
  const overlay = card.querySelector('div:nth-child(2)');
  overlay.classList.toggle('opacity-0');
  overlay.classList.toggle('pointer-events-none');
  overlay.classList.toggle('opacity-100');
  overlay.classList.toggle('pointer-events-auto');
} 