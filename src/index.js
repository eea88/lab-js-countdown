const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

// Your code goes here ...


const startButtonElement = document.querySelector("#start-btn");


startButtonElement.onclick = function() {
  
  startCountdown()
};


let timerEvent = document.querySelector("#time");


// ITERATION 2: Start Countdown
function startCountdown() {
  startButtonElement.disabled = true
  console.log("startCountdown called!");
  let timer = 10
  setInterval(() =>{
    if (timer >0) { 
    timer -= 1 }
    //console.log (timer);
    timerEvent.innerText = timer;
    
  },1000);
}
  if (timer === 0){
    showToast(message);
  }

  // Your code goes here ...





// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...
  const showToastElement = document.querySelector("#toast");
  
  showToastElement.classList.add("show");


  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
