// 1. Buscador/Filtro en tiempo real para las tarjetas
document.getElementById('searchInput').addEventListener('input', function(e) {
    const filterText = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.getAttribute('data-title') || '';
        const text = card.textContent.toLowerCase();

        if (title.includes(filterText) || text.includes(filterText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 2. Función para evaluar el Quiz
function calcularQuiz() {
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const resultDiv = document.getElementById('quizResult');

    if (!q1 || !q2) {
        resultDiv.style.color = '#e74c3c';
        resultDiv.textContent = 'Por favor responde todas las preguntas para ver tu resultado.';
        return;
    }

    const puntaje = parseInt(q1.value) + parseInt(q2.value);
    resultDiv.style.color = '#16a085';

    if (puntaje >= 5) {
        resultDiv.textContent = '¡Excelente! Tienes un nivel alto de empatía y conexión emocional con los demás.';
    } else if (puntaje >= 3) {
        resultDiv.textContent = 'Buen nivel. Puedes seguir practicando la escucha activa para fortalecer tus relaciones.';
    } else {
        resultDiv.textContent = 'Tienes área de oportunidad: podrías trabajar más en ponerte en el lugar de los demás.';
    }
}

// 3. Simulación de Envío de Formulario de Contacto
function enviarContacto(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const feedbackDiv = document.getElementById('formFeedback');

    feedbackDiv.style.color = '#27ae60';
    feedbackDiv.textContent = `¡Gracias, ${nombre}! Tu mensaje ha sido enviado exitosamente (Simulación).`;

    document.getElementById('contactForm').reset();
}