// 
// Author: Bodunrin Ladele
// Created for: SDI Online
// Control File


// Frist let us see if my files are properly linked.
console.log(json.journeyMan[0].theGood[4].length);

var me = json.journeyMan[0].name,
	birthPlace = json.journeyMan[0].birthPlace,
	birthDate =json.journeyMan[0].birthYr
;

//Object within control file so I can creat methods.
var lifeExprnce = {
	chldHdTrauma: "true",
	chldHdComfrt: "true",
	disftnlWrld: ["curruption", "violence", "poverty", "greed", "misfortune"],
	paralzr: ["fear", "self doubt", "self pity"],

};

// Start: The story begins
console.log("My name is " + me + " and I was born in " + birthPlace + " in " + birthDate + ".");

// For Loop
var handleData = function(json) {
	for (var i = 0; i < json.journeyMan[0].theGood.length; i++) {
		var journeyMan = json.journeyMan[0].theGood[i];
		console.log(journeyMan);
	};
};
handleData(json);

// While Loop
var timeItook = function(birthDate) {
	timeDiff = 2002 - birthDate;
	while (birthDate < 2002) {
		console.log("In " + birthDate + ", I had no answer to life's big question.");
		birthDate++;
	}
	console.log("So 2002 is the year of clarity. It only took " + timeDiff + " years.");

};
timeItook(1979); 


