import platos from './json/platos.json' assert {type: 'json'};

console.log(platos);
/*
let cont = document.createElement('div');
cont.classList.add('owl-carousel', 'owl-theme','food-container');


platos.forEach(plato => {
    
    let cardsHTML = `
        <div class="item">
            <a href="/html/DetailProduct.html">
                <div class="card comida" style="width: 16rem; height: 26rem;">
                    <div class="img">
                        <img src="${plato.imagen}" class="card-img-top" alt="..." >
                    </div>
                    <div class="card-body">
                    <h5 class="card-title">${plato.nombre}</h5>
                    <hr>
                    <p class="card-text">${plato.descripcion}</p>
                    </div>
                </div>
            </a>
        </div>
    `;    
    cont += cardsHTML;
    let contenedor = document.getElementById('Carrusel');
        contenedor.appendChild(cont);
});
*/
let carouselContainer = document.createElement('div');
        carouselContainer.classList.add('owl-carousel', 'owl-theme', 'food-container');

        platos.forEach(plato => {
            let itemHTML = `
                <div class="item">
                    <a href="/html/DetailProduct.html?id=${plato.id}" class="carta" id="${plato.id}">
                        <div class="card comida" style="width: 16rem; height: 26rem;">
                            <div class="img">
                                <img src="${plato.imagen}" class="card-img-top" alt="${plato.nombre}" onerror="this.src='/img/platos/default.jpg';">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${plato.nombre}</h5>
                                <hr>
                                <p class="card-text">${plato.descripcion}</p>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            carouselContainer.innerHTML += itemHTML;
        });
        
        let contenedor = document.getElementById('Carrusel');
        contenedor.appendChild(carouselContainer);
        
        document.getElementById('Carrusel').addEventListener('click', function(event) {
            if (event.target.closest('.carta')) {
                let cartaClicada = event.target.closest('.carta');
                let id = cartaClicada.id;
                console.log(id);
            }
        });

        

        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1284:{
                    items:3
                },
                1300:{
                    items:4
                }
            }
        })
        var owl = $('.owl-carousel');
        owl.owlCarousel();
        $('.r').click(function() {
            owl.trigger('next.owl.carousel');
        })
        $('.l').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
        })

        