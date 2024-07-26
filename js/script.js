let timer;
let seconds = 10;
let setedSeconds = 10; // Cronómetro inicia en 10 segundos
const timerDisplay = document.getElementById('timer');
const resetButton = document.getElementById('reset');
const stopButton = document.getElementById('stop');
const pauseButton = document.getElementById('pause');
const startButton = document.getElementById('start');
const openModalButton = document.getElementById('settings');
const modal = document.getElementById('myModal');
const closeModalButton = document.querySelector('.close');
const saveTimeButton = document.getElementById('saveTime');
const modalInput = document.getElementById('modalInput');



// Actualiza la visualización del cronómetro
function updateDisplay() {
    timerDisplay.textContent = seconds;
}

// Inicia el cronómetro
function startTimer() {
    // Asegúrate de no iniciar múltiples intervalos si ya hay uno en curso
    if (timer) return;

    timer = setInterval(() => {
        if (seconds > 0) {
            seconds--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null; // Establece timer a null cuando se detiene
            seconds = setedSeconds; // Reinicia el tiempo a 10 segundos
            updateDisplay();
            handleTimerEnd();
        }
    }, 1000);
}

// Detiene el cronómetro
function stopTimer() {
    clearInterval(timer);
    timer = null;
    seconds = setedSeconds; 
    updateDisplay();
    handleTimerEnd();
}

// Pausa el cronómetro
function pauseTimer() {
    clearInterval(timer);
    timer = null;
    handleTimerEnd();
}

// Reinicia el cronómetro
function resetTimer() {
    seconds = setedSeconds;
    updateDisplay();
}

// Maneja la visualización de los botones al detener, pausar o reiniciar el cronómetro
function handleTimerEnd() {
    stopButton.style.display = 'none';
    pauseButton.style.display = 'none';
    startButton.style.display = 'block';
    openModalButton.style.display = 'block';
    
}

// Maneja el botón de Start
function startStop() {
    if (timer) {
        pauseTimer();
    } else {
        startTimer();
        stopButton.style.display = 'block';
        pauseButton.style.display = 'block';
        startButton.style.display = 'none';
        openModalButton.style.display = 'none';
    }
}

// Event listeners para los botones
resetButton.addEventListener('click', resetTimer);
stopButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
startButton.addEventListener('click', startStop);
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);
saveTimeButton.addEventListener('click', saveTime);

// Cierra el modal si el usuario hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

updateDisplay(); // Inicializa la pantalla




function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function saveTime() {
    let secondsSet = parseInt(modalInput.value, 10);
    seconds = secondsSet;
    setedSeconds = secondsSet;
    updateDisplay();
    closeModal()
}