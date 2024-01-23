import "./style.scss";

window.handleTickInit = function (tick) {
  var countdown = Tick.count.down("2024-04-23T00:00:00");

  countdown.onupdate = function (value) {
    tick.value = value;
  };

  countdown.onended = function () {
    // Handle when the countdown ends
  };
};
