// Library: Utility
// Author: Bodunrin Ladele
// Created for: SDI Online

var bibiLib = function() {
	

// Checks to see if the given string is a valid phone number
var checkPhone = function(phoneNum) {
	var patt1 = /\d{3}\d{3}\d{4}/; 
	var phoneTest = patt1.test(phoneNum); 
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
	var patt2 = /\w+@\w+.\w{2,3}$/;
	var mailTest = patt2.test(address);
	if(mailTest == true) {
		return true;
		} else {
			return false;
		}
};

	return{
		"checkEmail": checkEmail
		}

// Check to see if the given string is a valid URL address
var checkUrl = function(link){
	var patt3 = /^http[s]?:/;
	var urlTest = patt3.test(checkString);
	if(urlTest == true) {
		return true;
	} else {
		return false;
	}
};

	return true; {
		"checkUrl": checkUrl
	}

// Change a numbers within a string to number integers.
var stringToNumb = function(strNum){
var theNum = parseInt(strNum);
var theResult = theNum; 
	if (theNum = Nan) {
		return true;
	} else {
		return false;
	}
};


};

var lib = new bibiLib();

console.log(lib.checkPhone(7047207731));
console.log(lib.checkEmail("bladele@me.com"));
console.log(lib.checkUrl("http://www.apple.com/");

