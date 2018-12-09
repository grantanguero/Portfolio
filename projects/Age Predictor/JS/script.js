
// External  function
ageOfbirth = prompt("Enter your age of birth: ");
futureAge = prompt("Choose a future year: ");

var x = ageOfbirth;
var y = futureAge;
var z = futureAge - ageOfbirth;

function calcAge(z) {
  z = y - x;
}
document.write("You will be  " + z + "  years old in " + y);
