function validar_nombre_usuario(string) {
    
    var registroU = new RegExp("^[a-zA-Z]{6,30}$", "g");
    var mayusculasU = new RegExp("[A-Z]", "g").test(string);
    return registroU.test(string) && mayusculasU;
    } 

function validar_anoNacimiento_usuario(valor) {
    var fecha = parseInt(valor);
    if(isNaN(fecha)) {
        alert("El campo fecha debe ser un número");
        return false;
    }

    if(fecha < 0) {
        alert("El campo fecha debe ser positivo");
        return false;
    }

    if (fecha < 1900) {
        alert("El campo fecha debe estar entre 1900 y 2022");
        return false;
    }

    if (fecha > 2022) {
        alert("El campo fecha debe estar entre 1991 y 2022");
        return false;
    }
    if (2021-fecha < 18) {
        alert("El usuario es menor de edad");
        return false;
    }
    return true;
}

function validar_contrasena(string) {
    var registro = new RegExp("^[a-zA-Z0-9]{6,30}$", "g");
    var minusculas = new RegExp("[a-z]", "g").test(string);
    var mayusculas = new RegExp("[A-Z]", "g").test(string);
    var numerico = new RegExp("[0-9]", "g").test(string);
    if (!registro.test(string) || !minusculas || !mayusculas || !numerico){
        alert(`Debe tener 6 o más caracteres.
        • Solo puede contener caracteres alfanuméricos. 
        Es decir, letras de la A a la Z y los números del 0 al 9.
        • Debe contener por lo menos una letra minúscula, una
        letra mayúscula y un número.`)
    }
}    

function confirmar_contrasena(stringA) {
    var pcontrasena = validar_contrasena(stringA);
    let stringB = document.getElementById("contrasena_usuario_input").value 
    var scontrasena = validar_contrasena(stringB);
    if (stringA != stringB){
        alert(`Las contraseñas no coinciden.`)
    }
    
}