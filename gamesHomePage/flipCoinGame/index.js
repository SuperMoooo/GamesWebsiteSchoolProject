document.addEventListener('DOMContentLoaded', () => {
    let player = 0;
    let bot = 0;
    const Coin = document.querySelector('.coinSpace');
    const flipBtn = document.querySelector('#flipBtn');
    const playerScore = document.querySelector('.playerScore');
    const botScore = document.querySelector('.botScore');

    const headBtn = document.querySelector('#heads');
    const tailBtn = document.querySelector('#tails');

    let selected;
    let btnChooseBool;

    headBtn.addEventListener('click', () => {
        if (btnChooseBool) {
            tailBtn.disabled = false;
            flipBtn.disabled = true;
            selected = 0;
            btnChooseBool = 0;
        } else {
            tailBtn.disabled = true;
            flipBtn.disabled = false;
            btnChooseBool = 1;
            selected = 1;
        }
    });

    tailBtn.addEventListener('click', () => {
        if (btnChooseBool) {
            headBtn.disabled = false;
            flipBtn.disabled = true;
            selected = 1;
            btnChooseBool = 0;
        } else {
            headBtn.disabled = true;
            flipBtn.disabled = false;
            btnChooseBool = 1;
            selected = 0;
        }
    });

    flipBtn.addEventListener('click', () => {
        let i = Math.floor(Math.random() * 2);
        Coin.style.animation = 'none';
        flipBtn.disabled = true;
        tailBtn.disabled = true;
        headBtn.disabled = true;
        if (i) {
            Coin.style.animation = 'flipCoinHead 3s ease forwards';
            if (selected) {
                player++;
            } else {
                bot++;
            }
        } else {
            Coin.style.animation = 'flipCoinTails 3s ease forwards';
            if (!selected) {
                player++;
            } else {
                bot++;
            }
        }
        setTimeout(setScore, 2600);
    });

    function setScore() {
        playerScore.innerHTML = `Player: ${player}`;
        botScore.innerHTML = `Bot: ${bot}`;
        flipBtn.disabled = true;
        tailBtn.disabled = false;
        headBtn.disabled = false;
        btnChooseBool = 0;
        selected = 0;
        checkWinner();
    }

    function checkWinner() {
        if (player === 3) {
            setTimeout(() => resetScoresPlayer(), 800);
        }

        if (bot === 3) {
            setTimeout(() => resetScoresBot(), 800);
        }
    }

    function resetScoresPlayer() {
        player = 0;
        bot = 0;
        selected = 0;
        flipBtn.disabled = true;
        tailBtn.disabled = false;
        headBtn.disabled = false;
        Coin.style.animation = 'none';
        playerScore.innerHTML = `Player: ${player}`;
        botScore.innerHTML = `Bot: ${bot}`;
        alert('Winner: Human');

        fetch('../winScore.php')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => {
                // Handle the response from the PHP script (if needed)
                console.log(data);
            })
            .catch((error) => {
                console.error(
                    'There was a problem with the fetch operation:',
                    error
                );
            });
    }

    function resetScoresBot() {
        player = 0;
        bot = 0;
        selected = 0;
        flipBtn.disabled = true;
        tailBtn.disabled = false;
        headBtn.disabled = false;
        Coin.style.animation = 'none';
        playerScore.innerHTML = `Player: ${player}`;
        botScore.innerHTML = `Bot: ${bot}`;
        alert('Winner: Robot bippp buuuu bip bu');

        fetch('../lostScore.php')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then((data) => {
                // Handle the response from the PHP script (if needed)
                console.log(data);
            })
            .catch((error) => {
                console.error(
                    'There was a problem with the fetch operation:',
                    error
                );
            });
    }

    //end
});
