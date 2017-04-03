var murderer = 'rick';                //  parent scope variable set to rick
                                      //
var outerFunction = function(){       // outer function definition / scope starts
  var murderer = 'marc';              //    outerfunction scope murderer set to marc

  var innerFunction = function(){     // start of innerfunction definition / scope
    murderer = 'valerie';             //     innerfunction scope murderer set to valerie
  }                                   // end of innerfunction
                                      // outerfunction scope local murderer back to marc
  innerFunction();                    // outerfunction calls innerfunction
}                                     // end of outerfunction
                                      // back to parent scope murderer = rick
outerFunction();                      // outerfunction called, at end of which return to parent scope so murdere = rick still
console.log('the murderer is ', murderer);   //  output 'the murderer is  rick'