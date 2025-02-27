const products = [
    {
        id: 1,
        name: "Paquete Premium 20 unidades",
        description: "Botellas de 625ml - Ideal para oficinas y eventos",
        price: 8.50,
        image: "img/x20.jpg",
        features: ["Agua purificada", "Botella ergonómica", "Tapa segura"]
    },
    {
        id: 2,
        name: "Pack Familiar 15 unidades",
        description: "Botellas de 625ml - Perfecto para el hogar",
        price: 7.50,
        image: "img/x15.jpg",
        features: ["Agua purificada", "Tamaño familiar", "Práctico pack"]
    },
    {
        id: 3,
        name: "Pack Mini 20 unidades",
        description: "Botellas de 300ml - Ideal para niños y deportistas",
        price: 5.05,
        image: "img/x300.jpg",
        features: ["Tamaño compacto", "Fácil de transportar", "Ideal para loncheras"]
    },
    {
        id: 4,
        name: "Pack Sport 12 unidades",
        description: "Botellas de 1L con chupón - Para deportistas",
        price: 20.00,
        image: "img/chupon.jpg",
        features: ["Chupón deportivo", "Mayor capacidad", "Diseño ergonómico"]
    },
    {
        id: 5,
        name: "Bidón Compacto",
        description: "8 litros - Para dispensadores pequeños",
        price: 5.00,
        image: "img/8lt.jpg",
        features: ["Fácil manipulación", "Ideal para espacios reducidos", "Con asas"]
    },
    {
        id: 6,
        name: "Bidón Familiar",
        description: "20 litros - Para dispensadores grandes",
        price: 13.00,
        image: "img/x200.png",
        features: ["Gran capacidad", "Con asas reforzadas", "Para dispensador"]
    }
];

function loadProducts() {
    const container = document.getElementById('productos-container');
    
    products.forEach(product => {
        const features = product.features.map(feature => 
            `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`
        ).join('');

        const productCard = `
            <div class="col-md-4 mb-4" data-aos="fade-up">
                <div class="card product-card h-100">
                    <div class="position-relative overflow-hidden">
                        <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                        <div class="position-absolute top-0 end-0 m-3">
                            <span class="badge bg-success rounded-pill">
                                <i class="fas fa-check-circle me-1"></i>Stock Disponible
                            </span>
                        </div>
                        <div class="product-overlay">
                            <div class="d-flex justify-content-center align-items-center h-100">
                                <a href="https://wa.me/51927362916?text=Hola, me interesa: ${product.name} - ${product.description}" 
                                   class="btn btn-light btn-lg rounded-circle mx-2" target="_blank">
                                    <i class="fab fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title fw-bold">${product.name}</h5>
                        <p class="card-text text-muted mb-3">${product.description}</p>
                        <ul class="list-unstyled mb-4">
                            ${features}
                        </ul>
                        <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="price-tag">
                                    <small class="text-muted">Precio</small>
                                    <div class="price">S/ ${product.price.toFixed(2)}</div>
                                </div>
                                <a href="https://wa.me/51927362916?text=Hola, me interesa: ${product.name} - ${product.description}" 
                                   class="btn btn-primary btn-lg rounded-pill" target="_blank">
                                    <i class="fab fa-whatsapp me-2"></i>Pedir Ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    AOS.init({
        duration: 800,
        once: true
    });
});
