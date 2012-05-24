// Library: bibiLib
// Author: Bodunrin Ladele
// Created for: SDI Online

var bibiLib = function() {
	};


//1. Checks to see if the given string is a valid phone number
bibiLib.checkPhone = function(checkString) {
	var patt = /\d{3}\d{3}\d{4}/; 
	var phoneTest = patt.test(checkString); 
	if(phoneTest == true) {
			console.log(checkString + " is a valid phone number.");
		  } else {
		  	console.log(checkString + " is not a valid phone number.");
		  }
	};

			

//2. Check to see if the given string is a valid email address
bibiLib.checkEmail = function(checkString) {
	var patt = /\w+@\w+.\w{2,3}$/;
	var mailTest = patt.test(checkString);
	if(mailTest == true) {
			console.log(checkString + " is a valid email address.");
			} else {
		  	console.log(checkString + " is not a valid email address.");
			}
			
	};

			

//3. Check to see if the given string is a valid URL address
bibiLib.checkLink = function(checkString){
	var patt1 = /^http[s]?:/; 
	var urlTest = patt1.test(checkString);
	if(urlTest == true) {
			console.log(checkString + " is a valid URL.");
			} else {
			console.log(checkString + " is not a valid URL.");

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

//5.Title-case a string
bibiLib.changeCase = function (string){
	string = string.toLowerCase().replace(/\b[a-z]/g, //Changes all letters in string to lower case.
	function(letter) {
    return letter.toUpperCase(); //Changes first letter of each word to an upper case letter.
	});
	console.log(string); 
};

//6.Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
bibiLib.fixNum = function(num) {
    var fixedNum = console.log(num.toFixed(2));//Limits the number of decimal places to 2.
    return fixedNum;
};


//7. Fuzzy-match a number
bibiLib.fuzzyMatch = function(numberRef, numberCheck, pct){ //
	var bigNum = numberRef + (numberRef * (pct/100));
	var lilNum = numberRef - (numberRef * (pct/100));
	console.log(bigNum, lilNum);
	if((numberCheck <= bigNum) || (numberCheck >= lilNum)) {
			console.log(numberCheck + " is within " + pct + "% of " + numberRef + ".");
			} else {
			console.log(numberCheck + " is not within " + pct + "% of " + numberRef + ".");
			}

	};



console.log(bibiLib.checkPhone(123));
console.log(bibiLib.checkEmail("bladele@me"));
console.log(bibiLib.checkLink("http://www.apple.com/"));
console.log(bibiLib.stringToNumb("100"));
console.log(bibiLib.fuzzyMatch(100, 10, 10));
console.log(bibiLib.fixNum(4.123890));
console.log(bibiLib.changeCase("my name is bibi."));



