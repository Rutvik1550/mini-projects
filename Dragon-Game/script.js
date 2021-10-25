
let score = 0;
let cross = true;

//Audio is set for the game
let audio = new Audio("./music/music.mp3");
let audioGameOver = new Audio("./music/gameover.mp3");
setTimeout(() => {
    audio.play();
}, 100);

//keyboard control is set for the game
document.onkeydown = (e) => {

    if (e.keyCode === 38 || e.keyCode === 32) {
        const dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    }
    if (e.keyCode === 39) {
        const dino = document.querySelector('.dino');
        let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX + 112) + 'px';
    }
    if (e.keyCode === 37) {
        const dino = document.querySelector('.dino');
        let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + 'px';
    }
};

//condition chacking on evry 10 milisecond
setInterval(() => {
    let dino = document.querySelector('.dino');
    let gameOver = document.querySelector('.gameOver');
    let obstacle = document.querySelector('.obstacle');


    let dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dinoY = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    let obstacleX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    let obstacleY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    let offSetX = Math.abs(dinoX - obstacleX);
    let offSetY = Math.abs(dinoY - obstacleY);

    //Game over condition 
    if (offSetX < 50 && offSetY < 10) {

        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');

        // audio play and pause on game over...
        audioGameOver.play();
        setTimeout(() => {
            audioGameOver.pause();
            audio.pause();
        }, 1000);

    //score update condition 
    } else if (offSetX < 140 && cross) {
        score++;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);

        //obstacle speed increasing
        let aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
        if (aniDur > 2) {
            setTimeout(() => {
                let newAniDur = aniDur - 0.1;
                obstacle.style.animationDuration = newAniDur + 's';
            }, 550);
        }
    }

}, 10);

//score updating function
function updateScore(score) {
    document.querySelector('.scoreCount').innerHTML = `Your Score: ${score}`;
}