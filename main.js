let contador = 0;

do {
    contador++

    let NombreDelUsuario = prompt("Ingrese nombre");
    let ApellidoDelUsuario = prompt("Ingresar tu apellido")
    let PaisDeUsuario = prompt("ingrese el pais de origen");
    let EdadDeUsuario = parseInt(prompt("ingrese la edad del usuario"));
    let Ticket = prompt("comprobar si el usuario tiene un ticket");


    let usuario = {
        nombre: "agustin",
        apellido: "sanchez",
        edad: 19,
        pais: "argentina",
        ticket: false,
    };


    if (usuario.edad > 18) {

        if (usuario.ticket) {
            console.log("El usuario es mayor de edad y tiene un ticket");
        } else {
            console.log("El usuario es mayor de edad, pero no tiene un ticket");
        }

    } else {
        alert("El usuario es menor de edad");

    }

} while (contador <= 1)


