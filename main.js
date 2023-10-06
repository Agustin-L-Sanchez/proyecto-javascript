document.addEventListener('DOMContentLoaded', function () {
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');
    const btnReiniciar = document.getElementById('btn-reiniciar');
    const btnComprar = document.getElementById('btn-comprar');
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', agregarProducto);
    });


    btnReiniciar.addEventListener('click', reiniciarCarrito);
    btnComprar.addEventListener('click', comprarCarrito);


    function agregarProducto(event) {
        const boton = event.target;
        const nombre = boton.getAttribute('data-nombre');
        const precio = parseFloat(boton.getAttribute('data-precio'));

        const producto = {
            nombre,
            precio
        };

        carrito.push(producto);
        guardarCarrito();
        mostrarCarrito();
        
    }

    function reiniciarCarrito() {
        carrito = [];
        guardarCarrito();
        mostrarCarrito();
    }

    function comprarCarrito() {
        if (carrito.length === 0) {
            Swal.fire({
                title: 'Tu carrito esta vacio!',
                text: 'Por favor agrega productos para continuar con la compra',
                icon: 'Error',
                confirmButtonText: 'Continuar'
            })
            ;
        } else {
            Swal.fire({
                title: 'Gracias por tu compra!',
                text: 'Gracias por elegirnos',
                icon: 'success',
                confirmButtonText: 'Continuar'
            })
            ;
            reiniciarCarrito();
        }
    
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (carrito.length <= 1) {
                reject(new Error('El carrito está vacío.'));
            } else {
                reiniciarCarrito();
                resolve('Compra completada.');
            }
        }, 1000);
    });

   
   
 }


    comprarCarrito()
    .then((mensaje) => {

    })
    .catch((error) => {
        console.error(error.message);
    });





    function guardarCarrito() {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    
    
    }


    function mostrarCarrito() {
        listaCarrito.innerHTML = '';
        carrito.forEach((producto) => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
            listaCarrito.appendChild(li);
        });

        const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        totalCarrito.textContent = total.toFixed(2);
    }
});

