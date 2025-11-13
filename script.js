// Base de datos de productos ACTUALIZADA con más datos y variantes
const products = [
    {
        id: 1,
        name: "NIKE AIR MAX DAWN",
        category: "unisex",
        price: 220,
        image: "images/NIKE AIR MAX DAWN.jpg",
        images: ["images/mlb37-5.jpg", "images/mlb37-5-2.jpg", "images/mlb37-5-3.jpg"],
        description: "Color negro y blanco",
        sizes: [37, 38 ],
        colors: ["#1e3a8a", "#000000", "#8b0000"],
        available: true,
        badge: "new",
        features: ["Material premium", "Suela de goma", "Amortiguación", "Estilo urbano"],
        stock: 15
    },
    {
        id: 2,
        name: "MLB Chunky Liner High LA Dodgers Blue",
        category: "unisex",
        price: 200,
        image: "images/MLB Chunky.jpg",
        images: ["images/nike37-5.jpg", "images/nike37-5-2.jpg", "images/nike37-5-3.jpg"],
        description: "Modelo unisex de la marca MLB. Tienen un diseño de zapatillas de caña alta con suela gruesa o 'chunky'. Están fabricadas con cuero sintético y suela de goma. El diseño está inspirado en la asociación de béisbol MLB. El logo de 'LA' en el lateral hace referencia a los Dodgers de Los Ángeles.",
        sizes: [38],
        colors: ["#e11d48", "#000000", "#1e40af"],
        available: true,
       
        features: ["Tecnología Air Max", "Amortiguación visible", "Material transpirable", "Diseño moderno"],
        stock: 8
    },
  {
        id: 3,
        name: "BAD BUNNY",
        category: "mujer",
        price: 220,
        image: "images/BAD BUNNY.jpg",
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60"],
        description: ".",
        sizes: [37.5],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Tecnología Boost", "Primeknit upper", "Perfecto para running"],
        stock: 12
    },
    {
        id: 4,
        name: "Nike vista Lite Deportivo",
        category: "hombre",
        price: 180,
        image: "images/Nike vista Lite Deportivo.jpg",
        images: ["https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=500&auto=format&fit=crop&q=60"],
        description: ".",
        sizes: [37],
        colors: ["#f59e0b", "#000000"],
        available: true,
        features: ["Diseño futurista", "Suela RS-X", "Estilo único"],
        stock: 10
    },
    {
        id: 5,
        name: "adidas neo Play9tis ",
        category: "unisex",
        price: 220,
        image: "images/adidas neo.jpg",
        images: ["https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=500&auto=format&fit=crop&q=60"],
        description: "Este es un calzado deportivo adidas neo Play9tis 2.0",
        sizes: [39],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Diseño clásico", "Versátil", "Icono cultural"],
        stock: 20
    },
    {
        id: 6,
        name: "Nike Dunk Low",
        category: "unisex",
        price: 220,
        image: "images/Nike Dunk Low.jpg",
        images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60"],
        description: "Este es un par de tenis Nike Dunk Low en color verde clorofila.",
        sizes: [37],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Suela UltraCush HD", "Franja lateral icónica", "Duradero"],
        stock: 14
    },
    {
        id: 7,
        name: "running Adidas Fluidcloud Neutral",
        category: "unisex",
        price: 190,
        image: "images/running Adidas Fluidcloud.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Este es un zapato de running Adidas Fluidcloud Neutral de color negro. ",
        sizes: [38],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Tecnología Floatride", "Estabilidad superior", "Flexibilidad"],
        stock: 7
    },
    {
        id: 8,
        name: "Nike Air Force 1 '07",
        category: "unisex",
        price: 150,
        image: "images/Nike Air Force.jpg",
        images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60"],
        description: "New Balance 574 con diseño clásico y comodidad excepcional para el día a día.",
        sizes: [36],
        colors: ["#1e40af", "#000000"],
        available: true,
        features: ["Diseño heritage", "Comodidad excepcional", "Tecnología ENCAP"],
        stock: 18
    },

    {
        id: 10,
        name: "Nike Air Force 1 '07",
        category: "unisex",
        price: 200,
        image: "images/Nike Air Force.jpg",
        images: ["https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60"],
        description: "Nike Dunk Low, perfectas para skateboarding y estilo urbano casual.",
        sizes: [37],
        colors: ["#000000", "#ffffff", "#dc2626"],
        available: true,
        features: ["Perfecto para skate", "Diseño versátil", "Comodidad"],
        stock: 11
    },
    {
        id: 11,
        name: "Adidas Forum Powerphase Bad Bunny 'Benito'",
        category: "unisex",
        price: 220,
        image: "images/Adidas Forum Powerphase.jpg",
        images: ["https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=500&auto=format&fit=crop&q=60"],
        description: "Estas son las zapatillas Adidas Forum Powerphase Bad Bunny 'Benito', una colaboración entre Bad Bunny y Adidas que fusiona elementos de los modelos Forum y Powerphase.",
        sizes: [37],
        colors: ["#ffffff", "#000000"],
        available: true,
        features: ["Puntera de caparazón", "Diseño clásico", "Versátil"],
        stock: 16
    },
    {
        id: 12,
        name: "Nike Court Vision Low",
        category: "unisex",
        price: 350,
        image: "images/Nike Court Vision.jpg",
        images: ["https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=500&auto=format&fit=crop&q=60"],
        description: "Este es un par de zapatillas Nike Court Vision Low.",
        sizes: [45],
        colors: ["#ffffff", "#000000"],
        available: true,
        features: ["Amortiguación Air", "Diseño clásico", "Versátil"],
        stock: 13
    },
    {
        id: 13,
        name: "BOSTON",
        category: "mujer",
        price: 220,
        image: "images/BOSTON.jpg",
        images: ["https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=500&auto=format&fit=crop&q=60"],
        description: "Estas son zapatillas de deporte blancas con la palabra BOSTON en rojo",
        sizes: [37],
        colors: ["#ffffff", "#f472b6"],
        available: true,
        features: ["Estilo vintage", "Comodidad moderna", "Diseño femenino"],
        stock: 8
    },
 
    {
        id: 15,
        name: "ASICS Metaspeed Sky",
        category: "hombre",
        price: 380,
        image: "images/ASICS.jpg",
        images: ["https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=500&auto=format&fit=crop&q=60"],
        description: "calzado de competición ASICS Metaspeed Sky Paris en color menta/negro. ",
        sizes: [41],
        colors: ["#1e40af", "#000000"],
        available: true,
        features: ["Tecnología Gel", "Estabilidad superior", "Para running"],
        stock: 7
    },
    {
        id: 16,
        name: "Puma Suede Archive Remastered",
        category: "hombre",
        price: 230,
        image: "images/Puma Suede.jpg",
        images: ["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60"],
        description: "tenis Puma Suede Archive Remastered para hombre en color negro y verde. ",
        sizes: [40],
        colors: ["#000000", "#0ea5e9"],
        available: true,
        features: ["Tecnología HOVR", "Devolución de energía", "Transpirable"],
        stock: 9
    },
    {
        id: 17,
        name: "MLB Chunky Runner",
        category: "hombre",
        price: 320,
        image: "images/MLB Chunky Runner.jpg",
        images: ["https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=500&auto=format&fit=crop&q=60"],
        description: "calzado deportivo MLB Chunky Runner de los New York Yankees en color blanco y negro.",
        sizes: [43],
        colors: ["#ffffff", "#000000"],
        available: true,
        features: ["Estilo retro", "Suela gruesa", "Look urbano"],
        stock: 12
    },
    {
        id: 18,
        name: "Nike Journey Run",
        category: "hombre",
        price: 300,
        image: "images/running Nike Journey.jpg",
        images: ["https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop&q=60"],
        description: "zapatillas de running Nike Journey Run.",
        sizes: [43],
        colors: ["#000000", "#ffffff"],
        available: true,
        features: ["Diseño vanguardista", "Alta calidad", "Estilo exclusivo"],
        stock: 5
    },
    {
        id: 19,
        name: "Nike Air Jordan",
        category: "hombre",
        price: 350,
        image: "images/Nike Air Jordan.jpg",
        images: ["https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&auto=format&fit=crop&q=60"],
        description: "calzado Nike Air Jordan 1 Mid SE White Ice Blue, lanzado en 2023, que presenta una combinación de colores blanco, azul hielo y negro con una suela exterior translúcida. ",
        sizes: [45],
        colors: ["#f59e0b", "#000000"],
        available: true,
        features: ["Cuero premium", "Resistente al agua", "Durabilidad"],
        stock: 8
    },
    {
        id: 20,
        name: "Adidas Niteball",
        category: "hombre",
        price: 220,
        image: "images/Adidas Nitebal.jpg",
        images: ["https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&auto=format&fit=crop&q=60"],
        description: "zapatilla Adidas Niteball en color rojo.",
        sizes: [43,44],
        colors: ["#000000", "#dc2626"],
        available: true,
        features: ["Icono cultural", "Suela air-cushioned", "Duraderas"],
        stock: 6
    },
    {
        id: 21,
        name: " Nike Court Borough Low 2",
        category: "hombre",
        price: 130,
        image: "images/Nike Court Borough.jpg",
        images: ["https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&auto=format&fit=crop&q=60"],
        description: "Este modelo combina comodidad y estilo con un diseño retro inspirado en el baloncesto. Tiene una parte superior de cuero para un ajuste estructurado y duradero. La suela de goma con ranuras flexibles se dobla con el pie, lo que lo hace ideal para el uso diario. El diseño es versátil y se puede combinar con diferentes atuendos",
        sizes: [36],
        colors: ["#e11d48", "#000000"],
        available: true,
        features: ["Tecnología React", "Reduce lesiones", "Alta estabilidad"],
        stock: 10
    },
    {
        id: 22,
        name: "Off-White x Air Jordan 4 ",
        category: "hombre",
        price: 320,
        image: "images/Off-White.jpg",
        images: ["https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=60"],
        description: "Las zapatillas de la imagen son las Off-White x Air Jordan 4 Sail. Esta colaboración entre la marca de moda de Virgil Abloh, Off-White, y Jordan Brand, es un modelo altamente deseable lanzado en 2020.",
        sizes: [42],
        colors: ["#000000", "#0ea5e9", "#ffffff"],
        available: true,
        features: ["Estilo urbano", "Tecnología Boost", "Confort superior"],
        stock: 14
    },
    {
        id: 23,
        name: "Nike KD Trey 5 VIII",
        category: "hombre",
        price: 320,
        image: "images/Nike KD.jpg",
        images: ["https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=500&auto=format&fit=crop&q=60"],
        description: "Las zapatillas de la imagen son el modelo Nike KD Trey 5 VIII (Octava versión). Son parte de la línea económica de zapatillas de baloncesto de Kevin Durant, conocidas por su amortiguación de espuma sensible y tracción multidireccional.",
        sizes: [43],
        colors: ["#ffffff", "#000000"],
        available: true,
        features: ["Artesanía USA", "Comodidad premium", "Durabilidad"],
        stock: 7
    },
    {
        id: 24,
        name: "Air Jordan 1 High Zoom Air CMFT Pumpkin Spice",
        category: "unisex",
        price: 320,
        image: "images/Air Jordan 1 High.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Esta edición presenta una paleta de colores otoñales que incluye tonos beige (ante), negro y un llamativo naranja calabaza, que se hace fuerte en el tobillo y la suela.",
        sizes: [40],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
     {
        id: 25,
        name: "Asics Metaspeed Sky",
        category: "hombre",
        price: 380,
        image: "images/Asics Metaspeed.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Asics Metaspeed Sky Paris. Este modelo está diseñado para corredores de zancada que buscan maximizar su velocidad en competiciones, como maratones, y ahorrar energía durante la carrera.",
        sizes: [40],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
     {
        id: 26,
        name: "Asics Metaspeed",
        category: "hombre",
        price: 380,
        image: "images/Asics-me.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Las zapatillas de la imagen son las Asics Metaspeed Sky Paris. Este modelo está diseñado para corredores de zancada que buscan maximizar su velocidad en competiciones, como maratones, y ahorrar energía durante la carrera.",
        sizes: [44],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
     {
        id: 27,
        name: "Adidas Ultraboost",
        category: "hombre",
        price: 280,
        image: "images/Adidas Ultraboost.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Pertenecen a la línea Ultraboost, y por la apariencia robusta de la mediasuela y el diseño de la jaula.",
        sizes: [40],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
     {
        id: 28,
        name: "Nike SB Dunk Low Otomo Katsuhiro",
        category: "unisex",
        price: 220,
        image: "images/Nike SB.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "El diseño presenta paneles en tonos beige claro o Light Orewood Brown, con superposiciones blancas y el icónico Swoosh de Nike en un marrón oscuro.",
        sizes: [36],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
     {
        id: 29,
        name: "Adidas Adifom SLTN",
        category: "unisex",
        price: 280,
        image: "images/Adidas Adifom.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Estas zapatillas están diseñadas para ofrecer una gran comodidad, con bolsillos de espuma en el forro y en la parte superior que envuelven los pies.",
        sizes: [39],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
     {
        id: 30,
        name: "Nike Air Max 720",
        category: "unisex",
        price: 250,
        image: "images/Nike Air Max.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Las zapatillas son unas Nike Air Max 720. El color específico parece ser el Light Soft Pink/Gym Red/Coral Stardust o similar, un colorway diseñado para mujer.",
        sizes: [39],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
     {
        id: 31,
        name: "Adidas Hard Court Hi",
        category: "hombre",
        price: 150,
        image: "images/Adidas Hard.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Esta es una zapatilla Adidas Hard Court Hi de caña alta en color blanco con detalles en negro y dorado.",
        sizes: [38],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
     {
        id: 32,
        name: "Nike Epic React Flyknit 2",
        category: "mujer",
        price: 180,
        image: "images/Nike Epic.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Nike Epic React Flyknit 2. Este modelo de zapatilla de running es conocido por su amortiguación suave y reactiva, diseñada para ofrecer comodidad durante el entrenamiento diario.",
        sizes: [38],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
    {
        id: 33,
        name: "Adidas Yeezy 500",
        category: "hombre",
        price: 220,
        image: "images/Adidas Yeezy 500.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Adidas Yeezy 500. Este modelo es conocido por su diseño robusto, o chunky, y su combinación de materiales.",
        sizes: [38],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
    {
        id: 34,
        name: "Nike Dunk Low SE 85",
        category: "unisex",
        price: 200,
        image: "images/Nike Dunk Low SE.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Nike Dunk Low SE 85 Neptune Green.",
        sizes: [36],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
    {
        id: 35,
        name: "Nike Air Max Correlate",
        category: "hombre",
        price: 180,
        image: "images/Correlate.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Modelo Nike Air Max Correlate. Este calzado presenta un estilo retro con una parte superior multitexturizada y la unidad Max Air visible en la entresuela",
        sizes: [38],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
    {
        id: 36,
        name: "Air Jordan 1 Retro High OG",
        category: "unisex",
        price: 200,
        image: "images/High.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Modelo Air Jordan 1 Retro High OG Atmosphere (también conocido como Bubble Gum).",
        sizes: [40],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
        {
        id: 37,
        name: "Air Jordan 1 Retro High OG",
        category: "unisex",
        price: 300,
        image: "images/High.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Modelo Air Jordan 1 Retro High OG Atmosphere (también conocido como Bubble Gum).",
        sizes: [41],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
    {
        id: 38,
        name: "Nike Initiator",
        category: "hombre",
        price: 280,
        image: "images/nike-ini.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Nike Initiator en la combinación de colores blanco y negro.",
        sizes: [40],
        colors: ["#0ea5e9", "#000000"],
        available: true,
        features: ["Amortiguación suave", "Respuesta energética", "Ligeras"],
        stock: 11
    },
    {
        id: 39,
        name: "Adidas D Rose 11",
        category: "hombre",
        price: 250,
        image: "images/Adidas D.jpg",
        images: ["https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&auto=format&fit=crop&q=60"],
        description: "Modelo Adidas D Rose 11, un calzado de baloncesto característico de la línea de calzado exclusiva de Derrick Rose.",
        sizes: [40],
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
    const phoneNumber = "59175057789";
    
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