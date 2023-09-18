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
            alert("El carrito está vacío. Agrega productos antes de comprar.");
        } else {
            alert("Compra realizada con éxito. Gracias por tu compra.");
            reiniciarCarrito();
        }
    }


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

