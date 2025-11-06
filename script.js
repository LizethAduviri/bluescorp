// Base de datos de productos ACTUALIZADA - Sin colores, solo tallas
const products = [
    {
        id: 1,
        name: "MLB",
        category: "hombre",
        price: 200,
        image: "images/mlb37-5.jpg",
        description: "Zapatos MLB de alta calidad, perfectos para uso casual y deportivo.",
        sizes: [37, 39, 40, 41, 42, 43, 44],
        available: true
    },
    {
        id: 2,
        name: "NIKE",
        category: "mujer",
        price: 220,
        image: "images/nike37-5.jpg",
        description: "Tenis Nike con diseño moderno y comodidad excepcional para el día a día.",
        sizes: [36, 37, 38, 39, 40],
        available: true
    },
    {
        id: 3,
        name: "ADIDAS RUNNING",
        category: "unisex",
        price: 250,
        image: "images/tenis-3.jpg",
        description: "Zapatos deportivos Adidas ideales para running y entrenamiento.",
        sizes: [38, 39, 40, 41, 42, 43],
        available: true
    },
    {
        id: 4,
        name: "PUMA URBAN",
        category: "hombre",
        price: 180,
        image: "images/tenis-4.jpg",
        description: "Tenis urbanos Puma con estilo moderno para looks casuales.",
        sizes: [39, 40, 41, 42],
        available: true
    },
    {
        id: 5,
        name: "CONVERSE CLÁSICO",
        category: "unisex",
        price: 150,
        image: "images/tenis-5.jpg",
        description: "Los clásicos Converse, siempre en estilo para cualquier ocasión.",
        sizes: [36, 37, 38, 39, 40, 41, 42],
        available: true
    },
    {
        id: 6,
        name: "VANS SKATE",
        category: "unisex",
        price: 190,
        image: "images/tenis-6.jpg",
        description: "Vans especializados para skate con suela resistente y diseño urbano.",
        sizes: [38, 39, 40, 41, 42, 43],
        available: true
    },
    {
        id: 7,
        name: "REEBOK DEPORTIVO",
        category: "hombre",
        price: 210,
        image: "images/tenis-7.jpg",
        description: "Tenis deportivos Reebok con tecnología de amortiguación premium.",
        sizes: [40, 41, 42, 43, 44],
        available: true
    }
];

// Variables globales
let currentCategory = 'all';
let currentSize = 'all';
let currentProducts = [...products];
let selectedSize = null;

// Elementos DOM
const productsContainer = document.getElementById('products-container');
const categoryButtons = document.querySelectorAll('.category-btn');
const sizeButtons = document.querySelectorAll('.size-btn');
const modal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalSizeOptions = document.getElementById('modal-size-options');
const modalBuyBtn = document.getElementById('modal-buy-btn');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(currentProducts);
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Filtros por categoría
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            filterProducts();
        });
    });

    // Filtros por talla
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentSize = button.dataset.size;
            filterProducts();
        });
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        resetSelections();
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            resetSelections();
        }
    });
}

// Resetear selecciones
function resetSelections() {
    selectedSize = null;
}

// Filtrar productos según categoría y talla seleccionadas
function filterProducts() {
    let filteredProducts = [...products];
    
    // Filtrar por categoría
    if (currentCategory !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === currentCategory
        );
    }
    
    // Filtrar por talla
    if (currentSize !== 'all') {
        const sizeNum = parseInt(currentSize);
        filteredProducts = filteredProducts.filter(product => 
            product.sizes.includes(sizeNum)
        );
    }
    
    currentProducts = filteredProducts;
    renderProducts(currentProducts);
}

// Renderizar productos en el DOM
function renderProducts(productsToRender) {
    productsContainer.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 40px; font-size: 1.2rem;">No se encontraron productos con los filtros seleccionados.</p>';
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${!product.available ? 'sold-out' : ''}`;
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <p class="product-price">Bs ${product.price.toFixed(2)}</p>
                <button class="buy-btn" ${!product.available ? 'disabled style="background-color: #ccc;"' : ''}>
                    <i class="fab fa-whatsapp"></i> ${product.available ? 'Comprar' : 'Agotado'}
                </button>
            </div>
        `;
        
        // Agregar evento para abrir modal al hacer clic en la imagen
        const productImg = productCard.querySelector('.product-img');
        productImg.addEventListener('click', () => {
            openProductModal(product);
        });
        
        // Agregar evento para comprar
        const buyBtn = productCard.querySelector('.buy-btn');
        if (product.available) {
            buyBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openProductModal(product);
            });
        }
        
        productsContainer.appendChild(productCard);
    });
}

// Abrir modal con detalles del producto
function openProductModal(product) {
    modalImg.src = product.image;
    modalTitle.textContent = product.name;
    modalCategory.textContent = `Categoría: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`;
    modalDescription.textContent = product.description;
    modalPrice.textContent = `Bs ${product.price.toFixed(2)}`;
    
    // Generar opciones de talla
    modalSizeOptions.innerHTML = '';
    product.sizes.forEach(size => {
        const sizeOption = document.createElement('div');
        sizeOption.className = 'size-option';
        sizeOption.textContent = size;
        sizeOption.addEventListener('click', () => {
            // Remover selección anterior
            document.querySelectorAll('.size-option').forEach(opt => {
                opt.classList.remove('selected');
            });
            // Seleccionar nueva talla
            sizeOption.classList.add('selected');
            selectedSize = size;
        });
        modalSizeOptions.appendChild(sizeOption);
    });
    
    // Configurar botón de compra
    if (product.available) {
        modalBuyBtn.disabled = false;
        modalBuyBtn.style.backgroundColor = '';
        modalBuyBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar mensaje por WhatsApp';
        modalBuyBtn.onclick = () => initiatePurchase(product);
    } else {
        modalBuyBtn.disabled = true;
        modalBuyBtn.style.backgroundColor = '#ccc';
        modalBuyBtn.innerHTML = '<i class="fas fa-times"></i> Producto Agotado';
    }
    
    modal.style.display = 'flex';
    resetSelections();
}

// Iniciar proceso de compra
function initiatePurchase(product) {
    // Validar selección de talla
    if (!selectedSize) {
        alert('Por favor selecciona una talla');
        return;
    }
    
    // Crear mensaje para WhatsApp
    const message = `¡Hola! Me interesa comprar el siguiente producto de Bluescorp:

🛍️ *Producto:* ${product.name}
📏 *Talla:* ${selectedSize}
💰 *Precio:* Bs ${product.price.toFixed(2)}

Por favor, confirmen disponibilidad y procedan con la compra.

📍 *Tienda:* Bluescorp
📞 *Teléfono:* +591 63023599

¡Gracias!`;
    
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp de la tienda
    const phoneNumber = "59163023599";
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Marcar producto como vendido (en una aplicación real, esto se haría en el backend)
    // Para esta demo, simplemente actualizaremos el estado local
    product.available = false;
    filterProducts();
    
    // Cerrar modal
    modal.style.display = 'none';
    resetSelections();
}