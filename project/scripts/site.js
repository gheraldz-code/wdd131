
const products = [
    {
        id: 1,
        name: "Handmade Leather Notebooks",
        description: "Handbound notebooks featuring genuine leather covers and decorative stitching.",
        image: "images/cadernos_com_couro.png",
        category: "leather-notebook"
    },
    {
        id: 2,
        name: "Personalized Planners",
        description: "Handcrafted planners with personalized covers and practical details.",
        image: "images/agenda_couro_1.png",
        category: "planner"
    },
    {
        id: 3,
        name: "Handmade Notebooks",
        description: "Handbound notebooks created with care and attention to detail.",
        image: "images/jogo_cadernos_EBA.png",
        category: "notebook"
    }
];

function renderProducts() {
    const productList = document.querySelector("#product-list");

    if (!productList) {
        return;
    }

    productList.innerHTML = products.map(product => `
        <article class="product-card">
            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
                width="400"
                height="300"
            >
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button
                class="btn"
                type="button"
                data-product="${product.id}"
            >
                Ask About This Product
            </button>
        </article>
    `).join("");

    productList.querySelectorAll("[data-product]").forEach(button => {
        button.addEventListener("click", () => {
            const selectedProduct = products.find(
                product => product.id === Number(button.dataset.product)
            );

            if (selectedProduct) {
                localStorage.setItem(
                    "interestedProduct",
                    selectedProduct.category
                );

                localStorage.setItem(
                    "interestedProductName",
                    selectedProduct.name
                );

                window.location.href = "contact.html";
            }
        });
    });
}

function checkLocalStorage() {
    const productSelect = document.querySelector("#product-interest");
    const messageInput = document.querySelector("#message");
    const productName = localStorage.getItem("interestedProductName");

    if (productSelect) {
        const category = localStorage.getItem("interestedProduct");

        if (category) {
            productSelect.value = category;
        }
    }

    if (messageInput && productName && !messageInput.value) {
        messageInput.value =
            `Hello, I am interested in the ${productName}. Please provide more information.`;
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const feedback = document.querySelector("#form-feedback");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const formData = new FormData(form);

    const submission = {
        name: formData.get("name"),
        email: formData.get("email"),
        product: formData.get("product-interest"),
        message: formData.get("message"),
        date: new Date().toISOString()
    };

    localStorage.setItem(
        "lastContactSubmission",
        JSON.stringify(submission)
    );

    feedback.innerHTML = `
        <p>Thank you, ${submission.name}! Your message has been saved in this browser.</p>
        <p>This demonstration form does not send an email.</p>
    `;

    feedback.className = "feedback-message success";
    form.reset();

    localStorage.removeItem("interestedProduct");
    localStorage.removeItem("interestedProductName");
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    checkLocalStorage();

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", handleFormSubmit);
    }
});
