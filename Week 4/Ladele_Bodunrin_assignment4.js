// Library: Utility
// Author: Bodunrin Ladele
// Created for: SDI Online

var bibiLib = function() {
	};


//1. Checks to see if the given string is a valid phone number
bibiLib.checkPhone = function(checkString) {
	var patt = /\d{3}\d{3}\d{4}/; 
	var phoneTest = patt.test(checkString); 
	if(phoneTest == true) {
			return true;
		  } else {
		  	return false;
		  }
		  return{
			"checkPhone": checkPhone
		  	}
	};

			

//2. Check to see if the given string is a valid email address
bibiLib.checkEmail = function(checkString) {
	var patt = /\w+@\w+.\w{2,3}$/;
	var mailTest = patt.test(checkString);
	if(mailTest == true) {
			return true;
			} else {
		  	return false;
			}
			return{
			"checkEmail": checkEmail
			}
	};

			

//3. Check to see if the given string is a valid URL address
bibiLib.checkLink = function(checkString){
	var patt1 = /^http[s]?:/; 
	var urlTest = patt1.test(checkString);
	if(urlTest == true) {
			return true;
			} else {
			return false;
			}
			return{
			"checkLink": checkLink
			}
};

	

//4. Change a numbers within a string to number integers.
bibiLib.stringToNumb = function(strNum){
	var theNum = parseInt(strNum);
	var theResult = theNum; 
	if(isNaN(strNum)) {
			return NaN;
			} else {
			return theResult;
			}
			return{
			"stringToNumb": stringToNumb
			}
};

//5. See if Check is within pct Percent of numberRef
bibiLib.fuzzyMatch = function(numberRef, numberCheck, pct){
	var bigNum = numberRef + (numberRef * (pct/100));
	var lilNum = numberRef - (numberRef * (pct/100));
	console.log(bigNum, lilNum);
	if((numberCheck <= bigNum) || (numberCheck >= lilNum)) {
			console.log("is");
			} else {
			console.log("is not");
			}
			
//6.  Title Case 







};







console.log(bibiLib.checkPhone(123));
console.log(bibiLib.checkEmail("bladele@me"));
console.log(bibiLib.checkLink("http://www.apple.com/"));
console.log(bibiLib.stringToNumb("100"));
console.log(bibiLib.fuzzyMatch(100, 10, 60));
console.log(bibiLib.numberSum("I want 10 pens."))

