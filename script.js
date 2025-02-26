document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        const thankYouMessage = document.createElement("p");
        thankYouMessage.textContent = "Thank you for contacting us! We'll get back to you soon.";
        thankYouMessage.style.color = "#333";
        thankYouMessage.style.fontSize = "18px";
        thankYouMessage.style.marginTop = "30px";


        form.appendChild(thankYouMessage);

        form.reset();
    });
});



document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("mouseover", function() {
        this.style.color = "#B67E4E"; 
        this.style.fontWeight = "bold";
    });

    link.addEventListener("mouseout", function() {
        this.style.color = "#333"; 
        this.style.fontWeight = "normal";
    });
});

const darkModeToggle = document.getElementById("dark-mode-toggle");

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});




window.addEventListener("load", function() {
    const contactForm = document.querySelector(".contact-right");
    contactForm.style.opacity = "0";
    contactForm.style.transform = "translateY(50px)";
    
    setTimeout(() => {
        contactForm.style.transition = "all 0.6s ease-in-out";
        contactForm.style.opacity = "1";
        contactForm.style.transform = "translateY(0)";
    }, 300);
});




document.addEventListener("DOMContentLoaded", function () {
    const greeting = document.createElement("div");
    greeting.classList.add("greeting-message");

    const now = new Date();
    const hours = now.getHours();

    let message = "";
    if (hours < 12) {
        message = "Good morning! ☀️ Enjoy our candle collection!";
    } else if (hours < 18) {
        message = "Good afternoon! 🌿 Enjoy our candle collection!";
    } else {
        message = "Good evening! 🌙 Relax with our scented candles.";
    }

    greeting.textContent = message;
    
    
    const imageContainer = document.querySelector(".container-left");
    if (imageContainer) {
        imageContainer.style.position = "relative"; 
        imageContainer.appendChild(greeting);
    }
});













