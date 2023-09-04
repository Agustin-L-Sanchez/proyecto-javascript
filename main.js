
const ListaDeUsariosingresados = []
let usuario;

do {
    let NombreDeUsuario = prompt("Ingresar un nombre");
    ListaDeUsariosingresados.push(NombreDeUsuario.toUpperCase());
    let ApellidoDeUsuario = prompt("Ingresar un apellido");
    ListaDeUsariosingresados.push(ApellidoDeUsuario.toUpperCase());
    let EdadDeUsuario = prompt("indica tu edad");
    ListaDeUsariosingresados.push(EdadDeUsuario.toUpperCase());
    let ticket = prompt("Tienes ticket?");
    ListaDeUsariosingresados.push(ticket.toUpperCase());
    console.log(ListaDeUsariosingresados)

    usuario = {
        nombre: "agustin",
        apellido: "sanchez",
        edad: 19,
        ticket: true,
    }



    if (usuario.edad > 18) {
        alert("INGRESO CON EXITO ! El usuario es mayor de edad y tiene un ticket")
        if (usuario.ticket === false) {
            alert("El usuario es mayor de edad pero no tiene un ticket")
        }
    }
    else {
        alert("El usuario es menor de edad")
    }
} while (ListaDeUsariosingresados);

