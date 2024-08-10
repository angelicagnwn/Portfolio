// scripts.js

document.querySelectorAll('.button img').forEach(img => {
    img.addEventListener('mouseover', () => {
      const hoverSrc = img.src.replace('.png', '-hover.png');
      img.dataset.originalSrc = img.src;
      img.src = hoverSrc;
    });
  
    img.addEventListener('mouseout', () => {
      img.src = img.dataset.originalSrc;
    });
  });