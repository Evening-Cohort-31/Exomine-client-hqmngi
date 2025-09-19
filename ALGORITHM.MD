**Governors.js**

import governors and colonies from database 

Create a drop down menu to select a governor

Add event listener/function to governor names to display their colony and current mineral inventory --- governorInventory()



**facilities.js**

import facilities and minerals from database

Create a drop down menu to select a facility 

Add event listener/function to facility names that will display radio buttons for a chosen facility to display their mineral names and quantities  --showAvailableMinerals()




**minerals.js**

import minerals and facilities from database

Create a function to not display minerals with a quantity of 0 --- filterZeroMinerals() 





**transientState,js**

Add event listener to radio buttons to add items to "Space Cart" -- addMineralsToCart()

addMineralsToCart() function will store mineral selections as transient state 

Create a function to handle "purchase mineral" button that converts the transient state to permanent state--- purchaseMineral() 

After the mineral is selected update the facility mineral inventory (-1) and colony mineral inventory (+1)


