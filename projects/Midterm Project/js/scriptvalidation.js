/*  MidTermProj. J. Ortiz. April 10th */
/* External function */

function myValidation()
{
  var x;
  x = document.getElementById("first-name").value;
  // If x is Not a Number or less than one or greater than 10
  if (!isNaN(x)) {
    alert("Input not valid. Not numbers allowed! ")
  }
  x = document.getElementById("last-name").value;
  // If x is not a number or less than 1 or greater than 10
  if (!isNaN(x)) {
    alert("Input not valid, not numbers allowed! ");
  }
  // Get the value of the input field with id="phone"
  x = document.getElementById("phone").value;
  // If x is Not a Number or less than one or greater than 10
  if (x.length != 10) {
    alert("Input not valid - Phone must be 10 numbers");
  }
}
