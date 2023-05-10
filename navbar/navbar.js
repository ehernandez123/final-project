document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar/navbar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("navbar").innerHTML = data;
  
        // Scroll event listener
        const logo1 = document.querySelector(".logo1");
        const logo2 = document.querySelector(".logo2");
  
        window.addEventListener("scroll", function () {
          let scrollPercentage = Math.min(window.scrollY / 50, 1);
          logo1.style.opacity = 1 - scrollPercentage;
          logo2.style.clipPath = `polygon(0 0, ${scrollPercentage * 100}% 0, ${
            scrollPercentage * 100
          }% 100%, 0 100%)`;
        });
  
        // Hamburger menu event listener
        const menuBtn = document.getElementById("menu-btn");
        const menuDropdown = document.getElementById("menu-dropdown");
  
        menuBtn.addEventListener("click", function () {
          menuDropdown.classList.toggle("show");
        });
      })
      .catch((error) => {
        console.error("Error loading navbar:", error);
      });
  });
  