const btn = document.getElementById('button');
const customAlert = document.getElementById('custom-alert');

btn.addEventListener('click', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_j5ee1r5';
    const templateID = 'template_frkoc9p';

    emailjs.sendForm(serviceID, templateID, document.getElementById('form'))
        .then(() => {
            showAlert('Message sent successfully ✅');
            document.getElementById('form').reset();
        }, (err) => {
            showAlert(JSON.stringify(err));
        });

    // Esta es una función que muestra la alerta
    function showAlert(message) {
        customAlert.textContent = message;
        customAlert.style.display = 'block'; // Mostrar la alerta
        setTimeout(() => {
            customAlert.style.display = 'none'; // Ocultar la alerta después de 5 segundos
        }, 500);
    }
});
