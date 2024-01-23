import "./style.scss";

let tick;
let countdown;

const dateInput = document.querySelector('input[type="date"]');
const submitButton = document.querySelector('button[type="submit"]');

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

submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Create a new tick instance with the updated countdown date
  const newDate = dateInput.value + "T00:00:00";
  startCountdown(newDate);
});
