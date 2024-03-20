function showOptions(type) {
    let optionsContainer = document.getElementById('options-container');
    let options = '';

    switch (type) {
        case 'centro':
            options += '<a class="container-content" href="#">EVENTOS</a><br><hr class="hr">';
            options += '<a class="container-content" href="#">HORARIO</a><br><hr class="hr">';
            options += '<a class="container-content" href="#">NORMAS</a><br><hr class="hr">';
            options += '<a class="container-content" href="#">MUNICIPIO</a><br>';
            break;
        case 'profesorado':
            options += '<a class="container-content" href="#">PERSONAL</a><br><hr class="hr">';
            options += '<a class="container-content" href="#">PEDIR CITA</a><br>';
            break;
        case 'alumnado':
            options += '<a class="container-content" href="#">OBJETIVOS ACADÉMICOS</a><br><hr class="hr">';
            options += '<a class="container-content" href="#">ORIENTACIÓN ACADÉMICA</a><br><hr class="hr">';
            options += '<a class="container-content" href="#">PLANTILLA DE JUSTIFICANTE</a><br>';
            break;
        case 'cursos':
            options += '<a class="container-content" href="courses/SMR1.html">SMR 1º</a><br><hr class="hr">';
            options += '<a class="container-content" href="courses/SMR2.html">SMR 2º</a><br><hr class="hr">';
            options += '<a class="container-content" href="courses/DAM1.html">DAM 1º</a><br><hr class="hr">';
            options += '<a class="container-content" href="courses/DAM2.html">DAM 2º</a>';
            break;
            case 'cursos-2':
                options += '<a class="container-content" href="SMR1.html">SMR 1º</a><br><hr class="hr">';
                options += '<a class="container-content" href="SMR2.html">SMR 2º</a><br><hr class="hr">';
                options += '<a class="container-content" href="DAM1.html">DAM 1º</a><br><hr class="hr">';
                options += '<a class="container-content" href="DAM2.html">DAM 2º</a>';
                break;
        default:
            break;
    }

    optionsContainer.innerHTML = options;
}


    var buttons = document.querySelectorAll('.button-content');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var contents = document.querySelectorAll('.sub-welcome-txt');

            contents.forEach(function(content) {
                content.style.display = 'block';
            });
        });
    });