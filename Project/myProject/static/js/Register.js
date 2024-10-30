
const ValidEmail = correoP => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(correoP).toLowerCase());
}   

const ValidContraseña = contraseña => {
    const regex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(contraseña); 
}   

// document.getElementById("submit").disabled = true;

function validar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let correoP = document.getElementById("correoP").value;
    let fecnac = document.getElementById("fecnac").value;
    let numtelef = document.getElementById("numtelef").value;
    let direccion = document.getElementById("direccion").value;
    let numDir = document.getElementById("numDir").value;
    let contraseña = document.getElementById("contraseña").value;
    let Repcontraseña = document.getElementById("Repcontraseña").value;
    let checkbox = document.getElementById("terminos");
    let isValid = true;  // Variable para controlar la validez de los campos

    // Validación de cada campo
    if (nombre !== '') {
        document.getElementById("nombre").style.border = "1px solid green";
    } else {
        document.getElementById("nombre").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>El campo Nombres es requerido</div>";
        isValid = false;
    }

    if (apellido !== '') {
        document.getElementById("apellido").style.border = "1px solid green";
    } else {
        document.getElementById("apellido").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>El campo Apellido es requerido</div>";
        isValid = false;
    }

    if (correoP === '' || (!ValidEmail(correoP))) {
        document.getElementById("correoP").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>El campo Correo Personal es incorrecto</div>";
        isValid = false;
    } else {
        document.getElementById("correoP").style.border = "1px solid green";
    }

    if (fecnac !== '') {
        document.getElementById("fecnac").style.border = "1px solid green";
    } else {
        document.getElementById("fecnac").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>El campo Fecha de nacimiento es requerido</div>";
        isValid = false;
    }

    if (numtelef !== '') {
        document.getElementById("numtelef").style.border = "1px solid green";
    } else {
        document.getElementById("numtelef").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>El campo Numero de Teléfono es requerido</div>";
        isValid = false;
    }

    if (direccion !== '') {
        document.getElementById("direccion").style.border = "1px solid green";
    } else {
        document.getElementById("direccion").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>El campo dirección es obligatorio</div>";
        isValid = false;
    }

    if (numDir !== '') {
        document.getElementById("numDir").style.border = "1px solid green";
    } else {
        document.getElementById("numDir").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>El número de la dirección es obligatorio</div>";
        isValid = false;
    }

    if (contraseña === '' || (!ValidContraseña(contraseña))) {
        document.getElementById("contraseña").style.border = "1px solid red";
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>La contraseña requiere de 1 letra Mayúscula, 1 minúscula, un número y un carácter especial y al menos 8 caracteres</div>";
        isValid = false;
    } else {
        if (Repcontraseña === '') {
            document.getElementById("Repcontraseña").style.border = "1px solid red";
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>Por favor confirma tu contraseña</div>";
            isValid = false;
        } else if (Repcontraseña !== contraseña) {
            document.getElementById("Repcontraseña").style.border = "1px solid red";
            document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>Las contraseñas no coinciden</div>";
            isValid = false;
        } else {
            document.getElementById("Repcontraseña").style.border = "1px solid green";
        }
        document.getElementById("contraseña").style.border = "1px solid green";
    }

    // Validar el checkbox de términos y condiciones
    if (!checkbox.checked) {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-danger w-50 mx-auto text-center'>Debes aceptar los términos y condiciones para registrarte.</div>";
        isValid = false;
    }

    // Habilitar el botón de envío solo si todos los campos son válidos
    document.getElementById("submit").disabled = !isValid;

    if (isValid) {
        document.getElementById("resultado").innerHTML = "<div class='alert alert-success w-50 mx-auto text-center'>Datos Válidos</div>";
    }
}



