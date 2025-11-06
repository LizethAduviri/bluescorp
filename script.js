// Base de datos de productos ACTUALIZADA con más datos y variantes
const products = [
    {
        id: 1,
        name: "MLB Classic Sneakers",
        category: "hombre",
        price: 250,
        image: "images/mlb37-5.jpg",
        images: ["images/mlb37-5.jpg", "images/mlb37-5-2.jpg", "images/mlb37-5-3.jpg"],
        description: "Zapatos MLB clásicos, perfectos para estilo urbano. Material premium y durabilidad garantizada. Suela de goma con excelente tracción y amortiguación para mayor comodidad.",
        sizes: [37, 39, 40, 41, 42, 43, 44],
        colors: ["#1e3a8a", "#000000", "#8b0000"],
        available: true,
        badge: "new",
        features: ["Material premium", "Suela de goma", "Amortiguación", "Estilo urbano"],
        stock: 15
    },
    {
        id: 2,
        name: "NIKE Air Max 270",
        category: "mujer",
        price: 320,
        image: "images/nike37-5.jpg",
        images: ["images/nike37-5.jpg", "images/nike37-5-2.jpg", "images/nike37-5-3.jpg"],
        description: "Tenis Nike Air Max con tecnología de amortiguación visible. Ideales para deporte y moda. Diseño moderno con colores vibrantes que combinan con cualquier outfit.",
        sizes: [36, 37, 38, 39, 40],
        colors: ["#e11d48", "#000000", "#1e40af"],
        available: true,
       
        features: ["Tecnología Air Max", "Amortiguación visible", "Material transpirable", "Diseño moderno"],
        stock: 8
    },
  {
        id: 3,
        name: "ADIDAS Ultraboost 5.0",
        category: "unisex",
        price: 380,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60"],
        description: "Zapatillas running Adidas con tecnología Boost para máxima comodidad y rendimiento.",
        sizes: [38, 39, 40, 41, 42, 43],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Tecnología Boost", "Primeknit upper", "Perfecto para running"],
        stock: 12
    },
    {
        id: 4,
        name: "PUMA RS-X Game",
        category: "hombre",
        price: 280,
        image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&auto=format&fit=crop&q=60"],
        description: "Tenis Puma con diseño futurista y suela RS-X para un estilo urbano único y moderno.",
        sizes: [39, 40, 41, 42, 43],
        colors: ["#f59e0b", "#000000"],
        available: true,
        features: ["Diseño futurista", "Suela RS-X", "Estilo único"],
        stock: 10
    },
    {
        id: 5,
        name: "CONVERSE Chuck Taylor",
        category: "unisex",
        price: 220,
        image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=500&auto=format&fit=crop&q=60"],
        description: "Los clásicos Converse que nunca pasan de moda. Perfectos para cualquier ocasión casual.",
        sizes: [36, 37, 38, 39, 40, 41, 42],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Diseño clásico", "Versátil", "Icono cultural"],
        stock: 20
    },
    {
        id: 6,
        name: "VANS Old Skool Pro",
        category: "unisex",
        price: 260,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60"],
        description: "Vans especializados con suela UltraCush HD para mayor comodidad en skateboarding.",
        sizes: [38, 39, 40, 41, 42, 43],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Suela UltraCush HD", "Franja lateral icónica", "Duradero"],
        stock: 14
    },
    {
        id: 7,
        name: "REEBOK Nano X2",
        category: "hombre",
        price: 300,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Tenis de entrenamiento Reebok con tecnología Floatride para máximo rendimiento en el gym.",
        sizes: [40, 41, 42, 43, 44],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Tecnología Floatride", "Estabilidad superior", "Flexibilidad"],
        stock: 7
    },
    {
        id: 8,
        name: "NEW BALANCE 574",
        category: "unisex",
        price: 290,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60"],
        description: "New Balance 574 con diseño clásico y comodidad excepcional para el día a día.",
        sizes: [37, 38, 39, 40, 41, 42, 43],
        colors: ["#1e40af", "#000000"],
        available: true,
        features: ["Diseño heritage", "Comodidad excepcional", "Tecnología ENCAP"],
        stock: 18
    },

    {
        id: 10,
        name: "NIKE Dunk Low",
        category: "unisex",
        price: 340,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60"],
        description: "Nike Dunk Low, perfectas para skateboarding y estilo urbano casual.",
        sizes: [36, 37, 38, 39, 40, 41, 42],
        colors: ["#000000", "#ffffff", "#dc2626"],
        available: true,
        features: ["Perfecto para skate", "Diseño versátil", "Comodidad"],
        stock: 11
    },
    {
        id: 11,
        name: "ADIDAS Superstar",
        category: "unisex",
        price: 270,
        image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=500&auto=format&fit=crop&q=60"],
        description: "Adidas Superstar, las clásicas con puntera de caparazón, icono atemporal.",
        sizes: [36, 37, 38, 39, 40, 41, 42, 43],
        colors: ["#ffffff", "#000000"],
        available: true,
        features: ["Puntera de caparazón", "Diseño clásico", "Versátil"],
        stock: 16
    },
    {
        id: 12,
        name: "NIKE Air Force 1",
        category: "hombre",
        price: 310,
        image: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60"],
        description: "Nike Air Force 1, las zapatillas que revolucionaron el mundo del baloncesto.",
        sizes: [39, 40, 41, 42, 43, 44],
        colors: ["#ffffff", "#000000"],
        available: true,
        features: ["Amortiguación Air", "Diseño clásico", "Versátil"],
        stock: 13
    },
    {
        id: 13,
        name: "PUMA Cali Sport",
        category: "mujer",
        price: 240,
        image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=500&auto=format&fit=crop&q=60"],
        description: "Puma Cali Sport, inspiradas en el estilo vintage de los 80s con comodidad moderna.",
        sizes: [35, 36, 37, 38, 39],
        colors: ["#ffffff", "#f472b6"],
        available: true,
        features: ["Estilo vintage", "Comodidad moderna", "Diseño femenino"],
        stock: 8
    },
 
    {
        id: 15,
        name: "ASICS Gel-Kayano",
        category: "hombre",
        price: 420,
        image: "https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=500&auto=format&fit=crop&q=60"],
        description: "Asics Gel-Kayano, diseñadas para running de larga distancia con estabilidad superior.",
        sizes: [40, 41, 42, 43, 44, 45],
        colors: ["#1e40af", "#000000"],
        available: true,
        features: ["Tecnología Gel", "Estabilidad superior", "Para running"],
        stock: 7
    },
    {
        id: 16,
        name: "UNDER ARMOUR HOVR",
        category: "unisex",
        price: 380,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60"],
        description: "Under Armour HOVR, tecnología de amortiguación que devuelve energía en cada paso.",
        sizes: [38, 39, 40, 41, 42, 43],
        colors: ["#000000", "#0ea5e9"],
        available: true,
        features: ["Tecnología HOVR", "Devolución de energía", "Transpirable"],
        stock: 9
    },
    {
        id: 17,
        name: "FILA Disruptor 2",
        category: "mujer",
        price: 230,
        image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60"],
        description: "Fila Disruptor 2, estilo retro con suela gruesa para un look urbano impactante.",
        sizes: [35, 36, 37, 38, 39],
        colors: ["#ffffff", "#000000"],
        available: true,
        features: ["Estilo retro", "Suela gruesa", "Look urbano"],
        stock: 12
    },
    {
        id: 18,
        name: "BALENCIAGA Speed",
        category: "hombre",
        price: 680,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60"],
        description: "Balenciaga Speed, diseño vanguardista para los amantes de la moda urbana de lujo.",
        sizes: [41, 42, 43, 44, 45],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Diseño vanguardista", "Alta calidad", "Estilo exclusivo"],
        stock: 5
    },
    {
        id: 19,
        name: "TIMBERLAND Premium",
        category: "hombre",
        price: 520,
        image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&auto=format&fit=crop&q=60"],
        description: "Timberland Premium, botas clásicas de cuero premium resistentes al agua.",
        sizes: [40, 41, 42, 43, 44, 45],
        colors: ["#f59e0b", "#000000"],
        available: true,
        features: ["Cuero premium", "Resistente al agua", "Durabilidad"],
        stock: 8
    },
    {
        id: 20,
        name: "DR MARTENS 1460",
        category: "unisex",
        price: 480,
        image: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&auto=format&fit=crop&q=60"],
        description: "Dr. Martens 1460, las botas icono de la cultura alternativa y el rock.",
        sizes: [38, 39, 40, 41, 42, 43],
        colors: ["#000000", "#dc2626"],
        available: true,
        features: ["Icono cultural", "Suela air-cushioned", "Duraderas"],
        stock: 6
    },
    {
        id: 21,
        name: "NIKE React Infinity",
        category: "mujer",
        price: 360,
        image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60"],
        description: "Nike React Infinity, diseñadas para reducir lesiones y mejorar el rendimiento running.",
        sizes: [36, 37, 38, 39, 40],
        colors: ["#e11d48", "#000000"],
        available: true,
        features: ["Tecnología React", "Reduce lesiones", "Alta estabilidad"],
        stock: 10
    },
    {
        id: 22,
        name: "ADIDAS NMD R1",
        category: "unisex",
        price: 340,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60"],
        description: "Adidas NMD R1, combina estilo urbano con tecnología de running de última generación.",
        sizes: [38, 39, 40, 41, 42, 43],
        colors: ["#000000", "#0ea5e9", "#ffffff"],
        available: true,
        features: ["Estilo urbano", "Tecnología Boost", "Confort superior"],
        stock: 14
    },
    {
        id: 23,
        name: "NEW BALANCE 990v5",
        category: "hombre",
        price: 420,
        image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60"],
        description: "New Balance 990v5, artesanía estadounidense con comodidad y durabilidad premium.",
        sizes: [40, 41, 42, 43, 44],
        colors: ["#ffffff", "#000000"],
        available: true,
        features: ["Artesanía USA", "Comodidad premium", "Durabilidad"],
        stock: 7
    },
    {
        id: 24,
        name: "SAUCONY Ride 15",
        category: "unisex",
        price: 320,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Saucony Ride 15, zapatillas de running con amortiguación suave y respuesta energética.",
        sizes: [38, 39, 40, 41, 42, 43],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
  
];

// Variables globales
let currentCategory = 'all';
let currentSize = 'all';
let currentProducts = [...products];
let selectedSize = null;

let currentSearch = '';

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
const searchInput = document.getElementById('search-input');
const productsCount = document.getElementById('products-count');

// Inicializar la página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(currentProducts);
    setupEventListeners();
    updateProductsCount();
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

    // Buscador
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterProducts();
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

    // Efectos hover en tarjetas de información
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Actualizar contador de productos
function updateProductsCount() {
    if (productsCount) {
        const count = currentProducts.length;
        const total = products.length;
        productsCount.innerHTML = `Mostrando <span id="count">${count}</span> de <span id="total">${total}</span> productos`;
    }
}

// Resetear selecciones
function resetSelections() {
    selectedSize = null;
}

// Filtrar productos según categoría, talla y búsqueda
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
    
    // Filtrar por búsqueda
    if (currentSearch) {
        filteredProducts = filteredProducts.filter(product => 
            product.name.toLowerCase().includes(currentSearch) ||
            product.description.toLowerCase().includes(currentSearch) ||
            product.category.toLowerCase().includes(currentSearch)
        );
    }
    
    currentProducts = filteredProducts;
    renderProducts(currentProducts);
    updateProductsCount();
}

// Renderizar productos en el DOM
function renderProducts(productsToRender) {
    productsContainer.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i class="fas fa-search fa-3x" style="margin-bottom: 20px; color: var(--primary-color);"></i>
                <h3 style="margin-bottom: 10px; color: var(--dark-color);">No se encontraron productos</h3>
                <p style="color: #666;">Prueba con otros filtros o categorías</p>
            </div>
        `;
        return;
    }
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = `product-card ${!product.available ? 'sold-out' : ''}`;
        
        productCard.innerHTML = `
            <div class="product-img-container">
                <img src="${product.image}" alt="${product.name}" class="product-img">
                <div class="product-actions">
                    <button class="action-btn quick-view" data-id="${product.id}">
                        <i class="fas fa-eye"></i>
                   
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <div class="product-price-container">
                    <span class="product-price">Bs ${product.price.toFixed(2)}</span>
                    
                </div>
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
        
        // Agregar evento para vista rápida
        const quickViewBtn = productCard.querySelector('.quick-view');
        quickViewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openProductModal(product);
        });
        
     
        
        productsContainer.appendChild(productCard);
    });
}

// Abrir modal con detalles del producto
function openProductModal(product) {
    // Actualizar imagen principal
    modalImg.src = product.image;
    
    // Actualizar información del producto
    modalTitle.textContent = product.name;
    modalCategory.innerHTML = `<i class="fas fa-tag"></i> Categoría: ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}`;
    modalDescription.textContent = product.description;
    
// Actualizar precio
modalPrice.innerHTML = `<span class="modal-price">Bs ${product.price.toFixed(2)}</span>`;
    
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
        modalBuyBtn.style.background = '';
        modalBuyBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Comprar por WhatsApp';
        modalBuyBtn.onclick = () => initiatePurchase(product);
    } else {
        modalBuyBtn.disabled = true;
        modalBuyBtn.style.background = '#ccc';
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
    
      // Crear mensaje para WhatsApp mejorado
    const message = `¡Hola! 👋 Me contacto desde la página web de *Bluescorp* 🛍️

*📋 DETALLES DEL PRODUCTO:*
👟 *Modelo:* ${product.name}
📏 *Talla seleccionada:* ${selectedSize}
💰 *Precio:* Bs ${product.price.toFixed(2)}
🏷️ *Categoría:* ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}


*👤 MIS DATOS (completar):*
📞 *Nombre completo:* __________
📋 *Ciudad:* __________

Quedo atento a su respuesta para coordinar la compra. 
¡Muchas gracias! 😊

`;
    
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp de la tienda
    const phoneNumber = "59163023599";
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Cerrar modal
    modal.style.display = 'none';
    resetSelections();
}


// Agregar animaciones CSS dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    .no-products {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        color: var(--secondary-color);
    }
    
    .no-products i {
        margin-bottom: 20px;
        color: var(--primary-color);
    }
    
    .no-products h3 {
        margin-bottom: 10px;
        color: var(--dark-color);
    }
`;
document.head.appendChild(style);