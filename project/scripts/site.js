// Array of product objects
const products = [
    {
        id: 1,
        name: "Embroidered Book Cover",
        description: "Customizable cover for your scriptures or favorite books with handmade embroidery.",
        image: "https://via.placeholder.com/400x300/735744/F5F0E8?text=Book+Covers"
    },
    {
        id: 2,
        name: "Handmade Notebook",
        description: "Beautifully bound notebook perfect for journaling, sketching, or note-taking.",
        image: "https://via.placeholder.com/400x300/5B6953/F5F0E8?text=Notebooks"
    },
    {
        id: 3,
        name: "Custom Planner",
        description: "Stay organized with our personalized, handcrafted planners tailored to your schedule.",
        image: "https://via.placeholder.com/400x300/A68A64/F5F0E8?text=Planners"
    }
];

// Function 1: Render products dynamically using array methods and template literals
function renderProducts() {
    const productList = document.getElementById("product-list");
    
    if (productList) {
        products.forEach(product => {
            const productHTML = `
                <article class="product-card">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" width="400" height="300">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <button class="btn" type="button" data-product="${product.name}">Inquire About This</button>
                </article>
            `;
            productList.innerHTML += productHTML;
        });
        
        // Add event listeners to dynamically created buttons
        const inquireButtons = document.querySelectorAll(".product-card .btn");
        inquireButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                const productName = event.target.getAttribute("data-product");
                localStorage.setItem("interestedProduct", productName);
                window.location.href = "contact.html";
            });
        });
    }
}

// Function 2: Handle form submission and save to localStorage
function handleFormSubmit(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const productInterest = document.getElementById("product-interest");
    const messageInput = document.getElementById("message");
    const feedbackDiv = document.getElementById("form-feedback");
    
    // Conditional branching for validation
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        feedbackDiv.innerHTML = `<p>Please fill out all required fields.</p>`;
        feedbackDiv.className = "feedback-message";
        return;
    }
    
    // Create submission object
    const submissionData = {
        name: nameInput.value,
        email: emailInput.value,
        product: productInterest.value,
        message: messageInput.value,
        date: new Date().toISOString()
    };
    
    // Save to localStorage
    localStorage.setItem("lastContactSubmission", JSON.stringify(submissionData));
    
    // Modify DOM to show success message using template literals
    feedbackDiv.innerHTML = `<p>Thank you, ${submissionData.name}! Your message about the ${submissionData.product || "custom request"} has been received. We will contact you at ${submissionData.email} shortly.</p>`;
    feedbackDiv.className = "feedback-message success";
    
    // Reset form and clear temporary localStorage
    document.getElementById("contact-form").reset();
    localStorage.removeItem("interestedProduct");
}

// Function 3: Check localStorage to prefill/greet the user
function checkLocalStorage() {
    const interestedProduct = localStorage.getItem("interestedProduct");
    const productSelect = document.getElementById("product-interest");
    
    if (interestedProduct && productSelect) {
        // Conditional branching to match the product
        if (interestedProduct.includes("Book Cover")) {
            productSelect.value = "book-cover";
        } else if (interestedProduct.includes("Notebook")) {
            productSelect.value = "notebook";
        } else if (interestedProduct.includes("Planner")) {
            productSelect.value = "planner";
        }
        
        const messageInput = document.getElementById("message");
        messageInput.value = `Hello, I am interested in the ${interestedProduct}. Please provide more information.`;
    }
    
    const lastSubmission = localStorage.getItem("lastContactSubmission");
    const feedbackDiv = document.getElementById("form-feedback");
    const contactForm = document.getElementById("contact-form");
    
    if (lastSubmission && feedbackDiv && contactForm) {
        const data = JSON.parse(lastSubmission);
        feedbackDiv.innerHTML = `<p>Welcome back! Your last inquiry was regarding: ${data.product || "a custom request"}.</p>`;
        feedbackDiv.className = "feedback-message success";
    }
}

// Event Listeners for DOM interaction
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    checkLocalStorage();
    
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmit);
    }
});