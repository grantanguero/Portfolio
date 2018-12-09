//External function
function cashRegister()
{
  var items = ["Bananas", "Kiwis", "Apples", "Pears", "Oranges"];
  var numItems = [];

  for (i = 0; i < items.length; i++) {
    numItems.push(prompt("How Many " + items[i] + " do you want?"));
  //  console.log(numItems);
  }
  var priceItems = [3, 4, 3.5, 1, 0.75];
  var itemTotal = [];

  for (i = 0; i < items.length; i++) {
    itemTotal.push(priceItems[i] * parseInt(numItems[i]));
  //  console.log(itemTotal);
  }
  var total = 0;

  for (j = 0; j < itemTotal.length; j++) {
    total += itemTotal[j];
  //  console.log(total);
  }

  document.write("<h2>UNIMARC SUPERMARKET</h2>");
  document.write("Your total purchase is: $ " + total);
  document.write("<h3>Thanks, have a great day!</h3>");
}
  cashRegister();
