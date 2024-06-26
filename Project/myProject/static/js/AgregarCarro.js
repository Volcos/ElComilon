document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones de "Agregar al carrito"
    var addToCartButtons = document.querySelectorAll('.agregar-producto');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var productId = this.getAttribute('data-product-id');
            agregarAlCarrito(productId);
        });
    });
});

function agregarAlCarrito(productId) {
    fetch(`/agregar_al_carrito/${productId}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            actualizarCarrito(data.carrito);
        }
    })
    .catch(error => console.error('Error:', error));
}

function actualizarCarrito(carrito) {
    var carritoElemento = document.getElementById('identificador');
    carritoElemento.innerHTML = '';

    for (var productId in carrito) {
        var producto = carrito[productId];
        var productoElemento = document.createElement('div');
        productoElemento.innerHTML = `
            <div>
                <h4>${producto.nombre}</h4>
                <p>Precio: $${producto.precio}</p>
                <p>Cantidad: ${producto.cantidad}</p>
            </div>
        `;
        carritoElemento.appendChild(productoElemento);
    }
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
