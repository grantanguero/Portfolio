/* External JS Folder. March 29th */

//Global variables (It works with local variables as well)
var valeur, text;
//This function determines whether there are at least two different type of digits
function diffNum(valeur)
{
  for (var x = 1; x < 16; x++)
    if (valeur[x] != valeur[0])
      return true;
  return false;
}
//This function determines the other requested conditions
function Validate()
{
  //var valeur, text; (In case we want to use local variables)
  valeur = document.getElementById("petit").value;

  // val1.length !== 16
  if (isNaN(valeur) || valeur <= 1111111111111111 || (valeur % 2) !== 0 || !diffNum(valeur))
  {
    text = "Invalid Number";
    alert("Invalid Number !");

  } else
   {
    text = "Valid Number";
    alert("Valid Number");
    }
  document.getElementById("demo").innerHTML = text;
}
