
function CambiarVista(){

    let cardbody = document.getElementById("card-body");

    let button1 = document.getElementById("Datos");
    let button2 = document.getElementById("Historial");

    button1.addEventListener("click", function() {
        cardbody.innerHTML = `
                            
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Nombre</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        Nombre Completo
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Correo</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        be.vargast@duocuc.cl
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Fecha Nacimiento</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        10-03-2005
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Género</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        Género
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Número de celular</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        +56 9 4808 1990
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Dirección</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        Saludos desde Estación Central, Venezuela
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-md-3">
                                        <h5>Número de celular</h5>
                                    </div>
                                    <div class="col-md-9 text-secondary">
                                        +56 9 4808 1990
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

                        </div>`;
    });
    
    button2.addEventListener("click", function() {
        cardbody.innerHTML = `div class="card-body" id="card-body">
        `
    });
    
}
