const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  });

  sr.reveal('.head-title, .hero-img, .bottom', {
    origin: 'bottom',
    delay:500,
  });

  sr.reveal('.main-title, .left', {
    origin: 'left',
    delay:600
  });

  sr.reveal('.right', {
    origin: 'right',
    delay: 400
  });