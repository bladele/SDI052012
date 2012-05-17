// 
// Author: Bodunrin Ladele
// Created for: SDI Online
// Control File


// Frist let us see if my files are properly linked.
console.log(json.journeyMan[0].name);

//Variables that allow me to call json data.
var me = json.journeyMan[0].name,
	birthPlace = json.journeyMan[0].birthPlace,
	birthDate =json.journeyMan[0].birthYr
;

// Start: The story begins
console.log("My name is " + me + " and I was born in " + birthPlace + " in " + birthDate + ".");

// Object within control file so I can creat methods.
var myVars = {
	chldHdTrauma: "true",
	chldHdComfrt: "true",
	disftnlWrld: "true",
	disftnInWrld: ["curruption", "violence", "poverty", "greed", "misfortune"],
	paralzr: ["fear", "self doubt", "self pity"],
	postive: ["family", "friends", "work", "play", "socialization"],
	goodInLife: ["love", "friendship", "fullfilment", "joy", "empathy"],
	catalyst: "sunset",

/*Since I am having trouble with making my method work, I need to trouble shoot, and work with something simpler,
that will work and build from that. I guest that worked.	*/
//Method
	lifePrspctv: function() {
		console.log("The experiences I had as a child and what I saw in the world made me wonder, 'What is the point?'");
		var cons = myVars.chldHdTrauma.length + myVars.disftnlWrld.length + myVars.disftnInWrld.length;
		var pros = myVars.chldHdComfrt.length + myVars.postive.length + myVars.goodInLife.length;
		if ((myVars.chldHdTrauma = true) && (myVars.disftnlWrld = true) && (cons > pros)) {
			console.log("The things I saw that were disheartening where: " + myVars.disftnInWrld);
			console.log("The world seemed doomed, all efforts to change it seems futile.");
		}
		else if (pros > cons) {
			console.log("Despite all the disfunction and hardship that I saw in the world, there seemed to be something that made living bearable.");
			
		} else {
			console.log("I have come to the conclussion that life is about the survival of the fittest, nothing matters but me and getting mine.");
		};
	}
	
};
myVars.lifePrspctv();


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


