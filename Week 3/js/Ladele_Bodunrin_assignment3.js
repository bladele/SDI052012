// 
// Author: Bodunrin Ladele
// Created for: SDI Online
// Control File


//Variables that allow me to call json data.
var me = json.journeyMan[0].name,
	birthPlace = json.journeyMan[0].birthPlace,
	birthDate =json.journeyMan[0].birthYr
;

// Start: The story begins
//Method Accessor.
for (var key in json.journeyMan[0]) {
	console.log("My " + key + " is " + json.journeyMan[0][key]);
};


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

//Method function with nested conditional. 
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


// For Loop with array argument. The array is a property in my json data object.
var handleData = function(json) {
	for (var i = 0; i < json.journeyMan[0].societyGoals.length; i++) {
		var journeyMan = json.journeyMan[0].societyGoals[i];
		console.log("I knew that if I work hard in life it could get me " + journeyMan + ".");
	};
};
handleData(json);


console.log("But I knew these things would never make me happy or give me purpose.");

// While Loop with number argument. The number is a property in json data object.
var timeItook = function(birthDate) {
	timeDiff = 2002 - birthDate;
	while (birthDate < 2002) {
		console.log("In " + birthDate + ", I had no answer to life's big question.");
		birthDate++;
	}
	console.log("In 2002 I expereince a catalyst event. This event made me begin to see with a perpective beyond myself. It only took " + timeDiff + " years.");

};
timeItook(1979); 

console.log("Knowing the elements the create happiness in life, didn't empower me to love myself or give me purpose.");

//Method Mutator
myVars.lifePrspctv = function(thirdEye) {
	var revelation = myVars.catalyst.length * thirdEye;
	if (myVars.paralzr.length > revelation) {
		console.log("Without purpose, I failed at the endevors I pursued and lost hope.");
	} else {
		console.log("On a trip through the Appalchian mountains, I witness a moment of awe and beauty that changed my perpective.");
		console.log("Afterwards, I was able to view the world outside of myself, outside of what I thought to look for in life.");
	}

};
myVars.lifePrspctv(3);








