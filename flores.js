// 1. ESTRELLAS DE FONDO
const night = document.querySelector('.night');
for (let i = 0; i < 100; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    let size = Math.random() * 2; 
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's'; 
    night.appendChild(star);
}

// 2. GENERADOR DE CORAZONES FLOTANTES
const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Posición horizontal aleatoria
    heart.style.left = Math.random() * 100 + '%';
    
    // Tamaño variable
    let sizeScale = Math.random() * 0.5 + 0.8; // Entre 0.8 y 1.3
    heart.style.transform = `scale(${sizeScale}) rotate(-45deg)`;
    
    // Velocidad de subida variable
    let duration = Math.random() * 5 + 5; // Entre 5 y 10 segundos
    heart.style.animationDuration = duration + 's';
    
    heartsContainer.appendChild(heart);

    // Eliminar el corazón cuando termine de subir
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Crear un corazón nuevo cada 600ms (ajusta esto si quieres más o menos)
setInterval(createHeart, 600);


// 3. POEMA EN DOS PARTES
const textPart1 = `Pequeña de talla, pero inmensa en mi vida,
mi blanca azucena, mi paz consentida.
Caminas con gracia, de luz revestida,
y en cada paso dejas mi alma encendida.

Me pierdo en el mapa de todos tus rizos,
esos hilos rebeldes que son mis hechizos.
Me gusta tu pelo, cascada de seda,
donde mi corazón enredado se queda.`;

const textPart2 = `Tienes esa sonrisa, tan pícara y coqueta,
que escribe en mi pecho la frase completa.
Y unos ojos risueños, luceros de calma,
que bailan conmigo y me alumbran el alma.

Marelis, mi joya, mi dulce querer,
contigo el amor es volver a nacer.
Que este catorce, y la vida entera,
seas tú para siempre mi eterna primavera.`;

const col1 = document.getElementById('columna-izq');
const col2 = document.getElementById('columna-der');
let i = 0;
function typeWriter1() {
    if (i < textPart1.length) {
        col1.innerHTML += textPart1.charAt(i); i++; setTimeout(typeWriter1, 45); 
    } else { i = 0; setTimeout(typeWriter2, 600); }
}
function typeWriter2() {
    if (i < textPart2.length) {
        col2.innerHTML += textPart2.charAt(i); i++; setTimeout(typeWriter2, 45);
    }
}
setTimeout(typeWriter1, 1000);