const messages = [
"Estas Segura?",
"Realmente segurta?",
"Estas bien?",
"Por favoooor",
"!Piensalo bien!",
"Si dices que no me pondre mal :(",
"Estare muy triste :(",
"Esta bien, dejare de preguntar",
"Es broma, di si por favor! 😍",
]

let mesaggeindex = 0;

function handleNoClick(){
    const noBtn = document.querySelector(".no-btn");
    const yesBtn = document.querySelector(".yes-btn");

    //no
    noBtn.textContent = messages[mesaggeindex];
    mesaggeindex = (mesaggeindex + 1) % messages.length;

    //yes
    const currenSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const newSize = currenSize * 1.2;
    yesBtn.style.fontSize = `${newSize}px`;

    //animation
    yesBtn.style.transform = "scale(1.5)";
    yesBtn.style.transition = "transform 0.3s ease";

    //reset
    setTimeout(() => {
        yesBtn.style.transform = "scale(1)";
        yesBtn.style.transition = "transform 0.3s ease";
    }, 100);
}

function handleYesClick(){
    window.location.href = "./yes.html";
}

const boton = document.getElementById("boton");

    boton.addEventListener("click", () => {
        try {
            // Obtener dimensiones de la ventana y del botón
            const anchoVentana = window.innerWidth;
            const altoVentana = window.innerHeight;
            const anchoBoton = boton.offsetWidth;
            const altoBoton = boton.offsetHeight;

            // Calcular posición aleatoria dentro de los límites
            const nuevaX = Math.floor(Math.random() * (anchoVentana - anchoBoton));
            const nuevaY = Math.floor(Math.random() * (altoVentana - altoBoton));

            // Aplicar nueva posición
            boton.style.left = `${nuevaX}px`;
            boton.style.top = `${nuevaY}px`;
        } catch (error) {
            console.error("Error al mover el botón:", error);
        }
    }
);
