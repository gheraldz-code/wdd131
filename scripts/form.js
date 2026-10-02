
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#product");

function listProducts(products) {
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
}

listProducts(products);


// FOOTER

// first: get the current year
const currentYear = new Date().getFullYear();

// then add the year to id "currentyear"
document.getElementById("currentyear").textContent = currentYear;

// get the last modified date of the files
const lastModified = document.lastModified;

// add the date with the element to id "lastModified"
document.getElementById("lastModified").textContent = "Last Modification: " + lastModified;