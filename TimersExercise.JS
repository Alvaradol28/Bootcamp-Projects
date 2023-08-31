
/* Exercise 1 (Use the setInterval + Anonymous Function)

This countdown function takes a number and every 1000 milliseconds, decrements the value and prints it. 
When the value equals 0, it logs, "Done!" */

function timerCountDown(num){
    let timer = setInterval(function(){   //***Use of anonymous function for one time use***//
      num--;

      if(num <= 0){
        clearInterval(timer);   //Stops the function//
        console.log('Done!');
      
    } else {
        console.log(num);
      }
  
    }, 1000)  // Don't forget the second parameter/argument for setInterval function// 
  }

 
 //Exercise 2// 
/*This game takes a random number (0-1) and every 1000 milliseconds
"Each time a number is picked, add 1 to a counter." If the number
is greater than .75, stop the timer and console.log the number of tries it took before
we found a number greater than .75" */ 

  function randomGame(){
    let times = 0;
    let timer = setInterval(function(){
      let num = Math.random();
      times++
      if(num > .75) {
        clearInterval(timer); //Stops the function here//
        console.log(times + " attempts were made");
      }
    }, 1000)
  }


