function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hourHand = document.getElementById("hour-hand");
  const minuteHand = document.getElementById("minute-hand");
  document.getElementById("digital").innerHTML = hour + ":" + minute;
  const secondHand = document.getElementById("second-hand");

  const hourDegrees = hour * 30 + 0.5 * minute; // 30 degrees per hour, 0.5 degrees per minute
  const minuteDegrees = minute * 6 + 0.1 * second; // 6 degrees per minute, 0.1 degrees per second
  const secondDegrees = second * 6; // 6 degrees per second

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000); // Update every second
