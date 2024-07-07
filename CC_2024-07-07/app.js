//Codewars challenge Welcome! 8kyu
//Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task
// Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
//P: You will pass be given a paramater and return a greeting based on the language in the database.
//R: Return hello in the corresponding language. If there is an error or no language in the database return welcome in English.
//E: greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
//P:
greet = language => 
    (hello => hello[language] || 'Welcome')
({
czech: "Vitejte",
danish: "Velkomst",
dutch: "Welkom",
estonian: "Tere tulemast",
finnish: "Tervetuloa",
flemish: "Welgekomen",
french: "Bienvenue",
german: "Willkommen",
irish:"Failte",
italian: "Benvenuto",
latvian: "Gaidits",
lithuanian: "Laukiamas",
polish: "Witamy",
spanish: "Bienvenido",
swedish: "Valkommen",
welsh: "Croeso",
})

//Other Codewars solutions:

var database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }
    
    function greet(language) {
    return database[language] || "Welcome";
    }

function greet(language) {
  
        switch(language){
        case "english": return "Welcome";
        case "czech": return "Vitejte";
        case "danish": return "Velkomst";
        case "dutch": return "Welkom";
        case "estonian": return "Tere tulemast";
        case "finnish": return "Tervetuloa";
        case "flemish": return "Welgekomen";
        case "french": return "Bienvenue";
        case "german": return "Willkommen";
        case "irish": return "Failte";
        case "italian": return "Benvenuto";
        case "latvian": return "Gaidits";
        case "lithuanian": return "Laukiamas";
        case "polish": return "Witamy";
        case "spanish": return "Bienvenido";
        case "swedish": return "Valkommen";
        case "welsh": return "Croeso";
        default: return "Welcome";
        }
      
}


