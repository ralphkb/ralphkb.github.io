const toggleContainer = document.querySelector(".toggle-container");
const toggleCircle = document.querySelector(".toggle-circle");
const toggleIcon = document.getElementById("toggle-icon");
const currentMode = localStorage.getItem("mode");
if (currentMode === "dark") {
  enableDarkMode();
}

toggleContainer.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  toggleCircle.style.transform = "translateX(100%)";
  toggleCircle.style.backgroundColor = "#000";
  toggleIcon.innerHTML = "<span>🌙</span>";
  toggleContainer.style.backgroundColor = "#00000063";
  document.body.classList.add("dark-mode");
  localStorage.setItem("mode", "dark");
}

function enableLightMode() {
  toggleCircle.style.transform = "translateX(0)";
  toggleCircle.style.backgroundColor = "#fff";
  toggleIcon.innerHTML = '<span class="light-icon active">☀️</span>';
  toggleContainer.style.backgroundColor = "#fff8f8c9";
  document.body.classList.remove("dark-mode");
  localStorage.setItem("mode", "light");
}

const mobileToggle = document.getElementById("mobile-toggle");
const mobileNav = document.getElementById("mobile-nav");

mobileToggle.addEventListener("click", function () {
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
      element.classList.add("hide-cursor");
    }
  }, delay);
}

// Call the typing effect function on page load
window.addEventListener("load", function () {
  const nameElement = document.getElementById("name");
  const textToType = "Ralph ";
  const delay = 200; // Delay of typing speed in milliseconds

  typeEffect(nameElement, textToType, delay);
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
