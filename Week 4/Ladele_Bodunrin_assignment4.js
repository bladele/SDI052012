// Library: bibiLib
// Author: Bodunrin Ladele
// Created for: SDI Online

var bibiLib = function() { 
	};/*I had trouble getting a module pattern to work for this assigment. This last time I did this
	assignment I used an object class, which is what I think I have here. It works, as in I'm getting 
	my output in my console, so I hope thats good enough. However, I keep getting "undefined" logs in 
	the console for my funtions, and I'm not sure why.*/


//1. Checks to see if the given string is a valid phone number
bibiLib.checkPhone = function(checkString) { //The argument passed through the function is any string that is put in.
	var patt = /\d{3}\d{3}\d{4}/; //Variable that uses a regex to validate the string 
	var phoneTest = patt.test(checkString); //Variable that initiates the test.
	if(phoneTest == true) { //If condition that leads to an output.
			console.log(checkString + " is a valid phone number.");//Output from condition if true
		  } else {
		  	console.log(checkString + " is not a valid phone number.");//Output from condition if false
		  }
	};

			

//2. Check to see if the given string is a valid email address
bibiLib.checkEmail = function(checkString) { //The argument passed through the function is any string that is put in.
	var patt = /\w+@\w+.\w{2,3}$/;//Variable that uses a regex to validate the string 
	var mailTest = patt.test(checkString);//Variable that initiates the test.
	if(mailTest == true) { //If condition that leads to an output.
			console.log(checkString + " is a valid email address.");//Output from condition if true
			} else {
		  	console.log(checkString + " is not a valid email address.");//Output from condition if false
			} 
			
	};

			

//3. Check to see if the given string is a valid URL address
bibiLib.checkLink = function(checkString){ //The argument passed through the function is any string that is put in.
	var patt1 = /^http[s]?:/; //Variable that uses a regex to validate the string
	var urlTest = patt1.test(checkString);//Variable that initiates the test.
	if(urlTest == true) { //If condition that leads to an output.
			console.log(checkString + " is a valid URL.");//Output from condition if true
			} else {
			console.log(checkString + " is not a valid URL.");//Output from condition if false

			}
			
};

	

//4. Change a numbers within a string to number integers.
bibiLib.stringToNumb = function(strNum){ //The argument passed through the function is any string that is put in.
	var theNum = parseInt(strNum); //ParseInt is an element in the sytax that changes the number string to an interger.
	var theResult = theNum; //Variable to identify the result of the parseInt.
	if(isNaN(strNum)) { //If condition to give an alternate output if the string is not a number.
			return NaN; //Output if string in NaN
			} else {
			return theResult;// Output to give the number as an integer if the string is a number.
			}
};


//5.Title-case a string
bibiLib.changeCase = function (string){
	var string = string.toLowerCase().replace(/\b[a-z]/g, //Changes all letters in string to lower case.
				function(letter) {return letter.toUpperCase();//Changes first letter of each word to an upper case letter.
    			});
			console.log(string); //Output.
			
};


//6.Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
bibiLib.fixNum = function(num) {
    var fixedNum = console.log(num.toFixed(2));//Variable that limits the number of decimal places to 2.
    return fixedNum;//Output.
};


//7. Fuzzy-match a number
bibiLib.fuzzyMatch = function(numberRef, numberCheck, pct){ //This function requires three arguments.
	var bigNum = numberRef + (numberRef * (pct/100));//Math variable that gives the high number.
	var lilNum = numberRef - (numberRef * (pct/100));//Math variable that gives the low number.
	console.log(bigNum, lilNum);// Output to make sure I was getting the right values for my vars.
	if((numberCheck <= bigNum) || (numberCheck >= lilNum)) {
			console.log(numberCheck + " is within " + pct + "% of " + numberRef + ".");//Output.
			} else {
			console.log(numberCheck + " is not within " + pct + "% of " + numberRef + ".");//Output.
			}
/*The if condition above should give the right output no matter the numbers inputed. But for some
reason, its not working well because I never get a right answer if I put in different numbers from
what I am passing through the argument right now. */
	};



console.log(bibiLib.checkPhone(123));
console.log(bibiLib.checkEmail("bladele@me"));
console.log(bibiLib.checkLink("http://www.apple.com/"));
console.log(bibiLib.stringToNumb("100"));
console.log(bibiLib.fuzzyMatch(100, 10, 10));
console.log(bibiLib.fixNum(4.123890));
console.log(bibiLib.changeCase("my name is bibi."));



