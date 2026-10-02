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


// GET FORM DATA

const params = new URLSearchParams(window.location.search);

const productId = params.get("product");
const rating = params.get("rating");
const installationDate = params.get("installation-date");
const features = params.getAll("features");
const writtenReview = params.get("written-review");
const userName = params.get("user-name");


// FIND PRODUCT

const selectedProduct = products.find(product => product.id === productId);


// DISPLAY PRODUCT

document.getElementById("review-message").textContent =
    `Thank you for your review of ${selectedProduct.name}!`;


// DISPLAY RATING

document.getElementById("review-rating").textContent =
    `Rating: ${rating}/5`;


// DISPLAY DATE

document.getElementById("review-date").textContent =
    `Installation Date: ${installationDate}`;


// FEATURE NAMES

const featureNames = {
    durability: "Durability",
    ease_of_use: "Ease of Use",
    performance: "Performance",
    design: "Design"
};

const selectedFeatures = features.map(feature => featureNames[feature]);

document.getElementById("review-features").textContent =
    `Useful Features: ${selectedFeatures.join(", ") || "None"}`;


// DISPLAY WRITTEN REVIEW

document.getElementById("review-text").textContent =
    `Review: ${writtenReview || "No written review provided."}`;


// DISPLAY USER

document.getElementById("review-user").textContent =
    `User: ${userName || "Anonymous"}`;


// REVIEW COUNT

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
    ? "review"
    : "reviews";

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
