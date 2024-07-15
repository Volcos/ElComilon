document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.agregar-producto');

    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var productId = this.getAttribute('data-product-id');
            agregarAlCarrito(productId);
        });
    });
});

function agregarAlCarrito(productId) {
    var mensaje = document.getElementById("mensaje")
    fetch(`/agregar_al_carrito/${productId}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        }
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
    mensaje.innerHTML = `
    <div class="mensaje">
        <h6>Plato agregado</h6>
    </div>
    `;
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

document.addEventListener('DOMContentLoaded', function() {
    var addToCartButtons = document.querySelectorAll('.comprar-producto');
    console.log("todo bien compa")
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var productId = this.getAttribute('data-product-id');
            agregarAlCarritoYComprar(productId);
        });
    });
});

function agregarAlCarritoYComprar(productId) {
    var flag = false
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
            window.location.href = data.redirect_url;
        } else {
            console.error('Error al agregar al carrito:', data);
        }
    })
    .catch(error => console.error('Error:', error));
}
