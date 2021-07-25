window.onload = function() {
    "use strict"; 

    // actual animation function : using separate function
    function animationSingle(){
        if(i == length) 
        i = 0;
        textArea.innerHTML = animationArray[i++];
    }

    // starting function of animation
    function startAnimation(){
        start.disabled = true;
        stop.disabled = false;
        textArea.readOnly = true;
        
        var animationText = ANIMATIONS[animation.value];
        animationArray = animationText.split("=====\n");
        i = 0;
        length = animationArray.length;
        interval = setInterval(animationSingle, speed);

        animation.disabled = true;
    }

    // stop the animation
    function stopAnimation(){
        start.disabled = false;
        stop.disabled = true;
        clearInterval(interval);
        interval = null;
        animation.disabled = false;
        textArea.readOnly = false;
    }

    // change the font size
    function changeFontSize(){
        textArea.style.fontSize = fontsize.value;
    }

    // increase/decrease the speed of animation 
    function turboSpeed(){
        if(turbo.checked == true) {
            speed = 50;
        }
        else{
            speed = 250;
        }
        if(interval != null){ // clear and restart the animation
            clearInterval(interval); 
            interval = null;
            interval = setInterval(animationSingle, speed);
        }
    }

    function displayFirstAnimationTextOnScreen(){
        textArea.innerHTML = ANIMATIONS[animation.value];
    }
    
    var i;
    var length;
    var animationArray = null;
    var interval = null;
    var speed = 250;
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var animation = document.getElementById('animation');
    var fontsize = document.getElementById('fontsize');
    var turbo = document.getElementById('turbo');
    var textArea = document.getElementById('text-area');

    animation.onchange = displayFirstAnimationTextOnScreen;

    start.onclick = startAnimation;
    stop.onclick = stopAnimation;

    fontsize.onchange = changeFontSize;
    
    turbo.onchange = turboSpeed;

}