document.getElementById('citaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('message').textContent = "SE HA PROGRAMADO SU CITA";

    setTimeout(function() {
        mensajeElement.textContent = '';
    }, 3000);
});
