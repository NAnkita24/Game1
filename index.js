 let direction={x:0,y:0};
 let foodSound=new Audio('snake-hiss-95241.mp3');
 let gameOverSound=new Audio();
 let moveSound=new Audio('snake-hiss-95241.mp3');
 let musicSound=new Audio('snake-hiss-95241.mp3');
 let speed=2;
 let score=0;
 let lastPrintTime=0;
 let snakeArr=[{x:13,y:15}];
 food={x:6,y:7 };   


 function main(ctime){
    window.requestAnimationFrame(main) ;
   // console.log(ctime);
    if ((ctime-lastPrintTime)/1000 <1/speed) {
        return;
    }
    lastPrintTime=ctime;
    gameEngine();
 }

 function gameEngine(){
    //update

    if (isCollide(snakeArr)) { 
        gameOverSound.play();
        musicSound.pause();
        inputDir={x:0,y:0};
        alert("Game Over. Press any key to play again!");
        snakeArr=[{x:13 , y:15}];
        musicSound.play();
        score=0;
    }

    //display

    board.innerHTML ="";  
    snakeArr.forEach((e,index) => {
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x; 
        snakeElement.classList.add('snake') 
        if (index===0) {
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake') 
 
        }
        board.appendChild(snakeElement);
     
    });

        foodElement=document.createElement('div');
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x; 
        foodElement.classList.add('food') 
        board.appendChild(foodElement);

 }

 window.requestAnimationFrame(main) ;
 window.addEventListener('keydown',e=>{
    inputDir = {x:0 , y:1};
    moveSound.play();
    
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;

        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=1;
            break;
            
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=0;
            break;
        
        case "ArrowRight":
            console.log("ArrowRight ");
            inputDir.x=1;
            inputDir.y=-0;
            break;
        
        
        default:
            break;
    }
 })