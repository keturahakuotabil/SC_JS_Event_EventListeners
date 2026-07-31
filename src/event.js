// Selecting our HTML targets
let messageDisplay = document.getElementById("message-display");
let clickButton = document.getElementById("click-btn");
let hoverZone = document.getElementById("hover-zone");
document.getElementById("key-input");

// (i) Click Event Demo
function changeDisplayMessage(){
   messageDisplay.innerText ="🥰Success! You clicked the new JS button";
   document.body.style.backgroundColor = "#ed2c5c";
}
clickButton.addEventListener("click", changeDisplayMessage);

// (ii) Mouseover Event Demo
function changeMessage(){
    messageDisplay.innerText = "🐁 Success! Your mouse hovered this section";
    hoverZone.style.backgroundColor = "#ccfbf1";
}
hoverZone.addEventListener("mouseover", changeMessage);
// Reset style when mouse leaves (Good for student UX awareness)
function changeHoverDisplay(){
    messageDisplay.innerText ="👌 Your mouse has left the hover zone";
    hoverZone.style.backgroundColor = "#f418c4";
}
hoverZone.addEventListener("mouseout", changeHoverDisplay);
// (iii) Keydown Event Demo
document.getElementById("key-input").addEventListener("keydown", function(event){
 messageDisplay.innerText ='💻keyboard is typing: ${event.key}' 
})

// TASK: CLICK EVENTS WITH IMAGE (TOGGLE DEMO)
let isBulbOn = false; // initail current state of the bulb
function toggleBulb(){
   if(isBulbOn === false){
    // turn on
    bulb.style.colour ="#eab308";
    bulb.classList.remove("fa-regular");
    bulb.classList.add("fa-solid");
   } else {
      //turn off
   }

}
bulbIcon.addEventListener("click", toggleBulb);
// TASK 5: INLINE HTML EVENT HANDLING ATTRIBUTES
// These functions are called directly from the HTML 'onclick' and 'onmouseenter' attributes.
 
