let currentIndex = 0;

    function moveSlide(direction) {
      const sliderWrapper = document.getElementById('sliderWrapper');
      const slides = sliderWrapper.children;
      const totalSlides = slides.length;

      // Calculate the new index
      currentIndex += direction;

      // Handle wrapping around
      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }

      // Update the transform property for smooth scrolling
      sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Auto-slide functionality
    setInterval(() => {
      moveSlide(1);
    }, 5000); // Change slide every 5 seconds
