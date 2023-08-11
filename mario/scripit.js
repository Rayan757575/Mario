function start() {
    /*variáveis*/
    const mario = document.querySelector('.mario');
    const pipe = document.querySelector('.pipe');
    const message = document.querySelector('.game-over');
    const button = document.querySelector('.button');


    function starButton() {
        /*start the pipe's animation*/
        pipe.style.animation = 'pipe-animation 1.5s infinite linear';
        pipe.style.opacity = '1';
        button.style.opacity = '0';
    }
    const jump = () => {
        /*make the chareter jump*/
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
    function game_end() {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        /*check if the game is over*/
        if (pipePosition <= 140 && pipePosition > 0 && marioPosition < 100) {

            pipe.style.animation = 'none';
            pipe.style.left = pipePosition + 'px';
            mario.style.opacity = '0';

            setTimeout(() => {
                /*change the "chareter"*/
                mario.style.opacity = '1';
                mario.src = "loser.gif";
                mario.style.left = '47vw';
                mario.style.bottom = '52vh';
                mario.style.transition = '3s';
                mario.style.animation = 'none';
            }, 500);

            setTimeout(() => {
                /*make the messege visible*/
                message.style.opacity = '1';
            }, 2500);

            clearInterval(loop);
        }
    }

    starButton();

    document.addEventListener('keydown', jump); /*make the chareter jump, if you press any key*/
    const loop = setInterval(game_end, 10); /*call "game_end" function every 10ms*/

}