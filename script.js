import * as PNotify from "https://cdn.jsdelivr.net/npm/@pnotify/core/dist/PNotify.js";

const { alert } = PNotify;

const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
let currentKeyIndex = 0;

const keyDisplay = document.getElementById("key");
const newGameButton = document.getElementById("new-game");

function updateKey() {
  keyDisplay.textContent = keys[currentKeyIndex];
}

function showError(message) {
  alert({
    text: message,
    type: "error",
    delay: 1500,
  });
}

function startGame() {
  currentKeyIndex = 0;
  updateKey();
}

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toLowerCase();
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex >= keys.length) {
      alert({ text: "Вітаємо! Ви пройшли гру!", type: "success", delay: 2000 });
      startGame();
    } else {
      updateKey();
    }
  } else {
    showError(`Неправильна клавіша! Очікувалась "${keys[currentKeyIndex]}"`);
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

newGameButton.addEventListener("click", () => {
  startGame();
  alert({ text: "Нова гра розпочалася!", type: "info", delay: 1500 });
});

startGame();

// Chart.js
const ctx = document.getElementById("sales-chart").getContext("2d");

const chartData = {
  labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      borderWidth: 2,
      fill: true,
      tension: 0.3,
    },
  ],
};

new Chart(ctx, {
  type: "line",
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
