var numberOfButtons=document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",
    function()
    {   
        var buttonInnerHTML=this.innerHTML;
    
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
        
    });};
    document.addEventListener("keypress",function(event)
    {

          makeSound(event.key);
          animation(event.key);


    });

   
function makeSound(key){
    
    switch (key) {
        case "w":
            var audio = new Audio('./sounds/Chendaa.mp3');
            audio.play();
        break;

        case "a":
            var audio = new Audio('./sounds/thavil.mp3');
            audio.play();
        break;

        case "s":
            var audio = new Audio('./sounds/mridangam.mp3');
            audio.play();
        break;

        case "d":
            var audio = new Audio('./sounds/tabla.mp3');
            audio.play();
        break;

        case "j":
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        break;

        case "k":
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
        break;

        case "l":
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
        break;
    
        default:console.log(keyPressKey);
            break;
    };
   
    };
    function animation(keyPress){
        var currentKey=document.querySelector("."+keyPress);

        currentKey.classList.add("pressed");

        setTimeout(function() {
            currentKey.classList.remove("pressed");
          }, 100);
    };