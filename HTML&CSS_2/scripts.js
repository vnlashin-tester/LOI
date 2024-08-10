document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Bedankt voor uw bericht!');
        form.reset();
    });
});
