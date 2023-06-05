// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

let bulbasuar = 5
let bulbaEvLevel = 16
let candiesNeededb = bulbaEvLevel - bulbasuar

let caterpie = 1
let caterpieEvLevel = 7
let candiesNeededC = caterpieEvLevel - caterpie

let weedle = 1
let weedleEvLevel = 7
let candiesNeededW = weedleEvLevel - weedle


let totalCandies = candiesNeededC + candiesNeededW + candiesNeededb
console.log(totalCandies)

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another function that tells you whether or not charmander can battle

function FahrenheitToCelcius (Fahrenheit){
  return Fahrenheit -32 * 5/9 + "Celsius"
}

function battleOrNot(Celsius){
  if(Celsius > 0){
    console.log("charmander can battle")
  }else{
    console.log("Its too cold")
  }
}

//Loops
//You have joined an undeground pokemon league. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function pokamonCount(number){
  for(i = 0 ; i <= number;i++){
    console.log("Pickachu I choose you")
  }
}
