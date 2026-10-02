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

// modify the page title when a link is clicked
const pageTitle = document.querySelector("#page-title");
const navLinks = document.querySelectorAll(".nav-list a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        pageTitle.textContent = link.textContent;
    });
});


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Rio de Janeiro Brazil",
    location: "Rio de Janeiro, Brazil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/1-001db7326e638032470a02813c9e47191ef74b0e.jpeg"
  },
  {
    templeName: "Medford Oregon",
    location: "Medford, Oregon, United States",
    dedicated: "2000, April, 16",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/medford-oregon/400x250/medford-temple-lds-988399-wallpaper.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 58005,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/400x250/san-diego-temple-765109-wallpaper.jpg"
  },
  {
    templeName: "Idaho Falls Idaho",
    location: "Idaho Falls, Idaho, United States",
    dedicated: "1945, September, 23",
    area: 85624,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/5-Idaho-Falls-Temple-1869448.jpg"
  },
];

/*const nonutahLink = document.querySelector("#nonutah");
nonutahLink.addEventListener("click", () => {
    const filteredTemples = temples.filter(temple => !temple.location.includes("Utah"));
    createTempleCard(filteredTemples);
});*/
const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});


const olderThanLink = document.querySelector("#older-than");
function filterTemplesOlderThan(year) {
    return temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear();
        return dedicationYear < year;
    });
}
olderThanLink.addEventListener("click", () => {
    const filteredTemples = filterTemplesOlderThan(1900);
    createTempleCard(filteredTemples);
});


const newerThanLink = document.querySelector("#newer-than");
function filterTemplesNewerThan(year) {
    return temples.filter(temple => {
        const dedicationYear = new Date(temple.dedicated).getFullYear();
        return dedicationYear > year;
    });
}
newerThanLink.addEventListener("click", () => {
    const filteredTemples = filterTemplesNewerThan(2000);
    createTempleCard(filteredTemples);
});


const largerThanLink = document.querySelector("#larger-than");
function filterTemplesLargerThan(area) {
    return temples.filter(temple => temple.area > area);
}
largerThanLink.addEventListener("click", () => {
    const filteredTemples = filterTemplesLargerThan(90000);
    createTempleCard(filteredTemples);
});

const smallerThanLink = document.querySelector("#smaller-than");
function filterTemplesSmallerThan(area) {
    return temples.filter(temple => temple.area < area);
}
smallerThanLink.addEventListener("click", () => {
    const filteredTemples = filterTemplesSmallerThan(10000);
    createTempleCard(filteredTemples);
});


createTempleCard(temples);

function createTempleCard(filteredTemples){
    document.querySelector(".temple-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".temple-grid").appendChild(card);
    });
}

// FOOTER

// first: get the current year
const currentYear = new Date().getFullYear();

// then add the year to id "currentyear"
document.getElementById("currentyear").textContent = currentYear;

// get the last modified date of the files
const lastModified = document.lastModified;

// add the date with the element to id "lastModified"
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;