var detective = {                         // create an object detective 
    name : 'Ace Ventura',                 //  with two properties, name and pet
    pet : 'monkey'                        //
  }                                       //

var printName = function(detective) {     // define printName() function to return name attribute of an object
  return detective.name                   // detective is a local parameter to the function, so separate from object above.
}

var detectiveInfo = function() {          // define a function detectiveInfo() that reset's an objects name attribute to Poirot
  detective['name'] = 'Poirot'
  return printName(detective);            // use printname function o return the name of the detective object, just set to Poirot
}

console.log(detectiveInfo());             // should print 'Poirot'
