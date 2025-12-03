
const productsData = {
    1: {
        title: "Ramo Sol y Dulzura",
        price: "$20.00 (Solo ramo) / $25.00 (Con Ferrero)",
        description: "Hermoso arreglo. Opciones:\n• Solo el ramo: $20\n• Con caja de chocolates Ferrero Rocher: $25\nUn perfecto regalo para alegrar el alma con un toque dulce.",
        images: ["assets/Arreglos-con-chocolates.png"]
    },
    2: {
        title: "Buchón Reina Eterna",
        price: "$40.00 (Con Corona +$5)",
        description: "Impactante ramo buchón de rosas rojas frescas. \n\nPrecios:\n• Ramo Buchón: $40\n• Adicional Corona de Reina: +$5\n\nDiseñado para quien se merece un trato real.",
        images: ["assets/buchon1.png"]
    },
    3: {
        title: "Box Fiesta Sorpresa",
        price: "$22.00",
        description: "Detalle económico y completo. Incluye globo personalizado, snacks variados y decoración festiva en caja. Ideal para cumpleaños de amigos o familiares.",
        images: ["assets/cumple.png"]
    },
    4: {
        title: "Mega Ramo Ensueño",
        price: "$45.00",
        description: "Un ramo gigante que impresiona. Combinación de lirios aromáticos y rosas seleccionadas. Volumen y elegancia en un solo regalo. Perfecto para aniversarios o reconciliaciones.",
        images: ["assets/grande2.png"]
    },
    5: {
        title: "Caja Majestad 100 Rosas",
        price: "$60.00 (Incluye Corona)",
        description: "Lujo total. Caja con 100 rosas rojas compactas y frescas, coronada con una tiara brillante. El regalo definitivo para declarar amor eterno.",
        images: ["assets/buchon2.png"]
    },
    6: {
        title: "Ramo Perlas de Pasión",
        price: "$20.00",
        description: "Delicado y romántico. Ramo de rosas rojas decorado con finas perlitas brillantes en cada flor. Un detalle clásico con un toque de distinción.",
        images: ["assets/rojos-blancas-corona.png"]
    },
    7: {
        title: "Ramo Feliz Día",
        price: "$20.00 (Antes $25)",
        description: "¡20% OFF! Contiene rosas, lirios, gypsophila, papel rosa, un lazo, tallos hidratados y una tarjeta decorativa.",
        images: ["assets/lirios-nuevo.png"]
    },
    8: {
        title: "Bouquet Rayos de Sol",
        price: "$7.00 (Antes $9)",
        description: "¡20% OFF! Vibrante arreglo de girasoles frescos con follaje verde y 'Baby's Breath'. Incluye tarjeta personalizada y un pequeño snack de cortesía. Un perfecto regalo para alegrar el día a esa persona especial.",
        images: ["assets/girasoles1.png"]
    },
    9: {
        title: "Ramo de flores con oso de peluche",
        price: "$45.00 (Antes $60)",
        description: "¡25% OFF!  Rosas en tonos pastel con nube rosada y peluche Lotso gigante con corona. Ideal para cumpleaños, baby showers o sorprender a quien más quieres.",
        images: ["assets/flores-oso.png"]
    },
    10: {
        title: "Ramo 100 rosas",
        price: "$43.00 (Antes $45)",
        description: "¡20% OFF! Ramo de 100 rosas premium, cuidadosamente armadas y sujetas con una cinta fina. Un regalo imponente, romántico y perfecto para sorprender de verdad.",
        images: ["assets/arreglo-rosas.png"]
    },
};
// VARIABLES GLOBALES
let currentProduct = null;
let currentImageIndex = 0;
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const modalWhatsapp = document.getElementById("modal-whatsapp");

// FUNCIÓN PARA ABRIR MODAL
function openModal(productId) {
    const product = productsData[productId];
    
    if (product) {
        currentProduct = product;
        currentImageIndex = 0;

        // Llenar datos en el HTML
        modalTitle.innerText = product.title;
        modalPrice.innerText = product.price;
        modalDesc.innerText = product.description;
        modalImg.src = product.images[0];
        
        // ACTUALIZADO: Tu número real de WhatsApp
        // Nota: 593 es Ecuador, quitamos el '0' inicial de tu celular
        const mensaje = `Hola Amaría, estoy interesado en el ${product.title} que vi en la web.`;
        modalWhatsapp.href = `https://wa.me/593963087611?text=${encodeURIComponent(mensaje)}`;

        // Mostrar modal
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

// FUNCIÓN PARA CERRAR MODAL
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// FUNCIÓN CARRUSEL (CAMBIAR FOTO)
function changeImage(direction) {
    if (!currentProduct) return;

    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = currentProduct.images.length - 1;
    } else if (currentImageIndex >= currentProduct.images.length) {
        currentImageIndex = 0;
    }

    modalImg.src = currentProduct.images[currentImageIndex];
}

// CERRAR MODAL SI SE DA CLICK AFUERA
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// --- LÓGICA DE OFERTAS Y CONTADOR ---

// Configuración: 30 minutos (1800 segundos)
let time = 1800; 

const countMins = document.getElementById('mins');
const countSecs = document.getElementById('secs');

setInterval(() => {
    // Calcular minutos y segundos
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Agregar ceros estéticos
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Actualizar el HTML si existen los elementos
    if(countMins) countMins.innerText = minutes;
    if(countSecs) countSecs.innerText = seconds;

    // Lógica del tiempo
    if (time > 0) {
        time--;
    } else {
        // Cuando llega a 0, se reinicia automáticamente (Bucle Infinito)
        time = 1800; 
    }
}, 1000);
Object.assign(productsData, {
    11: {
        title: "Ramo Sueño Lila",
        price: "$20.00",
        description: "Un arreglo floral de lujo con rosas rosadas y lilas acompañado de flores lavanda, envuelto en tonos pastel que realzan su delicadeza. Un detalle perfecto para expresar amor, admiración o celebrar un momento especial.",
        images: ["assets/pulpo-flores.png"]
    },
    12: {
        title: "Bouquet Luz de Amor",
        price: "$45.00",
        description: "Impactante bouquet redondo con un girasol central rodeado de rosas fucsias y lirios blancos aromáticos. Contrastes vibrantes que enamoran. Incluye tarjeta dedicatoria. Un perfecto regalo para declarar amor con energía y pasión.",
        images: ["assets/flores-blancas-girasol.png"]
    },
    13: {
        title: "Ramo Feliz Día Princesa",
        price: "$25.00",
        description: "Rosas rojas y rosadas de alta calidad, decoradas con una corona dorada, mariposa brillante y cinta con la frase 'Feliz Cumpleaños'. Incluye perlas decorativas y tarjeta. Un perfecto regalo para hacerla sentir como una reina en su día.",
        images: ["assets/flores-cumple.png"]
    },
    14: {
        title: "Bouquet Fantasía Pastel",
        price: "$30.00",
        description: "Voluminoso arreglo en tonos suaves con rosas color durazno y rosado, envuelto en papel coreano celeste con detalles dorados y mariposas. Incluye lazo decorativo. Un perfecto regalo para quinceañeras o personalidades dulces.",
        images: ["assets/grande.png"]
    },
    15: {
        title: "Box Jardín Secreto",
        price: "$25.00",
        description: "Encantador arreglo en caja tipo bolso color rosa con la frase 'Fresh Flower'. Contiene lirios, rosas, claveles y follaje verde fresco. Diseño portátil y chic. Un perfecto regalo para alegrar la oficina o el hogar.",
        images: ["assets/lirios-caja.png"]
    },
    16: {
        title: "Cilindro Amor Puro",
        price: "$50.00",
        description: "Lujo total. Caja cilíndrica blanca premium con rosas en degradé rosa y blanco, coronadas por una hortensia blanca y un lirio. Decorado con mariposas doradas. Un perfecto regalo para aniversarios elegantes y sofisticados.",
        images: ["assets/Jarros-flores.png"]
    },
    17: {
        title: "Ramo Amor a Primera Vista",
        price: "$20.00",
        description: "Intenso bouquet de rosas rojas compactas con dos girasoles vibrantes en el centro. Envuelto en papel con mensaje 'Love at first sight'. Incluye tarjeta. Un perfecto regalo para reconquistar o celebrar el amor apasionado.",
        images: ["assets/love.png"]
    },
    18: {
        title: "Set Te Amo con Chocolates",
        price: "$30.00",
        description: "El detalle definitivo. Arreglo en forma de letras 'I ❤️ U' rellenas de rosas rojas frescas. Incluye una caja de chocolates Ferrero Rocher dorada y mariposa decorativa. Un perfecto regalo para pedir matrimonio o aniversarios importantes.",
        images: ["assets/love1.png"]
    },
    19: {
        title: "Mega Bouquet Sol Radiante",
        price: "$40.00",
        description: "Alegría en su máxima expresión. Gran ramo mixto con múltiples girasoles y rosas blancas y rosadas. Envuelto en papel rosa suave. Transmite energía positiva. Un perfecto regalo para graduaciones o cumpleaños.",
        images: ["assets/pelota-flores.png"]
    },
    20: {
        title: "Ramo Doctora Favorita",
        price: "$17.00",
        description: "Un diseño exclusivo en tonos lila y crema. Incluye una hermosa mariposa dorada y una cinta personalizada con la frase 'Te quiero mi doctora favorita'. Acompañado de tarjeta dedicatoria. Un perfecto regalo para graduaciones, día del médico o agradecer a esa profesional especial.",
        images: ["assets/doc-arreglos.png"]
    },
    21: {
        title: "Bouquet Dulzura Rosa",
        price: "$17.00",
        description: "Combinación delicada de lirios rosados a punto de abrir y rosas en tonos pastel, decorado con gipsófila (lluvia de estrellas). Incluye tarjeta personalizada. Un perfecto regalo para cumpleaños o aniversarios delicados.",
        images: ["assets/blancas-rosadas.png"]
    },
    22: {
        title: "Ramo Encanto Lila",
        price: "$15.00",
        description: "Una explosión de texturas con gerberas blancas, rosas pálidas y espuelas de caballero en tonos lila. Envuelto en papel coreano de lujo. Un perfecto regalo para demostrar admiración y amistad sincera.",
        images: ["assets/blancas-rosadas-moradas.png"]
    },
    23: {
        title: "Florero Elegancia Pura",
        price: "$22.00",
        description: "Arreglo premium en base de vidrio. Contiene lirios blancos, rosas rosadas, claveles y follaje fino. Diseño alto y sofisticado. Un perfecto regalo para decorar el hogar o impresionar en una fecha importante.",
        images: ["assets/blancas-rosadas-negras.png"]
    },
    24: {
        title: "Bag Fresh Flowers",
        price: "$8.00",
        description: "Tendencia moderna: arreglo floral dentro de un bolso rosa 'Fresh Flower'. Compacto y chic con rosas y claveles. Incluye tarjeta. Un perfecto regalo para un detalle espontáneo o 'me gustas'.",
        images: ["assets/bolso-flores.png"]
    },
    25: {
        title: "Bouquet Simpatía",
        price: "$7.00",
        description: "Detalle dulce y económico. Protagonizado por una gran gerbera rosa y rosas pastel, envuelto en estilo cono. Un perfecto regalo para alegrar el día sin necesidad de una ocasión especial.",
        images: ["assets/bonito.png"]
    },
    26: {
        title: "Ramo Luz de Luna",
        price: "$10.00",
        description: "Sofisticación en blanco y crema. Rosas, crisantemos y una mariposa dorada brillante. Transmite paz y elegancia. Un perfecto regalo para reconciliaciones o gestos de paz.",
        images: ["assets/bonito1.png"]
    },
    27: {
        title: "Ramo Amor de Cumpleaños",
        price: "$35.00",
        description: "Romance total. Rosas bicolores (fucsia/blanco) decoradas con cintas que dicen 'Happy Birthday' y 'I Love You'. Incluye tarjeta. Un perfecto regalo para celebrar el cumpleaños de tu pareja.",
        images: ["assets/cumpleaños-romatico.png"]
    },
    28: {
        title: "Ramo Círculo de Amor",
        price: "$20.00",
        description: "Diseño redondo y armonioso. Gerbera blanca central rodeada de claveles rosados, rosas blancas y nube. Un perfecto regalo para el día de la madre o una amiga querida.",
        images: ["assets/flor-centro.png"]
    },
    29: {
        title: "Florero Alegría Naranja",
        price: "$15 las Flores y $10 el florero ",
        description: "Vibrante y lleno de energía. Gerberas naranjas y rosas color durazno en florero de vidrio, con detalle de mariposa. Un perfecto regalo para desear éxito y felicidad.",
        images: ["assets/florero.png"]
    },
    30: {
        title: "Ramo Amor Bicolor",
        price: "$10.00",
        description: "Contraste romántico de rosas rojas intensas y crisantemos blancos frescos. Envuelto en papel blanco elegante con lazo rojo. Incluye tarjeta con mensaje. Un perfecto regalo para aniversarios o declarar amor sincero.",
        images: ["assets/rojas-blancas.png"]
    },
    31: {
        title: "Box La Mejor Doctora",
        price: "$25.00",
        description: "Elegante caja negra cilíndrica con rosas fucsias y flores blancas. Destaca su globo burbuja personalizado con confeti y la frase dorada 'La mejor Doc'. Incluye tarjeta. Un perfecto regalo para graduaciones de medicina o día del médico.",
        images: ["assets/rosa-con-globo.png"]
    },
    32: {
        title: "Bouquet Dulzura Pastel",
        price: "$12.00",
        description: "Una mezcla suave y tierna de rosas crema, claveles rosados y gerberas durazno. Follaje eucalipto para aroma fresco. Incluye tarjeta dedicatoria. Un perfecto regalo para cumpleaños o celebrar una amistad.",
        images: ["assets/Rosas-blanca-centro.png", "assets/Rosas-blanca-centro-1.png", "assets/Rosas-blanca-centro-2.png"]
    },
    33: {
        title: "Ramo Sueño de Mariposas",
        price: "$33.00",
        description: "Volumen y delicadeza. Gran ramo de 75 rosas en tonos pastel (blanco, rosa, lila) decorado con mariposas doradas 3D. Papel coreano bicolor. Un perfecto regalo para quinceañeras o personas soñadoras.",
        images: ["assets/rosas-blancas-rosas.png"]
    },
    34: {
        title: "Ramo Fantasía Fucsia",
        price: "10.00",
        description: "Vibrante y lleno de energía. Rosas fucsias y rosadas, Decorado con mariposas doradas en papel rosa. Un perfecto regalo para mujeres alegres y modernas.",
        images: ["assets/rosas-rosadas.png"]
    },
    35: {
        title: "Bouquet Jardín Primaveral",
        price: "$50.00",
        description: "Explosión de colores y formas. Lirios amarillos abiertos, rosas fucsias y blancas, y claveles. Aroma intenso y fresco. Incluye tarjeta. Un perfecto regalo para el día de la madre o alegrar un hogar.",
        images: ["assets/variedad.png"]
    },
    36: {
        title: "Ramo Pasión Elegante",
        price: "$22.00",
        description: "Lujo absoluto. Rosas rojas de exportación rodeadas de 'Baby's Breath', envueltas en papel negro premium con letras doradas. Detalles de mariposas de oro. Un perfecto regalo para propuestas de matrimonio o amor profundo.",
        images: ["assets/variedad1.png"]
    },
    37: {
        title: "Ramo Encanto Natural",
        price: "$15.00",
        description: "Diseño vertical y silvestre. Combina rosas rosadas con 'Perritos' (Antirrhinum) y crisantemos blancos. Decorado con mariposa dorada. Un perfecto regalo para agradecer o sorprender sin motivo.",
        images: ["assets/variedad2.png"]
    }
});
function filterByPrice(range) {
    const grid = document.querySelector('.product-grid');
    // Convertimos la lista de productos en un Array real para poder ordenarlo
    const products = Array.from(document.querySelectorAll('.product-card'));
    const btns = document.querySelectorAll('.price-btn');

    // 1. Efecto visual en los botones
    btns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. ORDENAR primero (Del más caro al más barato)
    // Esto asegura que siempre veas las opciones de mayor valor primero
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.price').innerText.replace('$', '').split(' ')[0]);
        const priceB = parseFloat(b.querySelector('.price').innerText.replace('$', '').split(' ')[0]);
        return priceB - priceA; // Orden descendente
    });

    // 3. FILTRAR y Re-organizar en la pantalla
    products.forEach(product => {
        // Leemos el precio
        const priceText = product.querySelector('.price').innerText;
        const price = parseFloat(priceText.replace('$', '').split(' ')[0]);

        let show = false;

        // Lógica de tus rangos psicológicos
        if (range === 'all') {
            show = true;
        } else if (range === 'low') {
            if (price <= 20) show = true;        // Detalles Económicos
        } else if (range === 'mid') {
            if (price > 20 && price <= 35) show = true; // El Regalo Ideal
        } else if (range === 'high') {
            if (price > 35) show = true;         // Premium
        }

        // Aplicar visibilidad
        if (show) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }

        // TRUCO TÉCNICO: Re-insertamos el producto en la grilla.
        // Al hacerlo en este orden (ya ordenados por precio), el navegador los pinta de caro a barato.
        grid.appendChild(product);
    });
}
// --- LÓGICA DE FILTRADO POR PRECIO (CORREGIDA: 3 NIVELES) ---
// --- LÓGICA DE FILTRADO + ORDEN ASCENDENTE (Barato -> Caro) ---
function filterByPrice(range) {
    // 1. Seleccionamos el contenedor y los productos
    const grid = document.querySelector('.product-grid');
    // Convertimos la lista de productos en un Array real para poder ordenarlo
    const products = Array.from(document.querySelectorAll('.product-card'));
    const priceBtns = document.querySelectorAll('.price-btn');
    
    // Si no estamos en la página del catálogo, salimos
    if(priceBtns.length === 0) return;

    // 2. Efecto visual en los botones
    priceBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 3. ORDENAR LOS PRODUCTOS (De Menor a Mayor Precio)
    products.sort((a, b) => {
        // Extraemos el número del precio de la tarjeta A y la tarjeta B
        // Quitamos "Desde " y el "$" para que quede solo el número (ej: 20.00)
        const priceA = parseFloat(a.querySelector('.price').innerText.replace('Desde ', '').replace('$', '').split(' ')[0]);
        const priceB = parseFloat(b.querySelector('.price').innerText.replace('Desde ', '').replace('$', '').split(' ')[0]);
        
        // La resta (A - B) ordena de menor a mayor
        return priceA - priceB; 
    });

    // 4. FILTRAR Y RE-INSERTAR EN EL DOM
    products.forEach(product => {
        const priceText = product.querySelector('.price').innerText; 
        const price = parseFloat(priceText.replace('Desde ', '').replace('$', '').split(' ')[0]);

        let show = false;

        // Lógica de rangos
        if (range === 'all') {
            show = true;
        } else if (range === 'low') {
            // Hasta $20
            if (price <= 20) show = true;
        } else if (range === 'mid') {
            // De $21 a $35
            if (price > 20 && price <= 35) show = true;
        } else if (range === 'high') {
            // Más de $35
            if (price > 35) show = true;
        }

        // Mostrar u Ocultar
        if (show) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none'; 
        }

        // TRUCO: Volvemos a meter el producto en la cuadrícula.
        // Como ya los ordenamos en el paso 3, al insertarlos se acomodan visualmente del más barato al más caro.
        grid.appendChild(product);
    });
}
// --- MENÚ HAMBURGUESA ---
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}
