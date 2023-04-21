function amountTocoins(coins) {
	var amount = prompt("Enter the amount to convert to coins:");
	var result = [];
  
	for (var i = 0; i < coins.length; i++) {
	  while (amount >= coins[i]) {
		result.push(coins[i]);
		amount -= coins[i];
	  }
	}
  
	alert("coins needed is: " + result);
  }
  
  amountTocoins([25, 10, 5, 1]);




