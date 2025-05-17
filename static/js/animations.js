// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    applyFadeInAnimations();
    handleScrollEffects();
    cursorEffects();
});

// Function to apply fade-in animations to elements
function applyFadeInAnimations() {
    const elements = document.querySelectorAll(".title, .subtitle, .description, .project-card, .contact-form");
    elements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "opacity 1.5s ease-in-out, transform 1.5s ease-in-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 500);
    });
}

// Function to handle scroll-triggered animations
function handleScrollEffects() {
    window.addEventListener("scroll", () => {
        const scrollPos = window.scrollY;
        document.querySelectorAll(".scroll-effect").forEach((element) => {
            const elementTop = element.offsetTop - window.innerHeight / 1.5;
            if (scrollPos > elementTop) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    });
}

// Function for custom cursor effects
function cursorEffects() {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (event) => {
        cursor.style.top = `${event.clientY}px`;
        cursor.style.left = `${event.clientX}px`;
    });

    document.querySelectorAll("a, .project-card").forEach((element) => {
        element.addEventListener("mouseover", () => {
            cursor.style.transform = "scale(1.5)";
        });
        element.addEventListener("mouseleave", () => {
            cursor.style.transform = "scale(1)";
        });
    });
}

// Apply additional hover effects to buttons
document.querySelectorAll(".scroll-button, .send-button").forEach((button) => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease-in-out";
    });
    button.addEventListener("mouseleave", () => {
        button.style.transform = "scale(1)";
    });
});