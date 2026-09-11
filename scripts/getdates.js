// first: get the current year
const currentYear = new Date().getFullYear();

// then add the year to id "currentyear"
document.getElementById("currentyear").textContent = currentYear;

// get the last modified date of the files
const lastModified = document.lastModified;

// add the date with the element to id "lastModified"
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;