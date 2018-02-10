
/*
This was the plan we brainstormed. Some items didn't make it into version1, and some got coded in diefferent order than listed here. 
Setup required: 
- var for user start location
- var for treasure location
  - not the same! 
  - randomize
- var for user current location
- game board
  - var for each block
  - track by x & y
- vars for direction (N, E, W, S)
- var for previous user location
- var for user name 
- var treasureFOund = false
Game play: 
- Start with a prompt, telling user about adventure
  - collect their name
- while !treasureFound
  - ask what direction
  - tell user if treasure is in their new location
  - check that they've entered a valid direction
  - tell them if they're closer to treasure
  - only prompt for valid directions
  - make sure their move is still within the grid
  - do math, figure user's current location 
    - (change x or y value)
    
How does game end:
  - user enters treasure's location
    - treasureFound = true
    - output to user, tell them they won!
    - give option to retry
    - reset all vars to starting value */







// Define the size of the game play area
var maxX = 10
var maxY = 10

// User starts at x0, y0 (bottom left of board)
var userX = 0
var userY = 0

// Hide the treasure, also with x y values
var treasureX  = Math.floor(Math.random() * 11); 
var treasureY = Math.floor(Math.random() * 11); 
 

// Flag that controls loop 
var treasureFound = false 


//Play pirate music while condition is true 

var pirateMusic = new Audio("The_Pirate_Song.mp3");



// Get user's name

var name = prompt("Welcome brave adventurer! What are you called?")



while(!treasureFound){

  if(!treasureFound){
 pirateMusic.play();
  }

     

  var direction = prompt("Which direction would you like to go in? (north, south, east, west)")


  console.log(direction)
  console.log(treasureX,treasureY); 
  // tmp vars, only used for checking validity of new user location after move
  var newX 
  var newY
  
  // When new direction entered:
  // see what new user location would be
  // check if new user location is valid
  // check if new user location is treasure
  
  if(direction == "north"){
    newX = userX 
    newY = userY + 1
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
      
    }else {
     console.log("There is a forbidding mountain range in that direction, you cannot go") 
    }
 
  }else if(direction == "east"){
    newX = userX + 1
    newY = userY 
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     console.log("There is a forbidding mountain range in that direction, you cannot go") 
    }
    
  }else if(direction == "south"){
    newX = userX 
    newY = userY - 1 
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     console.log("There is a forbidding mountain range in that direction, you cannot go") 
    }
    
  }else if(direction == "west"){
    newX = userX - 1
    newY = userY
    // neither value < 0, neither is > max
    if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
      userX = newX 
      userY = newY
    }else {
     console.log("There is a forbidding mountain range in that direction, you cannot go") 
    }
    
  }else {
   console.log("please enter a real direction") 
  }
  
  console.log("The user's x is: " + userX)
  console.log("The user's y is: " + userY)
  
  // see if user location matches treasure
  if(userX == treasureX && userY == treasureY){
    console.log("Hooray! You found the treasure!")
   treasureFound = true 
  }
}
