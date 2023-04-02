/*
Requirements:
The Restaurant Filter Application should do the following:

Have a named function that acts as an object constructor for a restaurant
The restaurant object should have properties for the following:
Name
Address
Has Gluten Free Options
Has Vegan Options
The restaurant object should have a method (anonymous function) that does the following:
Creates an HTML element with the restaurant name and restaurant address
Returns one HTML element
Have a form with a submit action that does the following:
Evaluates which filters are selected
Clears the current list of restaurants
Examines each restaurant to see if it is appropriate for the selected filters
If the restaurant is appropriate for the selected filters, the function should append that restaurant to a restaurant list element
Restaurants that do not work with the selected filters should not be rendered
Create an array that is prepopulated with the following restaurant objects:

*/


/*Name          |	Address            |	Has Gluten Free Options |	Has Vegan Options |	Extra: Is Local |
Macho Meal      | 337 St Paul Ave.     |false                       |false                |false            |
Veganic Corner  |24 S. Buckingham Road |true	                    |true	              |true
Sherryl Meals   |7897 Glen Eagles Court|true	                    |false	              |false
Salad Heaven    |593 Harvey Street     |false	                    |true	              |true
Root Shoots     |18 South Chapel Street|true	                    |true	              |true
Grill Moguls    |40 State Rd.          |true	                    |false	              |false
NovaFood        |9026 Jones Rd.        |true	                    |true	              |false
Sangli          |426 Summerhouse Ave.  |false	                    |false	              |false
Lavoya Diner    |83 Beacon Lane        |true	                    |false	              |true
Andisova        |474 Mayfield Ave.     |true	                    |false	              |false*/

//Have a named function that acts as an object constructor for a restaurant
/*
The restaurant object should have properties for the following:
Name
Address
Has Gluten Free Options
Has Vegan Options
 */
function Restaurant(name,address,isGlutenFree,isVegan,isLocal){
    this.name = name;
    this.address = address;
    this.isGlutenFree = isGlutenFree;
    this.isVegan = isVegan;
    this.isLocal = isLocal;
    /*
    The restaurant object should have a method (anonymous function) that does the following:
Creates an HTML element with the restaurant name and restaurant address
Returns one HTML element 
*/
    this.createOutput = function(){
        let restaurantOutput = document.createElement('div');
        restaurantOutput.classList.add('card')
        restaurantOutput.innerHTML = '<p><b>Name: </b>' + this.name + '<br><b>Address: </b>' + this.address + '</p>';
        return restaurantOutput;
    }

}



let restaurants = [
    new Restaurant('Macho Meal','337 St Paul Ave.',false,false,false),
    new Restaurant('Veganic Corner','24 S. Buckingham Road',true ,true ,true),
    new Restaurant('Sherryl Meals','7897 Glen Eagles Court',true,false,false),
    new Restaurant('Salad Heaven','593 Harvey Street ',false,true,true),
    new Restaurant('Root Shoots','18 South Chapel Street',true,true,true),
    new Restaurant('Grill Moguls ','40 State Rd.',true,false,false),
    new Restaurant('NovaFood','9026 Jones Rd.',true,true,false),
    new Restaurant('Sangli','426 Summerhouse Ave.',false,false,false),
    new Restaurant('Lavoya Diner','83 Beacon Lane',true,false,true),
    new Restaurant('Andisova ','474 Mayfield Ave.',true,false,false)
]


function restaurantSelector(){
    

    const result = document.getElementById('result');
    result.textContent = '';

    const isGlutenFree = document.getElementById('isGlutenFreeInput').checked
    const isVeganFree = document.getElementById('isVeganInput').checked
    const isLocal = document.getElementById('isLocalInput').checked
    for(let i = 0; i < restaurants.length;i++){
    if((!isGlutenFree|| isGlutenFree && restaurants[i].isGlutenFree === isGlutenFree )&& (!isVeganFree || restaurants[i].isVegan === isVeganFree)&&(!isLocal || restaurants[i].isLocal === isLocal)){
       console.log(restaurants[i].createOutput())
       //const restaurant = document.createElement('p')
      // restaurant.textContent = restaurants[i].createOutput().innerHTML;
       result.appendChild(restaurants[i].createOutput())



       

    
    }
}
   
}