let x = document.getElementsByClassName("app")[0];
let c = document.getElementsByClassName("section_1")[0];
let y = document.getElementsByClassName("section_2")[0];
let k = document.getElementsByClassName("section_3")[0];
let z1 = document.getElementById("pedir_a");
let z2 = document.getElementById("Informacion_a");
let z3 = document.getElementById("Menu_a");
let z4 = document.getElementsByTagName("footer")[0];
let body = document.querySelector("body");
const esMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
const selectCafe = document.getElementById('cafes');
let click_cafe = document.getElementsByClassName("cafe");
let cafes = 0;

z1.addEventListener("click", () => {
    c.style.display = "none";
    y.style.display = "none";
    k.style.display = "flex";
    k.style.animation = "opacity_2 1s ease-in-out"
    body.style.background = "linear-gradient(to top, rgb(255, 178, 12), rgb(221, 123, 11))";
    z4.style.display = "flex";
    if (esMobile) {
        console.log("Es un dispositivo móvil");
    } else {
        console.log("Es una computadora");
    }
});

z2.addEventListener("click", () => {
    c.style.display = "flex";
    c.style.animation = "opacity_2 1s ease-in-out"
    k.style.display = "none";
    y.style.display = "none";
    body.style.background = "linear-gradient(to top, rgb(255, 178, 12), rgb(221, 123, 11))";
    z4.style.display = "flex";
    if (esMobile) {
        console.log("Es un dispositivo móvil");
    } else {
        console.log("Es una computadora");
    }
});

z3.addEventListener("click", () => {
    c.style.display = "none";
    k.style.display = "none";
    y.style.display = "flex";
    y.style.animation = "opacity_2 1s ease-in-out"
    if (esMobile) {
        z4.style.display = "none";
        body.style.background = "orange";
    } else {
        console.log("Es una computadora");
    }
});


selectCafe.addEventListener("change", () => {
    let img = document.getElementsByClassName("img_normal")[0];
    img.src = "static/jjj2.png";
});

function LoadMenu() {
    c.style.display = "none";
    y.style.display = "none";
    k.style.display = "flex";
    k.style.animation = "opacity_2 1s ease-in-out"
    body.style.background = "linear-gradient(to top, rgb(255, 178, 12), rgb(221, 123, 11))";
    z4.style.display = "flex";
    if (esMobile) {
        console.log("Es un dispositivo móvil");
    } else {
        console.log("Es una computadora");
    }
}

function LoadMenuSelected() {
    c.style.display = "none";
    y.style.display = "none";
    k.style.display = "flex";
    k.style.animation = "opacity_2 1s ease-in-out"
    body.style.background = "linear-gradient(to top, rgb(255, 178, 12), rgb(221, 123, 11))";
    z4.style.display = "flex";
    if (cafes == 0) {
        console.log("Café 1 seleccionado");
        selectCafe.value = "Cafe Normal"
    } else if (cafes == 1) {
        console.log("Café 2 seleccionado");
        selectCafe.value = "Cafe Cortado"
    } else if (cafes == 2) {
        console.log("Café 3 seleccionado");
        selectCafe.value = "Cafe Capuchino"
    } else if (cafes == 3) {
        console.log("Café 4 seleccionado");
        selectCafe.value = "Cafe Capuchino Con Nutella"
    } else if (cafes == 4) {
        console.log("Café 5 seleccionado");
        selectCafe.value = "Cafe Con Leche"
    } else if (cafes == 5) {
        console.log("Café 6 seleccionado");
        selectCafe.value = "Té"
    } else {
        console.log("Ningún café seleccionado");
    }
    if (esMobile) {
        console.log("Es un dispositivo móvil");
    } else {
        console.log("Es una computadora");
    }
}

function LoadMenuSelected1() {
    cafes = 0;
    LoadMenuSelected();
}

function LoadMenuSelected2() {
    cafes = 1;
    LoadMenuSelected();
}

function LoadMenuSelected3() {
    cafes = 2;
    LoadMenuSelected();
}

function LoadMenuSelected4() {
    cafes = 3;
    LoadMenuSelected();
}

function LoadMenuSelected5() {
    cafes = 4;
    LoadMenuSelected();
}

function LoadMenuSelected6() {
    cafes = 5;
    LoadMenuSelected();
}