document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');

    // Fetch the JSON file
    fetch('products.json')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                // Create the product card element
                const card = document.createElement('div');
                card.className = 'product-card';

                // Build the WhatsApp link
                const waLink = `https://wa.me/${product.whatsapp}?text=Hello, I am interested in the ${product.name}`;

                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h2 class="product-name">${product.name}</h2>
                        <p class="product-price">${product.price}</p>
                        <p class="product-description">${product.description}</p>
                        <a href="${waLink}" target="_blank" class="whatsapp-btn">Inquire via WhatsApp</a>
                    </div>
                `;

                productGrid.appendChild(card);
            });
        })
        .catch(error => console.error('Error loading products:', error));
});
