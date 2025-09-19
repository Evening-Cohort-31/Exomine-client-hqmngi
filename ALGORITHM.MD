**1. Create a drop down menu to select a governor**

Add event listener to governor names to display their colony and current mineral inventory


Function name: governorInventory()   Module: governors.js


**2.Create a drop down menu to select a facility**

Add event listener to display radio buttons for a chosen facility to display their mineral names and quantities


Function name: showAvailableMinerals()   Module: facilities.js



**3.Add event listener to radio buttons to add items to "Space Cart"**

(use an if statement to only allow items to be added to cart if governor, facility, AND mineral have all been selected)


Funciton name(s): filterZeroMinerals()       Module: minerals.js
		  addMineralsToCart()


**API**

Create "Space Cart" function to store mineral selections as transient state and then convert selection to permanent state when purchase mineral button is selected using POST method. (After the mineral is selected update the facility mineral inventory (-1) and colony mineral inventory (+1))


Function name: purchaseMineral()   Module: Transient State




