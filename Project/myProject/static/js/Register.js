
const ValidEmail = correoP => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(correoP).toLowerCase());
}   

const ValidContraseña = contraseña => {
    const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(contraseña); 
}   




formulario.addEventListener('submit',e => {
    e.preventDefault();

    validar();
});

/*PENDIENTE FORMATO NUMERO */
function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\\D/g, '');
    var match = cleaned.match(/^(\\d{3})(\\d{3})(\\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }



function validar(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correoP = document.getElementById("correoP").value;
    let fecnac = document.getElementById("fecnac").value;
    let numtelef = document.getElementById("numtelef").value;
    let direccion = document.getElementById("direccion").value;
    let numDir = document.getElementById("numDir").value;
    let contraseña = document.getElementById("contraseña").value;
    let Repcontraseña = document.getElementById("Repcontraseña").value;
    
    if (nombre !== ''){ 
        /*CORRECTO*/
        document.getElementById("nombre").style.border = "1px solid green"
    }else{
        /*ERROR*/
        document.getElementById("nombre").style.border = "1px solid red"
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "El campo Nombres es requerido</div>"

    }

    if (apellido !== ''){
        /*CORRECTO*/
        document.getElementById("apellido").style.border = "1px solid green"
        document.getElementById("resultado").innerHTML = ''
    }else{
        /*ERROR*/
        document.getElementById("apellido").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "El campo Apellido es requerido</div>"
    }

    if (correoP === '' || (!ValidEmail(correoP))) {
            
        /*ERROR*/
        document.getElementById("correoP").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "El campo Correo Personal es incorrecto</div>"
    }else {
        /*CORRECTO*/
        document.getElementById("correoP").style.border = "1px solid green"
        document.getElementById("resultado").innerHTML = ''
    }

    if (fecnac !== ''){
        /*CORRECTO*/
        document.getElementById("fecnac").style.border = "1px solid green"
    }else {
        document.getElementById("fecnac").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "El campo Fecha de nacimiento es requerido</div>"
    }

    if (numtelef !== ''){
        document.getElementById("numtelef").style.border = "1px solid green"
    }else{
        document.getElementById("numtelef").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "El campo Numero de Teléfono es requerido</div>"
    }

    if (direccion !== ''){
        document.getElementById("direccion").style.border = "1px solid green"
    }else{
        document.getElementById("direccion").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "El campo dirección es obligatorio</div>"
    }

    if (numDir !== ''){
        document.getElementById("numDir").style.border = "1px solid green"
    }else{
        document.getElementById("numDir").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "El número de la dirección es obligatorio</div>"
    }

    if (contraseña === '' || (!ValidContraseña(contraseña))){

        document.getElementById("contraseña").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
        "La contraseña requiere de 1 letra Mayúscula,1 minúscula,un número y un carácter especial y al menos 8 carácteres</div>"
    }else {
        if (Repcontraseña === ''){
            document.getElementById("Repcontraseña").style.border = "1px solid red";
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
            "Por favor confirma tu contraseña</div>"
        }else if (Repcontraseña !== contraseña){
            document.getElementById("Repcontraseña").style.border = "1px solid red";
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>" +
            "Las contraseñas no coinciden</div>"
        }else{
            document.getElementById("Repcontraseña").style.border = "1px solid green"           
        }
        document.getElementById("contraseña").style.border = "1px solid green"
    }
};  



