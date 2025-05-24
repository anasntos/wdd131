// Current Year
const yearSpan = document.getElementById('currentyear');
const today = new Date();
yearSpan.textContent = today.getFullYear();

// Last Modified
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
