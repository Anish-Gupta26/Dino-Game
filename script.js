score = 0;
cross = true;

audiogo = new Audio('gameover.mp3');
audio = new Audio('music.mp3');
setTimeout(() => {
    audio.play();
}, 1000);

document.onkeydown = function(e){
    console.log("Key pressed is "+e.key);
    if(e.key=='ArrowUp')
    {
        var dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if(e.key=='ArrowRight')
    {
       dino = document.querySelector('.dino')
       dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
       dino.style.left = dinox + 112 + "px";
    }
    if(e.key=='ArrowLeft')
    {
        dino = document.querySelector('.dino')
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinox - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
     
    // for the coordinates
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left')); 
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top')); 
    
    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left')); 
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top')); 
 
    leftdiff = Math.abs(dx-ox);
    topdiff = Math.abs(dy-oy);
     //console.log(leftdiff,topdiff);
     if(leftdiff<73 && topdiff<52)
     {
         gameOver.innerHTML = "Game Over!!!";
         obstacle.classList.remove('obstacleAni');
          cross = false;
          audiogo.play();
          setTimeout(() => {
              audiogo.pause();
              audio.pause();
          }, 1000);
     }
     else if(leftdiff<145 && cross)
     {
            score++;
            updateScore(score);
            cross = false;
            setTimeout(() => {
                cross = true;
            }, 1000);
            setTimeout(() => {
                aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
                nextDur= aniDur - 0.1;
                obstacle.style.animationDuration= nextDur + 's';
            }, 500);
     }
 

}, 10);

 scoreCount = document.querySelector('.scoreCount');
function updateScore(score)
{
    scoreCount.innerHTML = "Your score is "+ score;
}
//scoreCount.style.color = 'pink';