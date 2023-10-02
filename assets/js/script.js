const toggleContainer = document.querySelector('.toggle-container');
const toggleCircle = document.querySelector('.toggle-circle');
const toggleIcon = document.getElementById('toggle-icon');

// Check the initial mode from local storage (if available)
const currentMode = localStorage.getItem('mode');
if (currentMode === 'dark') {
  enableDarkMode();
}

toggleContainer.addEventListener('click', function () {
  if (document.body.classList.contains('dark-mode')) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  // Move the circle to the right (dark mode)
  toggleCircle.style.transform = 'translateX(100%)';

  // Change the background color of the circle
  toggleCircle.style.backgroundColor = '#000';

  // Change the icon to the moon
  toggleIcon.innerHTML = '<span>🌙</span>';

  // Change the background color of the slider
  toggleContainer.style.backgroundColor = '#00000063';

  // Add the 'dark-mode' class to the body
  document.body.classList.add('dark-mode');

  // Store the current mode in local storage
  localStorage.setItem('mode', 'dark');
}

function enableLightMode() {
  // Move the circle to the left (light mode)
  toggleCircle.style.transform = 'translateX(0)';

  // Change the background color of the circle
  toggleCircle.style.backgroundColor = '#fff';

  // Change the icon to the sun
  toggleIcon.innerHTML = '<span class="light-icon active">☀️</span>';

  // Change the background color of the slider
  toggleContainer.style.backgroundColor = '#fff8f8c9';

  // Remove the 'dark-mode' class from the body
  document.body.classList.remove('dark-mode');

  // Store the current mode in local storage
  localStorage.setItem('mode', 'light');
}
  
const mobileToggle = document.getElementById("mobile-toggle");
const mobileNav = document.getElementById("mobile-nav");

  mobileToggle.addEventListener("click", function() {
    mobileToggle.classList.toggle("active");
    mobileNav.classList.toggle("active");
});

// Function to simulate typing effect
function typeEffect(element, text, delay) {
  let i = 0;
  const interval = setInterval(function () {
      element.textContent += text.charAt(i);
      i++;
      if (i > text.length - 1) {
          clearInterval(interval);
          element.classList.add('hide-cursor');
      }
  }, delay);
}

// Call the typing effect function on page load
window.addEventListener('load', function () {
  const nameElement = document.getElementById('name');
  const textToType = 'Ralph '; // Replace with your desired text
  const delay = 200; // Adjust the delay (in milliseconds) to control typing speed

  typeEffect(nameElement, textToType, delay)
});

// Add event listeners to all elements with the "tooltip" class
const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseenter", () => {
        const tooltipElement = tooltip.querySelector("::after");
        if (tooltipElement) {
            tooltipElement.style.opacity = "1";
            tooltipElement.style.visibility = "visible";
        }
    });

    tooltip.addEventListener("mouseleave", () => {
        const tooltipElement = tooltip.querySelector("::after");
        if (tooltipElement) {
            tooltipElement.style.opacity = "0";
            tooltipElement.style.visibility = "hidden";
        }
    });
});