// breathing system
const circle = document.getElementById("breathCircle");
const text = document.getElementById("breathText");

let step = 0;

// timings in milliseconds
const inhaleTime = 5000;
const holdTime = 5000;
const exhaleTime = 5000;

function breathingCycle() {
    if (step === 0) {
        // INHALE
        text.innerText = "INHALE";
        circle.style.transform = "scale(1.2)";
        step = 1;
        setTimeout(breathingCycle, inhaleTime);

    } else if (step === 1) {
        // HOLD
        text.innerText = "HOLD";
        step = 2;
        setTimeout(breathingCycle, holdTime);

    } else {
        // EXHALE
        text.innerText = "EXHALE";
        circle.style.transform = "scale(1)";
        step = 0;
        setTimeout(breathingCycle, exhaleTime);
    }
}

// start automatically
breathingCycle();




// meditation
let timer = null;
let remainingTime = 0;
let isPaused = false;

// Get elements
const input = document.getElementById("timerinput");
const display = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

// Format time as MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Start timer
startBtn.addEventListener("click", () => {
    if (timer) return; // prevent multiple timers

    if (!isPaused) {
        const minutes = parseInt(input.value);
        if (isNaN(minutes) || minutes <= 0) {
            alert("Please enter valid minutes");
            return;
        }
        remainingTime = minutes * 60;
    }

    isPaused = false;
    display.textContent = formatTime(remainingTime);

    timer = setInterval(() => {
        remainingTime--;
        display.textContent = formatTime(remainingTime);

        if (remainingTime <= 0) {
            clearInterval(timer);
            timer = null;
            alert("Meditation complete 🌿");
        }
    }, 1000);
});

// Pause timer
pauseBtn.addEventListener("click", () => {
    if (timer) {
        clearInterval(timer);
        timer = null;
        isPaused = true;
    }
});

// Reset timer
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    remainingTime = 0;
    isPaused = false;
    display.textContent = "00:00";
    input.value = "";
});