// Primera pre entrega

// Algoritmo condicional

let QuiereDescuento = confirm("Bienvenid@ a Ana Random Store! Querés suscribirte y recibir 10% de descuento en tu primera compra?")

if (QuiereDescuento) {
    mail = prompt("Ingresa tu email:")
}

// Ciclo

let decision = confirm("Ya decidiste que colección querés ver?")

if (decision) {
    coleccion = prompt("Cuál de nuestras colecciones querés ver primero? flamingo, crocodile, dinosaur, watermelon o orange?")
}

let listaColecciones = ""

while (decision) {

    switch (coleccion) {
        case "flamingo":
            listaColecciones += "flamingo, "
            break;
        case "crocodile":
            listaColecciones += "crocodile, "
            break;
        case "dinosaur":
            listaColecciones += "dinosaur, "
            break;
        case "watermelon":
            listaColecciones += "watermelon, "
            break;
        case "orange":
            listaColecciones += "watermelon, "
            break;
        default:
            alert("La colección ingresada no existe")
    }

    decision = confirm("Querés ver otra colección?");
    if (decision) {
        coleccion = prompt("Cuál colección querés ver después? flamingo, crocodile, dinosaur, watermelon o orange?")
    }


}

if (listaColecciones !="") {
    mensaje = alert("Se te mostrarán los artículos de las siguientes colecciones: " + listaColecciones)
}
