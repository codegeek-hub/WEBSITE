console.log("Javavscript file is linked");

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const registerButton = document.getElementById('registerButton');

    // Function to handle resizing
    function handleResize() {
        if (window.innerWidth <= 600) {
            registerButton.textContent = 'Register'; // Shorter text for mobile
            registerButton.style.transform = 'scale(1.1)'; // Slightly larger on mobile
        } else {
            registerButton.textContent = 'Register Now'; // Original text for larger screens
            registerButton.style.transform = 'scale(1)'; // Default size
        }
    }

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Button click event to redirect
    registerButton.addEventListener('click', function() {
        // Replace 'registration_page.html' with the URL of your registration page
        window.location.href = 'registration_page.html';
    });
});

