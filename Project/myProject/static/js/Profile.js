
    function CambiarVista() {
        let cardbody = document.getElementById("card-body");
        let button1 = document.getElementById("Datos");
        let button2 = document.getElementById("Historial");
     
            button1.addEventListener("click", function() {
                    fetch(`/get_profile_data/`) 
                        .then(response => response.json())
                        .then(data => {

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
                });

            button2.addEventListener("click", function() {
                fetch(`/get_order_data/`) 
                .then(response => response.json())
                .then(data => {
                    cardbody.innerHTML = `<div class="row">
                <div class="col-md-8  mx-auto text-center p-3">
                    <table class="table table-hover table-bordered">
                        <thead>
                            <th>Código Compra</th>
                            <th>Correo</th>
                            <th>Fecha</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${data.id_compra}</td>
                                <td>${data.correo_cliente}</td>
                                <td>${data.fecha_compra}</td>
                                <td>${data.total_compra}</td>
                            </tr>
                        </tbody>
                    </table> `;
                    for (let data of data.compras) {
                        cardbody.innerHTML += `
                            <tr>
                                <td>${data.id_compra}</td>
                                <td>${data.correo_cliente}</td>
                                <td>${data.fecha_compra}</td>
                                <td>${data.total_compra}</td>
                            </tr>
                        `;
                    }

                })
                .catch(error => {
                    console.error("Error:", error);
                });
            });}

