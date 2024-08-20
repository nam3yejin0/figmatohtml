document.addEventListener("DOMContentLoaded", function() {
    function adjustLayout() {
      const width = window.innerWidth;
      const images = document.querySelectorAll('img');
  
      if (width <= 768) {
        // Adjust styles for mobile view if needed
        images.forEach(img => {
          img.style.width = '100%';
          img.style.height = 'auto';
        });
      } else {
        // Reset styles for larger screens if needed
        images.forEach(img => {
          img.style.width = 'auto';
          img.style.height = 'auto';
        });
      }
    }
  
    window.addEventListener('resize', adjustLayout);
    adjustLayout(); // Apply layout adjustments on page load
  });
  