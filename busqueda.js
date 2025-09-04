function inicializarBuscador() {
    const buscador = document.getElementById('buscador');
    const resultados = document.getElementById('resultados');

    if (!buscador || !resultados) return; // Evita errores si no están en el DOM

    // Opciones visibles en la barra
    const opciones = [
        "Cybersecurity AND cloud",
        "Cybersecurity cloud NOT blockchain",
        "(cybersecurity AND cloud OR cloud AND security) AND ( threats  OR vulnerabilities OR risks )"
    ];

    // Mostrar todas las opciones al hacer click 
    buscador.addEventListener('focus', () => {
        mostrarOpciones(opciones);
    });

    // Filtrar opciones al escribir
    buscador.addEventListener('input', () => {
        const valor = buscador.value.toLowerCase().trim();

        if (valor === '') {
            mostrarOpciones(opciones);
            return;
        }

        const filtradas = opciones.filter(opcion =>
            opcion.toLowerCase().includes(valor)
        );

        if (filtradas.length > 0) {
            mostrarOpciones(filtradas);
        } else {
            mostrarNoExiste();
        }
    });

    // Al hacer click en una opción, ponerla en el input y ocultar menú
    resultados.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI' && !e.target.classList.contains('no-existe')) {
            buscador.value = e.target.textContent;
            ocultarOpciones();
        }
    });

    // Ocultar el menú si el input pierde foco 
    buscador.addEventListener('blur', () => {
        setTimeout(ocultarOpciones, 200);
    });

    function mostrarOpciones(lista) {
        resultados.innerHTML = '';
        lista.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            resultados.appendChild(li);
        });
        resultados.style.display = 'block';
    }

    function mostrarNoExiste() {
        resultados.innerHTML = '';
        const li = document.createElement('li');
        li.textContent = 'No existe ninguna opción';
        li.classList.add('no-existe');
        resultados.appendChild(li);
        resultados.style.display = 'block';
    }

    function ocultarOpciones() {
        resultados.style.display = 'none';
    }
}

// Inicializa el buscador cuando la página carga
document.addEventListener("DOMContentLoaded", () => {
    inicializarBuscador();

    const form = document.querySelector('form');
    const buscador = document.getElementById('buscador');

    form.addEventListener('submit', e => {
        e.preventDefault(); /// evitar que se reinicie

        // ponemos el texto en minúsculas y quitamos espacios dobles
        let valor = buscador.value.trim().toLowerCase().replace(/\s+/g, " ");

        const rutas = {
            "cybersecurity and cloud": "Consulta.html?consulta=0",
            "cybersecurity cloud not blockchain": "Consulta.html?consulta=1",
            "(cybersecurity and cloud or cloud and security) and ( threats or vulnerabilities or risks )": "Consulta.html?consulta=2"
        };

        if (rutas.hasOwnProperty(valor)) {
            window.location.href = rutas[valor];
        } else {
            alert("No existe una página para esa búsqueda");
        }
    });
});
