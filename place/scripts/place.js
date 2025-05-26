// update the current year in the footer
const currentYearElem = document.getElementById('currentyear');
currentYearElem.textContent = new Date().getFullYear();

// Update the last modified date
const lastModifiedElem = document.getElementById('lastModified');
lastModifiedElem.textContent = `Last Modified: ${document.lastModified}`;

//static values ​​that match your HTML
const temperatureC = 24;  
const windSpeedKmh = 10;  

// Function that calculates wind chill (thermal sensation) in °C
// Formula based on the official NOAA formula
function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

// Function to display wind chill or "NA" depending on conditions
function displayWindChill(tempC, windKmh) {
  const windChillElem = document.getElementById('windChill');

  if (tempC <= 10 && windKmh > 4.8) {
    const chill = calculateWindChill(tempC, windKmh);
    windChillElem.textContent = `Wind Chill: ${chill} °C`;
  } else {
    windChillElem.textContent = 'Wind Chill: N/A';
  }
}

// run when the page loads
window.addEventListener('load', () => {
  displayWindChill(temperatureC, windSpeedKmh);
});
