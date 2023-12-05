
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fLastN = document.getElementById("fLastN");
	var fEmail = document.getElementById("fEmail");
    var fPassword = document.getElementById("fPassword");
    var fPhone = document.getElementById("fPhone");
    var fAddress = document.getElementById("fAddress");

	// Get the error elements
	var errorName = document.getElementById("errorName");
    var errorLastN = document.getElementById("errorLastN");
    var errorEmail = document.getElementById("errorEmail");
    var errorPassword = document.getElementById("errorPassword");
    var errorPhone = document.getElementById("errorPhone");
    var errorAddress = document.getElementById("errorAddress");

	
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == "" || fName.value.length < 3 || !/^[a-zA-Z]+$/.test(fName.value)){
		error++;
		errorName.textContent = "This field is required and must have, at least, 3 characters";
	}

	if (fLastN.value == "" || fLastN.value.length < 3 || !/^[a-zA-Z]+$/.test(fLastN.value)) {
		error++;
		errorLastN.textContent ="Last name must have at least 3 characters and contain only letters.";
	}

	if (fEmail.value == "" || fEmail.value.length < 3 || !/\S+@\S+\.\S+/.test(fEmail.value)) {
		error++;
		errorEmail.textContent = "Email must have at least 3 characters and follow the correct format. Oh yeah";
	}

	if (fPassword.value == "" || fPassword.value.length < 4 || !/^(?=.*[a-zA-Z])(?=.*\d).{4,8}$/.test(fPassword.value)) {
		error++;
		errorPassword.textContent = "Password must have between 4 and 8 characters and include numbers and letters.";
	}

	if (fPhone.value == "" || fPhone.value.length !== 9 || fPhone.value == !/^\d+$/) {
		error++;
		errorPhone.textContent = "Phone must have 9 digits and contain only numbers.";
	}

	if (fAddress.value == "" || fAddress.value.length < 3) {
		error++;
		errorAddress.textContent.textContent =  "Address must have at least 3 characters.";
	}
	 

	if(error>0){
		
	}else{
		alert("OK");
	}

}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	'use strict'
  
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation')
  
	// Loop over them and prevent submission
	Array.from(forms).forEach(form => {
	  form.addEventListener('submit', event => {
		if (!form.checkValidity()) {
		  event.preventDefault()
		  event.stopPropagation()
		}
  
		form.classList.add('was-validated')
	  }, false)
	})
  })()


