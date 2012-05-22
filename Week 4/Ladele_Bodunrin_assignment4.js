var bibiLib = function() {
	

// Checks to see if the given string is a valid phone number
var checkPhone = function(phoneNum) {
	var patt = /\d{3}\d{3}\d{4}/; 
	var phoneTest = patt.test(phoneNum); 
	if(phoneTest = true) {
			return true;
		  } else {
		  	return false;
		  }
	};

	return{
		"checkPhone": checkPhone
		}

// Check to see if the given string is a valid email address
var checkEmail = function(address) {
	var patt = /\w+@\w+.\w{2,3}$/;
	var mailTest = patt.test(address);
	if(mailTest = true) {
		return true;
		} else {
			return false;
		}
};

	return{
		"checkEmail": checkEmail
	}

};

var lib = new bibiLib();

console.log(lib.checkPhone(7047207731));
console.log(lib.checkEmail("bladele@me.com"));

