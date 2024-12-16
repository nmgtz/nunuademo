let currentIndex = 0;

    function moveSlide(direction) {
      const sliderWrapper = document.getElementById('sliderWrapper');
      const slides = sliderWrapper.children;
      const totalSlides = slides.length;

      currentIndex += direction;

      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }

      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}vw)`;
    }

    // Auto-slide functionality
    setInterval(() => {
      moveSlide(1);
    }, 5000); // Change slide every 5 seconds
