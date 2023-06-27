// Primera pre entrega

document.addEventListener("DOMContentLoaded", () => {

    // Prueba 1: Algoritmo condicional

        let QuiereDescuento = confirm("Bienvenid@ a Ana Random Store! Querés suscribirte y recibir 10% de descuento en tu primera compra?")
    
        if (QuiereDescuento) {
            mail = prompt("Ingresa tu email:")
        }

    // Prueba 2: Ciclo + Algoritmo condicional

        let decision = confirm("Ya decidiste que colección querés ver?")
    
        if (decision) {
            coleccion = prompt("Cuál de nuestras colecciones querés ver primero? flamingo, crocodile, dinosaur, watermelon o orange?")
        }
    
        if (coleccion) {
    
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
                        listaColecciones += "orange, "
                        break;
                    default:
                        alert("La colección ingresada no existe")
                }
    
                decision = confirm("Querés ver otra colección?");
                if (decision) {
                    coleccion = prompt("Cuál colección querés ver después? flamingo, crocodile, dinosaur, watermelon o orange?")
                }
            }
    
            if (listaColecciones != "") {
                mensaje = alert("Se te mostrarán los artículos de las siguientes colecciones: " + listaColecciones)
            }
        }

    // Prueba 3: Función + Ciclo + Algoritmo condicional

    let clienteMayorista = confirm("Querés conocer cuales son nuestros descuentos por compras mayoristas?");

    while (clienteMayorista) {
        let cantidad = prompt("Qué cantidad te gustaría comprar?")
        if (cantidad) {
            let desc = descuento(cantidad);
            mensaje2 = alert(`Se aplicará ${desc} al total de tu compra`);
            clienteMayorista = confirm("Querés conocer el descuento para una cantidad diferente?")
        } else break
    }
})

function descuento(cant) {

    let numero = parseInt(cant)

    if (isNaN(numero) || numero == 0 ) {
        alert("No ingresaste un número válido")
    }
    
    let desc = ""

    if (numero > 9 && numero < 20) {
        desc = "5%"
    } else if (cant > 19) {
        desc = "10%"
    } else {
        desc = "ningún descuento"
    }

    return desc;
}