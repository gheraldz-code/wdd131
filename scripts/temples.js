// for the changes on screens
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.querySelector(".nav-list");
const menuIcon = document.getElementById("menu-icon");

mobileMenu.addEventListener("click", () => {
    navList.classList.toggle("active");

    if (navList.classList.contains("active")) {
        menuIcon.textContent = "✕";
    } else {
        menuIcon.textContent = "☰";
    }
});

// FOOTER

// first: get the current year
const currentYear = new Date().getFullYear();

// then add the year to id "currentyear"
document.getElementById("currentyear").textContent = currentYear;

// get the last modified date of the files
const lastModified = document.lastModified;

// add the date with the element to id "lastModified"
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;