var name = 'Keith';                         // define variable and set value to a string

var printName = function() {                // define the function printName
  console.log('My name is ' + name );       //    which outputs text to the console / command line, using the variable name 
}                                           //    inherited from the parent scope

printName();                                // call the printname function.  output "My name is Keith"

