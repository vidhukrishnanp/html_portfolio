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
            var audio = new Audio('./Chendaa.mp3');
            audio.play();
        break;

        case "a":
            var audio = new Audio('./thavil.mp3');
            audio.play();
        break;

        case "s":
            var audio = new Audio('./mridangam.mp3');
            audio.play();
        break;

        case "d":
            var audio = new Audio('./tabla.mp3');
            audio.play();
        break;

        case "j":
            var audio = new Audio('./tom-1.mp3');
            audio.play();
        break;

        case "k":
            var audio = new Audio('./tom-4.mp3');
            audio.play();
        break;

        case "l":
            var audio = new Audio('./crash.mp3');
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
