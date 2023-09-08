// Assuming the date is today's date
const currentDate = new Date();
const timeString = "11:32:37";
const timeParts = timeString.split(":");
const customDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), timeParts[0], timeParts[1], timeParts[2]);

// Get the UTC time in milliseconds
const utcMilliseconds = customDate.getTime();
document.querySelector('[data-testid="currentUTCTime"]').textContent = utcMilliseconds;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = days[new Date().getDay()];

// Check if the current day is Friday
if (currentDay === "Friday") {
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDay;
} else {
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = "Today is not Friday. It's " + currentDay;
}