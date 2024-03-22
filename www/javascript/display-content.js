function showOptions(type) {
    let optionsContainer = document.getElementById('options-container');
    let options = '';

    switch (type) {
        //centro
        case 'centro':
            options += '<a class="container-content" href="center/schedules.html">HORARIO</a><br><hr class="hr">';
            options += '<a class="container-content" href="center/rules.html">NORMAS</a><br><hr class="hr">';
            options += '<a class="container-content" href="center/municipality.html">MUNICIPIO</a><br>';
            break;
        case 'centro-2':
            options += '<a class="container-content" href="../center/schedules.html">HORARIO</a><br><hr class="hr">';
            options += '<a class="container-content" href="../center/rules.html">NORMAS</a><br><hr class="hr">';
            options += '<a class="container-content" href="../center/municipality.html">MUNICIPIO</a><br>';
            break;
        // profesorado
        case 'profesorado':
            options += '<a class="container-content" href="professorship/staff.html">PERSONAL</a><br><hr class="hr">';
            options += '<a class="container-content" href="professorship/dates.html">PEDIR CITA</a><br>';
            break;
        case 'profesorado-2':
            options += '<a class="container-content" href="../professorship/staff.html">PERSONAL</a><br><hr class="hr">';
            options += '<a class="container-content" href="../professorship/dates.html">PEDIR CITA</a><br>';
            break;
        //alumnado
        case 'alumnado':
            options += '<a class="container-content" href="studentbody/academic-objectives.html">OBJETIVOS ACADÉMICOS</a><br><hr class="hr">';
            options += '<a class="container-content" href="studentbody/proof-template.html">PLANTILLA DE JUSTIFICANTE</a><br>';
            break;
        case 'alumnado-2':
            options += '<a class="container-content" href="../studentbody/academic-objectives.html">OBJETIVOS ACADÉMICOS</a><br><hr class="hr">';
            options += '<a class="container-content" href="../studentbody/proof-template.html">PLANTILLA DE JUSTIFICANTE</a><br>';
            break;
        //cursos
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