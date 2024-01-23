import "./style.scss";

//Select DOM Elements
const dateInput = document.getElementById("date-input");
const submitBtn = document.querySelector(".submit-btn");

// Declare variables
let tick;
let countdown;

// Set the initial value of the date input to the initial countdown date
dateInput.value = "2024-04-23";

window.handleTickInit = function (tickInstance) {
  tick = tickInstance;
  startCountdown(dateInput.value + "T00:00:00");
};

function startCountdown(date) {
  // If a countdown already exists, remove the update event listener
  if (countdown) {
    countdown.onupdate = function () {};
  }

  // Start a new countdown
  countdown = Tick.count.down(date);
  countdown.onupdate = function (value) {
    tick.value = value;
  };
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Create a new tick instance with the updated countdown date
  const newDate = dateInput.value + "T00:00:00";
  startCountdown(newDate);
});
