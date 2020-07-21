let readlineSync = require('readline-sync');

console.log('Parking-lot Batfight!');

console.log("An aggressive driver in the Dolphin mall parking-lot has challenged you to a bat fight for taking the last parking spot, what do you want to do?");

let firstOption = readlineSync.question("Options: circle the guy, fetal position crying, run away, yell profanity:");

switch(firstOption) {
    case "circle the guy":
        console.log( "You lock eyes and say: \"I'm gonna beat your ass.\"" );
        console.log( "Pissed parking lot guy: \"Yells profanities.\"" );
       
        break;
    
    case "fetal postion crying":
        console.log( "You: \"Crying.\"" );
        console.log( "Pissed parking lot guy: \"Yells profanities about your mother and walkes away.\"" );
      
        break;

    case "run away":
        console.log( "You run-away yelling: \"Someone call the police!\"" );

        break;

    case "yell profanity":
        console.log( "You: \"Yell profanities!\"" );
    default:  
        console.log( "He hits you with bat to the stomach! And knocks you out cold!" );
        console.log( "Pissed off parking lot guy: \"Yells profanities about your mother and walkes away.\"" );
}

let secondOption = readlineSync.question("Options: kick shins,groin kick:");
switch(secondOption) {
    case "kick shins":
        console.log( "Pissed parking lot guy \"Ouch! My shins!\"" );
        console.log( "Hits your arm with the bat!" );
        console.log( "Pissed off parking lot guy: \"Take this!\"" );
      
        break;
      
    case "groin kick":
        console.log( "Pissed parking lot guy: \"Ouch! My family jewels!\"" );
        console.log( "He's punches you in neck!");
}

let thirdOption = readlineSync.question("Options: bat swing, run away:");
switch(thirdOption) {
    case "bat swing":
        console.log( "He's swinging his bat!");
        console.log( "You hit him firts he goes to sleep.");
        console.log( "You Win!");
    
      break;
      
    case "run away":
        console.log( "You run-away yelling: \"Someone call the police!\"" );
        console.log( "You Win, but there's a onlyindade post of you running and screaming like a girl");
}