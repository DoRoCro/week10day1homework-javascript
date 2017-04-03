score = 5;                      // set global variable score to 5
                                //
var result = function() {       // define function result()
  var score = 3;                //   set local variable score to 3
  return score;                 //   return value of local variable score (=3)
}                               //
                                //
console.log(result());          // output result of calling result() function, which is 3.