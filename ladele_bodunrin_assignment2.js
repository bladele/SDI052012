// Finding Purpose
// Author: Bodunrin Ladele
// Created for: SDI Online

var name = "Bodunrin Ladele",
	birthDate = 1979,
	birthPlace = "Ibandan, Nigeria",
	paralzr = ["fear", "self doubt", "self pity"]
;


//Begin the story.
console.log("My name is " + name + " and I was born in " + birthPlace + " in " + birthDate + ".");

//Prodedure.
var doIHaveHope = function(chldHdTrauma, disftnlWrld) {
	var chldHdTrauma = true;
	var disftnlWrld = ["curruption", "violence", "poverty", "greed", "misfortune"];
	var liberator = ["love"];
	if ((chldHdTrauma = true) && (disftnlWrld.length > liberator.length)) {
		console.log("false")
	}	else {
		console.log("true")
	}
};
doIHaveHope();
//Boolean function
var whatToDo = function(humbLove, loveOrignOutput) {
	var loveOrignOutput = ["family", "friends", "significant others", "work", "play", "socialization"];
	var	disftnlWrld = ["curruption", "violence", "poverty", "greed", "misfortune"];
	var humbLove = loveOrignOutput.length * 2;
	if (humbLove > disftnlWrld.length) {
		console.log("I found the answer.");
	} else {
		console.log("Life is hopeless.")
	}
};
whatToDo();

//Number function
var timeItook = function(birthDate) {
	timeDiff = 2012 - birthDate;
	while (birthDate < 2012) {
		console.log("In " + birthDate + ", I had no answer to life's big question.");
		birthDate++;
	}
	console.log("So 2012 is the year of clarity. It only took " + timeDiff + " years.");

};
timeItook(1979); 


//String & Array Function
var lifeWithPurps = function() {


};


