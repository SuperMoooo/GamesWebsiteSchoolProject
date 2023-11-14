document.addEventListener('DOMContentLoaded', () => {
    let heads = 0;
    let tails = 0;
    const Coin = document.querySelector('.coinSpace');
    const flipBtn = document.querySelector('#flipBtn');
    const resetBtn = document.querySelector('#resetBtn');
    const headScore = document.querySelector('.headScore');
    const tailsScore = document.querySelector('.tailsScore');

    flipBtn.addEventListener('click', () => {
        let i = Math.floor(Math.random() * 2);
        Coin.style.animation = 'none';
        flipBtn.disabled = true;
        if (i) {
            Coin.style.animation = 'flipCoinHead 3s ease forwards';
            heads++;
        } else {
            Coin.style.animation = 'flipCoinTails 3s ease forwards';
            tails++;
        }
        setTimeout(setScore, 3000);
    });

    function setScore() {
        headScore.innerHTML = `Heads: ${heads}`;
        tailsScore.innerHTML = `Tails: ${tails}`;
        flipBtn.disabled = false;
        resetBtn.disabled = false;
    }

    resetBtn.addEventListener('click', () => {
        heads = 0;
        tails = 0;
        flipBtn.disabled = false;
        resetBtn.disabled = true;
        Coin.style.animation = 'none';
        headScore.innerHTML = `Heads: ${heads}`;
        tailsScore.innerHTML = `Tails: ${tails}`;
    });
    resetBtn.disabled = true;
    //end
});
