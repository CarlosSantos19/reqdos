// Obtener referencia a los botones y al elemento de audio
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');
const audioElement = document.getElementById('audioElement');

const playRequerimientosButton = document.getElementById('playRequerimientosButton');
const stopRequerimientosButton = document.getElementById('stopRequerimientosButton');
const audioRequerimientos = document.getElementById('audioRequerimientos');

const playDocumentosButton = document.getElementById('playDocumentosButton');
const stopDocumentosButton = document.getElementById('stopDocumentosButton');
const audioDocumentos = document.getElementById('audioDocumentos');

// Función para reproducir el audio

function playAudio() {
    // Si el audio ya está reproduciéndose, detenerlo
    if (audioElement.paused) {
        audioElement.play();
        playButton.textContent = 'Pausar Audio';
    } else {
        audioElement.pause();
        playButton.textContent = 'Reproducir Audio';
    }
}

function playRequerimientos() {
    // Si el audio ya está reproduciéndose, detenerlo
    if (audioRequerimientos.paused) {
        audioRequerimientos.play();
        playRequerimientosButton.textContent = 'Pausar Requerimientos';
    } else {
        audioRequerimientos.pause();
        playRequerimientosButton.textContent = 'Reproducir Requerimientos';
    }
}

function playDocumentos() {
    // Si el audio ya está reproduciéndose, detenerlo
    if (audioDocumentos.paused) {
        audioDocumentos.play();
        playDocumentosButton.textContent = 'Pausar Documentos';
    } else {
        audioDocumentos.pause();
        playDocumentosButton.textContent = 'Reproducir Documentos';
    }
}

// Función para detener el audio
function stopAudio() {
    audioElement.pause();
    audioElement.currentTime = 0;
    playButton.textContent = 'Reproducir Audio';
}

function stopRequerimientos() {
    audioRequerimientos.pause();
    audioRequerimientos.currentTime = 0;
    playRequerimientosButton.textContent = 'Reproducir Requerimientos';
}

function stopDocumentos() {
    audioDocumentos.pause();
    audioDocumentos.currentTime = 0;
    playDocumentosButton.textContent = 'Reproducir Documentos';
}

// Agregar eventos a los botones
playButton.addEventListener('click', playAudio);
stopButton.addEventListener('click', stopAudio);

playRequerimientosButton.addEventListener('click', playRequerimientos);
stopRequerimientosButton.addEventListener('click', stopRequerimientos);

playDocumentosButton.addEventListener('click', playDocumentos);
stopDocumentosButton.addEventListener('click', stopDocumentos);