// Finding Purpose
// Author: Bodunrin Ladele
// Created for: SDI Online

var name = "Bodunrin Ladele",
	birthDate = 1979,
	birthPlace = "Ibandan, Nigeria",
	chldHdTrauma = true,
	disftnlWrld = ["curruption", "violence", "poverty", "greed", "misfortune"],
	liberator = ["love"],
	paralzr = ["fear", "self doubt", "self pity"]
;


//Begin the story.
console.log("My name is " + name + " and I was born in " + birthPlace + " in " + birthDate + ".");

//Prodedure.
var doIHaveHope = function(chldHdTrauma, disftnlWrld) {
	var chldHdTrauma = true;
	var disftnlWrld = ["curruption", "violence", "poverty", "greed", "misfortune"];
	if ((chldHdTrauma = true) && (disftnlWrld.length > liberator.length)) {
		return lifeWithPurps;
	}	else {
		return whatToDo;
	}
};



//Boolean function
var whatToDo = function(humbLove, originOutput) {
	var originOutput = ["family", "friends", "significant others", "work", "play", "socialization"];
	var humbLove = originOutput.length * 2;
	if (humbLove > disftnlWrld.length) {
		console.log("I found the answer.");
	} else {
		console.log("Life is hopeless.")
	}
};

whatToDo();