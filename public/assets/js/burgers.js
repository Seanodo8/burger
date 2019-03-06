$(document).ready(function() {

    var sound = new Audio('https://www.pacdv.com/sounds/voices/mmm-1.wav');
  
    // Click Listener for Yum Button
    $('.yum-button').on("click", function(){
         sound.play();
    });
  
  });