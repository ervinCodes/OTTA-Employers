window.addEventListener('orientationchange', function () {
    document.body.style.height = `${window.innerHeight}px`; // Recalculate body height
    window.scrollTo(0, 0); // Scroll to top to prevent any scroll glitches
  });