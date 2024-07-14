/*
function CambiarVista(){

    let cardbody = document.getElementById("card-body");

    let button1 = document.getElementById("Datos");
    let button2 = document.getElementById("Historial");
    // Assuming you have Django set up with a template engine
    */


    
    function CambiarVista() {
        let cardbody = document.getElementById("card-body");
        let button1 = document.getElementById("Datos");
        let button2 = document.getElementById("Historial");
     
            button1.addEventListener("click", function() {
                    fetch("/get_profile_data") 
                        .then(response => response.json())
                        .then(data => {
                            // Update the cardbody with the fetched user data
                            cardbody.innerHTML = `
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Nombre</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        ${data.nombre} ${data.apellido}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Correo</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        ${data.email}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Fecha Nacimiento</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        ${data.fecha_nacimiento}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Género</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        ${data.genero}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Número de celular</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        ${data.telefono}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Comuna</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        ${data.comuna}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Dirección</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        ${data.direccion} ${data.numero_direccion}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Contraseña</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        **********
                                    </div>
                                </div>
                            `;
                        })
                        .catch(error => {
                            console.error("Error:", error);
                        });
                });}

/*
        button2.addEventListener("click", function() {
            // Make an AJAX request to fetch the purchase history data from Django backend
            fetch("/api/purchases") // Replace "/api/purchases" with your Django API endpoint
                .then(response => response.json())
                .then(data => {
                    // Update the cardbody with the fetched purchase history data
                    let tableHTML = `
                        <div class="row">
                            <div class="col-md-8 shadow-lg mx-auto text-center p-3">
                                <table class="table table-dark table-hover table-bordered">
                                    <thead>
                                        <th>Código Compra</th>
                                        <th>Correo</th>
                                        <th>Fecha</th>
                                        <th>Total</th>
                                    </thead>
                                    <tbody>
                    `;
                    data.forEach(purchase => {
                        tableHTML += `
                            <tr>
                                <td>${purchase.id_compra}</td>
                                <td>${purchase.correo}</td>
                                <td>${purchase.fecha_compra}</td>
                                <td>${purchase.total_compra}</td>
                            </tr>
                        `;
                    });
                    tableHTML += `
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    `;
                    cardbody.innerHTML = tableHTML;
                })
                .catch(error => {
                    console.error("Error:", error);
                });
        });



    } button1.addEventListener("click", function() {
        cardbody.innerHTML = `
                              
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Nombre</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        {{usuario.nombre}} {{usuario.apellido}}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Correo</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        {{usuario.email}}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Fecha Nacimiento</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        {{usuario.fecha_nacimiento}}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Género</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        {{ usuario.id_genero.genero }}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Número de celular</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        {{usuario.telefono}}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Comuna</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        {{usuario.comuna}}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Dirección</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        {{usuario.direccion}} {{usuario.numero_direccion}}
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Contraseña</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        **********
                                    </div>
                                </div>
                            </div>
                        </div>`;
    });

    button2.addEventListener("click", function() {
        cardbody.innerHTML = `<div class="row">
                <div class="col-md-8 shadow-lg mx-auto text-center p-3">
                    <table class="table table-dark table-hover table-bordered">
                        <thead>
                            <th>Código Compra</th>
                            <th>Correo</th>
                            <th>Fecha</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                { % for tmp in compras %}
                                <td>{{tmp.id_compra}}</td>
                                <td>{{tmp.correo}}</td>
                                <td>{{tmp.fecha_compra}}</td>
                                <td>{{tmp.total_compra}}</td>
                            </tr>
                        </tbody>
                    </table> `

    });
    
}
*/