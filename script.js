$(document).ready(function() {

    $(".btnEnviar").on("click", function(event) {
        // Previene el envío del formulario si hay errores
        if (!validarFormulario()) {
            event.preventDefault();
        }

        window.location.reload();
    });

    function validarFormulario() {
        let esValido = true;

        // Validar el campo Nombre
        const nombre = $("#nombre").val().trim();

        const regexNombreApellido = /^[A-Za-z]+$/;

        if (!regexNombreApellido.test(nombre)) {
            console.log(regexNombreApellido.test(nombre))
            alert("Por favor, ingrese un nombre válido. Solo se permiten letras y espacios.");
            esValido = false;
            return;
        }

        // Validar el campo Apellido
        const apellido = $("#apellido").val().trim();

        if (!regexNombreApellido.test(apellido)) {
            alert("Por favor, ingrese un apellido válido. Solo se permiten letras y espacios.");
            esValido = false;
            return;
        }

        // Validar el campo Email
        let email = $("#email").val().trim();

        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if (!regexEmail.test(email)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            esValido = false;
            return;
        }

        const fechaNacimiento = $("#fechaNacimiento").val();

        if (!fechaNacimiento) {
            alert("Por favor, ingrese su fecha de nacimiento.");
            esValido = false;
            return;
        }

        // Validar País de Residencia
        const pais = $("#pais").val();
        if (!pais) {
            alert("Por favor, seleccione su país de residencia.");
            esValido = false;
            return;
        }

        return esValido;
    }
});


$("#modoContraste").on("click", function(){
    $("body").toggleClass("dark-mode");
    $("form").toggleClass("high-contrast");
    $("input").toggleClass("high-contrast");
    $("select").toggleClass("high-contrast");
    $("button").toggleClass("high-contrast");
    $("h2").toggleClass("high-contrast");
    $("label").toggleClass("high-contrast");
    $(".form-container").toggleClass("high-contrast");

})

let estilosActivos = true; 

$('#cambiarEstilo').on('click', function() {

    if (estilosActivos) {
        $('link[rel="stylesheet"]').attr('href', 'none.css');
    } else {
        $('link[rel="stylesheet"]').attr('href', 'styles.css');
    }

    estilosActivos = !estilosActivos;
});


