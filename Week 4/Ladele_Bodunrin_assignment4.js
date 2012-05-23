// Library: Utility
// Author: Bodunrin Ladele
// Created for: SDI Online

var bibiLib = function() {
	

//1. Checks to see if the given string is a valid phone number
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

//2. Check to see if the given string is a valid email address
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

//3. Check to see if the given string is a valid URL address
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

//4. Change a numbers within a string to number integers.
var stringToNumb = function(strNum){
	var theNum = parseInt(strNum);
	var theResult = theNum; 
	if(isNaN(strNum)) {
		return NaN;
	} else {
		return theNum;
	}
};

//5. see if Check is within pct Percent of numberRef
var fuzzyMatch = function(numberRef, numberCheck, pct){
	var bigNum = numberRef + (numberRef * (pct/100));
	var lilNum = numberRef - (numberRef * (pct/100));
	var result = ( numberCheck <= bigNum || numberCheck >= lilNum);
	if(result = true) {
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

