let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i< numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress",function(event){

    makeSound(event.key);

    buttonAnimation(event.key);
});

   function makeSound (key){ 
    
   switch (key) {
    case "w":
            let audio1 = new Audio('sounds/crash.mp3');
            audio1.play();  //the audio object 
        break;

        case "a":
            let audio2 = new Audio('sounds/kick-bass.mp3');
            audio2.play();  //the audio object 
        break;
   
        case "s":
            let audio3 = new Audio('sounds/snare.mp3');
            audio3.play();  //the audio object 
        break;

        case "d":
            let audio4 = new Audio('sounds/tom-1.mp3');
            audio4.play();  //the audio object 
        break;

        case "j":
            let audio5 = new Audio('sounds/tom-2.mp3');
            audio5.play();  //the audio object 
        break;
   
        case "k":
            let audio6 = new Audio('sounds/tom-3.mp3');
            audio6.play();  //the audio object 
        break;

        case "l":
            let audio7 = new Audio('sounds/tom-4.mp3');
            audio7.play();  //the audio object 
        break;
   
    default:
   }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
}
  





















