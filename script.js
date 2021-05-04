
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
;
let boo = "boo.png"
let mike = "mike.png"
let sullivan = "sullivan.png"

let numClosedDoors= 4;
let openDoor1 ;
let openDoor2 ; 
let openDoor3 ; 
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"; 
let currentlyPlaying  = true ; 


const isBoo = (door) => {
if (door.src === boo){
return true;
}else {
return false ;
}
}

const isClicked = (door) => {
  if (door.src === closedDoorPath){
return false ;
  } else {
    return true ;
  }
}
const playDoor = (door) => {
  numClosedDoors -- ;
  if (numClosedDoors === 0) {
    gameOver("win")
  } else if (isBoo(door)){
gameOver()
  }
}

const randomChoreDoorGenerator = () => {
let choreDoor = Math.floor ( Math.random() * numClosedDoors);
if (choreDoor === 0){
openDoor1 = boo ;
openDoor2 = mike;
openDoor3 = sullivan ;
} else if (choreDoor === 1){
openDoor1 = mike;
openDoor2 = boo;
openDoor3 = sullivan;
}else  {
openDoor1 = sullivan ;
openDoor2 = mike;
openDoor3 = boo ; 
}
}

doorImage1.onclick = () => {
if (currentlyPlaying && !isClicked(doorImage1)){
doorImage1.src = openDoor1;
playDoor(doorImage1);
}

}

 

doorImage2.onclick = () => {
 if (currentlyPlaying && !isClicked(doorImage2)){
doorImage2.src = openDoor2 ; 
playDoor(doorImage2);
}
 
}


doorImage3.onclick = () => {
if (currentlyPlaying && !isClicked(doorImage3)){
doorImage3.src = openDoor3;
playDoor(doorImage3);
}

}

const startRound =()=>{
numClosedDoors = 3;
doorImage1.src = closedDoorPath;
doorImage2.src = closedDoorPath;
doorImage3.src = closedDoorPath;
startButton.innerHTML = 'Good luck!';
currentlyPlaying= true ;
randomChoreDoorGenerator() ; 

}; 
startButton.onclick = ()=> {
  startRound ();
}
 
 function gameOver  (status) {
if (status==="win") {
  startButton.innerHTML = "You Win! Play again?"
 } else {
  startButton.innerHTML = "Game over! Play again?"
}
currentlyPlaying = false ; 
 }; 


 playDoor();

startRound();


