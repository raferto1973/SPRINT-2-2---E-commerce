
// // Exercise 6

function validate() {
    var error = 0;

    // Obtener los campos de entrada
    var fName = document.getElementById("fName");
    var fLastN = document.getElementById("fLastN");
    var fEmail = document.getElementById("fEmail");
    var fPassword = document.getElementById("fPassword");
    var fPhone = document.getElementById("fPhone");
    var fAddress = document.getElementById("fAddress");

    // Obtener los elementos de error
    var errorName = document.getElementById("errorName");
    var errorLastN = document.getElementById("errorLastN");
    var errorEmail = document.getElementById("errorEmail");
    var errorPassword = document.getElementById("errorPassword");
    var errorPhone = document.getElementById("errorPhone");
    var errorAddress = document.getElementById("errorAddress");

    // Validar los campos introducidos por el usuario: nombre, teléfono, contraseña y correo electrónico.

    if (fName.value == "" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)) {
        error++;
        fName.classList.add("is-invalid");
        errorName.textContent = "This field is required and must have, at least, 3 characters";
    } else {
        fName.classList.remove("is-invalid");
    }

    if (fLastN.value == "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
        error++;
        fLastN.classList.add("is-invalid");
        errorLastN.textContent = "Last name must have at least 3 characters and contain only letters.";
    } else {
        fLastN.classList.remove("is-invalid");
    }

    if (fEmail.value == "" || fEmail.value.length < 3 || !/\S+@\S+\.\S+/.test(fEmail.value)) {
        error++;
        fEmail.classList.add("is-invalid");
        errorEmail.textContent = "Email must have at least 3 characters and follow the correct format.";
    } else {
        fEmail.classList.remove("is-invalid");
    }

    if (fPassword.value == "" || fPassword.value.length < 4 || !/^(?=.*[a-zA-Z])(?=.*\d).{4,8}$/.test(fPassword.value)) {
        error++;
        fPassword.classList.add("is-invalid");
        errorPassword.textContent = "Password must have between 4 and 8 characters and include numbers and letters.";
    } else {
        fPassword.classList.remove("is-invalid");
    }

	if (fPhone.value == "" || !/^\d+$/.test(fPhone.value)) {
		error++;
		fPhone.classList.add("is-invalid");
		errorPhone.textContent = "Phone must have 9 digits and contain only numbers.";
	} else {
		fPhone.classList.remove("is-invalid");
	}	

    if (fAddress.value == "" || fAddress.value.length < 3) {
        error++;
        fAddress.classList.add("is-invalid");
        errorAddress.textContent = "Address must have at least 3 characters.";
    } else {
        fAddress.classList.remove("is-invalid");
    }

    // Compruebe si hay errores de validación
    if (error > 0) {
        
    } else {
        
        alert("OK");
    }
}

// Validación de Bootstrap
(() => {
    'use strict'
   
    const forms = document.querySelectorAll('.needs-validation')
    
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();
