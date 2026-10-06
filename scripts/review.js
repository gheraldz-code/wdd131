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


// Get Form data

const params = new URLSearchParams(window.location.search);

const productId = params.get("product");
const rating = params.get("rating");
const installationDate = params.get("installation-date");
const features = params.getAll("features");
const writtenReview = params.get("written-review");
const userName = params.get("user-name");


// Find product

const selectedProduct = products.find(product => product.id === productId);


// Display product

document.getElementById("review-message").textContent =
    `Thank you for your review of ${selectedProduct.name}!`;


// Display rating

document.getElementById("review-rating").textContent =
    `Rating: ${rating}/5`;


// Display date

document.getElementById("review-date").textContent =
    `Installation Date: ${installationDate}`;


// Feature names

const featureNames = {
    durability: "Durability",
    ease_of_use: "Ease of Use",
    performance: "Performance",
    design: "Design"
};

const selectedFeatures = features.map(feature => featureNames[feature]);

document.getElementById("review-features").textContent =
    `Useful Features: ${selectedFeatures.join(", ") || "None"}`;


// Display written review

document.getElementById("review-text").textContent =
    `Review: ${writtenReview || "No written review provided."}`;


// Display User

document.getElementById("review-user").textContent =
    `User: ${userName || "Anonymous"}`;


// Review count (control the refresh)

const currentReview = window.location.search;
const lastReview = sessionStorage.getItem("lastReview");

if (currentReview !== lastReview) {

    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    sessionStorage.setItem("lastReview", currentReview);
}

const reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

const reviewText = reviewCount === 1
    ? "review" // only for the first (singular)
    : "reviews"; // after the first (plural)

document.getElementById("review-count").textContent =
    `You have submitted ${reviewCount} ${reviewText}.`;

// to reset the review count, you can use the following line in the console:
// localStorage.removeItem("reviewCount"); 
// and to reset the session storage, you can use:
// sessionStorage.removeItem("lastReview");


// FOOTER

const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent =
    "Last Modification: " + lastModified;
