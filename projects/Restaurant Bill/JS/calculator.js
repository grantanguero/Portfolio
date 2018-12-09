// External function
var total = prompt("Distinguished customer the check is: $ ");
var total = parseInt(total);
var tipPercent = prompt("Enter your gratuity (10% - 15% - 20%): ");

function calcTip(total) {
  if (tipPercent == 10) {
    return (total * .10);
  }
  if (tipPercent == 15) {
    return (total * .15);
  }
  if (tipPercent == 20) {
    return (total * .20);
  } else alert("Try again!!");
}
// Tax in New York is: 8.8%
function calcTax(total) {
  return (total * 8.8 / 100);
}
// The check includes the total, tips and tax
var receipt = (total + calcTip(total) + calcTax(total));
document.write("$" + receipt);
