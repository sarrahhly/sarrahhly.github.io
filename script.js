document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute('href'));
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Theme Toggle Button
    const themeToggle = document.createElement("button");
    themeToggle.innerText = "Toggle Theme";
    themeToggle.style.position = "fixed";
    themeToggle.style.top = "10px";
    themeToggle.style.right = "10px";
    themeToggle.style.padding = "10px";
    themeToggle.style.border = "none";
    themeToggle.style.background = "#d81b60";
    themeToggle.style.color = "white";
    themeToggle.style.cursor = "pointer";
    themeToggle.style.borderRadius = "5px";
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        themeToggle.innerText = document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
    });

    // Responsive Navbar Toggle
    const nav = document.querySelector("nav ul");
    const menuToggle = document.createElement("button");
    menuToggle.innerText = "☰";
    menuToggle.style.position = "fixed";
    menuToggle.style.top = "10px";
    menuToggle.style.left = "10px";
    menuToggle.style.padding = "10px";
    menuToggle.style.border = "none";
    menuToggle.style.background = "#d81b60";
    menuToggle.style.color = "white";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.borderRadius = "5px";
    document.body.appendChild(menuToggle);

    menuToggle.addEventListener("click", () => {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
        menuToggle.innerText = nav.style.display === "flex" ? "✖" : "☰";
    });

    // Typing Animation for Hero Section
    const textElement = document.querySelector(".content h1 span");
    const text = "Sarah Ali";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }
    textElement.textContent = "";
    typeEffect();

    // Add Event Listeners for the Dynamic Sections
    function createSection(id, title, content, background) {
        // Check if the section already exists
        let existingSection = document.getElementById(id);
        if (existingSection) {
            existingSection.scrollIntoView({ behavior: "smooth" });
            return;  // Exit if the section already exists
        }

        let section = document.createElement("div");
        section.id = id;
        section.style.padding = "20px";
        section.style.background = background;
        section.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `;
        document.body.appendChild(section);
        section.scrollIntoView({ behavior: "smooth" });
    }

    // About Section
    document.querySelector("a[href='#about']").addEventListener("click", function(e) {
        e.preventDefault();
        createSection("about-section", "More About Me", "I am currently a 2nd-year BTech student at JLU with a deep passion for web development, public speaking, reading, and writing.", "#ffe6f0");
    });

    // Skills Section
    document.querySelector("a[href='#skills']").addEventListener("click", function(e) {
        e.preventDefault();
        createSection("skills-section", "My Skills", "✔ Communication Skills<br>✔ Strong in Python, HTML, CSS, JavaScript<br>✔ Public Speaking & Content Writing", "#ffccdd");
    });

    // Contact Section
    document.querySelector("a[href='#contact']").addEventListener("click", function(e) {
        e.preventDefault();
        createSection("contact-section", "Contact Me", 'Email: <a href="mailto:sarrahh724@gmail.com">sarrahh724@gmail.com</a><br>Contact Number: 7000713131', "#f8bbd0");
    });
});
