let intro = document.querySelector(".intro");
let logo= document.querySelector(".logo-header");
let logoSpan= document.querySelectorAll('.logo1');


// animation for two span elements

window.addEventListener("DOMContentLoaded", ()=>{
setTimeout(()=>{
    logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
            span.classList.add("active");
        }, (idx+1)*400)
    });


    setTimeout(()=>
    {logoSpan.forEach((span,idx)=>{
    setTimeout(()=>
    {span.classList.remove("active");
      span.classList.add('fade');},
(idx+1)*50)})
},2000); 

// TO get entire splash screen to roll up
setTimeout(()=>{intro.style.top='-100vh';
}, 2300)
    
    
})

var input = document.querySelector(".nav");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    // event.preventDefault();
    // Trigger the button element with a click
    document.querySelector(".click").click();
  }
});


})

