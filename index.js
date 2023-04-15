for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var innertext = this.innerHTML;
    console.log(innertext);
    makesound(innertext);
    buttonanimation(innertext)
  })}
document.addEventListener("keypress", function (x) {
    console.log(x.key);
    makesound(x.key);
    buttonanimation(x.key);
});
function makesound(z){
    switch (z) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play()
          break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audio = new Audio("./sounds/tom-3.mp3");
          audio.play();
          break;
        case "d":
          var audio = new Audio("./sounds/tom-4.mp3");
          audio.play();
          break;
        case "j":
          var audio = new Audio("./sounds/snare.mp3");
          audio.play();
          break;
        case "k":
          var audio = new Audio("./sounds/crash.mp3");
          audio.play();
          break;
        case "l":
          var audio = new Audio("./sounds/kick-bass.mp3");
          audio.play();
          break;
        default:
          console.log(z);
    }
}
function buttonanimation(button){
    document.querySelector("."+button).classList.add("pressed");

    setTimeout(() => {
        document.querySelector("."+button).classList.remove("pressed")
    }, 100);
}