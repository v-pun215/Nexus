function home() {
    window.location.href = "index.html";
}
function apply() {
    window.location.href = "apply.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.application-form');
    const overlay = document.getElementById('overlay-success');
    const closeButton = document.querySelector('.close-button');

    // Ensure the overlay is hidden on page load
    if (overlay) {
        overlay.style.display = 'none';
    }

    if (form && overlay && closeButton) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the default form submission behavior

            // Validate form fields (basic validation)
            const fullName = document.getElementById('full-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const program = document.getElementById('program').value;
            const message = document.getElementById('message').value.trim();

            if (fullName && email && phone && program && message) {
                // If all fields are valid, show the success overlay
                overlay.style.display = 'flex';
            } else {
                alert('Please fill out all fields before submitting.');
            }
        });

        closeButton.addEventListener('click', () => {
            overlay.style.display = 'none';
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        });
    } else {
        console.error('Form or overlay elements not found in the DOM.');
    }
});