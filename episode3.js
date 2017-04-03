var suspectOne = 'Jay';             //
var suspectTwo = 'Val';             //
var suspectThree = 'Keith';         //  set file level variable to string 'Keith'
var suspectFour = 'Rick';           //

var allSuspects = function() {      // define function allsuspects()
  var suspectThree = 'Harvey'       //  override global variable with a local definition
  console.log('Suspects include: ' + suspectOne + ', ' 
                                   +  suspectTwo + ', ' 
                                   + suspectThree + ', '    // local definition = 'Harvey' used here
                                   + suspectFour)
}

allSuspects();                                        // output will be 'Suspects include: Jay, Val, Harvey, Rick'
console.log( 'Suspect three is:' + suspectThree )     // parent scope definition, so output 'Suspect three is:Keith'