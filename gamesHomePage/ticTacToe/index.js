document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const values = document.querySelectorAll('.value');
    //each box value
    const topLeftBox = document.querySelector('#topL');
    const topCenterBox = document.querySelector('#topC');
    const topRightBox = document.querySelector('#topR');
    const midLeftBox = document.querySelector('#midL');
    const midCenterBox = document.querySelector('#midC');
    const midRightBox = document.querySelector('#midR');
    const botLeftBox = document.querySelector('#botL');
    const botCenterBox = document.querySelector('#botC');
    const botRightBox = document.querySelector('#botR');

    const turnIndicator = document.querySelector('.turn-indicator');
    turnIndicator.innerHTML = 'Turn: X';

    function endGame() {
        boxes.forEach((box) => {
            box.classList.add('clicked');
            turnIndicator.innerHTML = '';
        });
    }

    function restartGameBot() {
        alert('WINNER: Robot bipp buu bipp');
        drawCount = 0;
        removeValueToEachBox();
        turn = 0;
        turnIndicator.innerHTML = 'Turn: X';
        boxes.forEach((box) => {
            if (box.classList.contains('clicked')) {
                box.querySelector('.value').textContent = '';
                box.classList.remove('clicked');
                box.style.color = '';
            }
        });

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

    function restartGameDraw() {
        alert('DRAW!!!');
        drawCount = 0;
        removeValueToEachBox();
        turn = 0;
        turnIndicator.innerHTML = 'Turn: X';
        boxes.forEach((box) => {
            if (box.classList.contains('clicked')) {
                box.querySelector('.value').textContent = '';
                box.classList.remove('clicked');
                box.style.color = '';
            }
        });
    }

    function restartGameHuman() {
        alert('WINNER: Human');
        drawCount = 0;
        removeValueToEachBox();
        turn = 0;
        turnIndicator.innerHTML = 'Turn: X';
        boxes.forEach((box) => {
            if (box.classList.contains('clicked')) {
                box.querySelector('.value').textContent = '';
                box.classList.remove('clicked');
                box.style.color = '';
            }
        });

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

    let drawCount = 0;

    function verifyWinner() {
        //horizontalPart
        //topPart
        if (
            topLeftBox.classList.contains('X') &&
            topCenterBox.classList.contains('X') &&
            topRightBox.classList.contains('X')
        ) {
            topLeftBox.style.color = '#5ead7b';
            topCenterBox.style.color = '#5ead7b';
            topRightBox.style.color = '#5ead7b';
            setTimeout(() => restartGameHuman(), 800);
            endGame();
            return;
        }
        if (
            topLeftBox.classList.contains('O') &&
            topCenterBox.classList.contains('O') &&
            topRightBox.classList.contains('O')
        ) {
            topLeftBox.style.color = '#e06f67';
            topCenterBox.style.color = '#e06f67';
            topRightBox.style.color = '#e06f67';
            setTimeout(() => restartGameBot(), 800);
            endGame();
            return;
        }
        //midPart
        if (
            midLeftBox.classList.contains('X') &&
            midCenterBox.classList.contains('X') &&
            midRightBox.classList.contains('X')
        ) {
            midLeftBox.style.color = '#5ead7b';
            midCenterBox.style.color = '#5ead7b';
            midRightBox.style.color = '#5ead7b';
            setTimeout(() => restartGameHuman(), 800);
            endGame();
            return;
        }

        if (
            midLeftBox.classList.contains('O') &&
            midCenterBox.classList.contains('O') &&
            midRightBox.classList.contains('O')
        ) {
            midLeftBox.style.color = '#e06f67';
            midCenterBox.style.color = '#e06f67';
            midRightBox.style.color = '#e06f67';
            setTimeout(() => restartGameBot(), 800);
            endGame();
            return;
        }

        //botPart
        if (
            botLeftBox.classList.contains('X') &&
            botCenterBox.classList.contains('X') &&
            botRightBox.classList.contains('X')
        ) {
            botLeftBox.style.color = '#5ead7b';
            botCenterBox.style.color = '#5ead7b';
            botRightBox.style.color = '#5ead7b';
            setTimeout(() => restartGameHuman(), 800);
            endGame();
            return;
        }

        if (
            botLeftBox.classList.contains('O') &&
            botCenterBox.classList.contains('O') &&
            botRightBox.classList.contains('O')
        ) {
            botLeftBox.style.color = '#e06f67';
            botCenterBox.style.color = '#e06f67';
            botRightBox.style.color = '#e06f67';
            setTimeout(() => restartGameBot(), 800);
            endGame();
            return;
        }

        //verticalPart

        //leftPart
        if (
            topLeftBox.classList.contains('X') &&
            midLeftBox.classList.contains('X') &&
            botLeftBox.classList.contains('X')
        ) {
            topLeftBox.style.color = '#5ead7b';
            midLeftBox.style.color = '#5ead7b';
            botLeftBox.style.color = '#5ead7b';
            setTimeout(() => restartGameHuman(), 800);
            endGame();
            return;
        }

        if (
            topLeftBox.classList.contains('O') &&
            midLeftBox.classList.contains('O') &&
            botLeftBox.classList.contains('O')
        ) {
            topLeftBox.style.color = '#e06f67';
            midLeftBox.style.color = '#e06f67';
            botLeftBox.style.color = '#e06f67';
            setTimeout(() => restartGameBot(), 800);
            endGame();
            return;
        }
        //midPart
        if (
            topCenterBox.classList.contains('X') &&
            midCenterBox.classList.contains('X') &&
            botCenterBox.classList.contains('X')
        ) {
            topCenterBox.style.color = '#5ead7b';
            midCenterBox.style.color = '#5ead7b';
            botCenterBox.style.color = '#5ead7b';
            setTimeout(() => restartGameHuman(), 800);
            endGame();
            return;
        }

        if (
            topCenterBox.classList.contains('O') &&
            midCenterBox.classList.contains('O') &&
            botCenterBox.classList.contains('O')
        ) {
            topCenterBox.style.color = '#e06f67';
            midCenterBox.style.color = '#e06f67';
            botCenterBox.style.color = '#e06f67';
            setTimeout(() => restartGameBot(), 800);
            endGame();
            return;
        }
        //rightPart
        if (
            topRightBox.classList.contains('X') &&
            midRightBox.classList.contains('X') &&
            botRightBox.classList.contains('X')
        ) {
            topRightBox.style.color = '#5ead7b';
            midRightBox.style.color = '#5ead7b';
            botRightBox.style.color = '#5ead7b';
            setTimeout(() => restartGameHuman(), 800);
            endGame();
            return;
        }

        if (
            topRightBox.classList.contains('O') &&
            midRightBox.classList.contains('O') &&
            botRightBox.classList.contains('O')
        ) {
            topRightBox.style.color = '#e06f67';
            midRightBox.style.color = '#e06f67';
            botRightBox.style.color = '#e06f67';
            setTimeout(() => restartGameBot(), 800);
            endGame();
            return;
        }

        //diagonalPart
        //leftTop to botRight

        if (
            topLeftBox.classList.contains('X') &&
            midCenterBox.classList.contains('X') &&
            botRightBox.classList.contains('X')
        ) {
            topLeftBox.style.color = '#5ead7b';
            midCenterBox.style.color = '#5ead7b';
            botRightBox.style.color = '#5ead7b';
            setTimeout(() => restartGameHuman(), 800);
            endGame();
            return;
        }

        if (
            topLeftBox.classList.contains('O') &&
            midCenterBox.classList.contains('O') &&
            botRightBox.classList.contains('O')
        ) {
            topLeftBox.style.color = '#e06f67';
            midCenterBox.style.color = '#e06f67';
            botRightBox.style.color = '#e06f67';
            setTimeout(() => restartGameBot(), 800);
            endGame();
            return;
        }

        //RightTop to botLeft

        if (
            topRightBox.classList.contains('X') &&
            midCenterBox.classList.contains('X') &&
            botLeftBox.classList.contains('X')
        ) {
            topRightBox.style.color = '#5ead7b';
            midCenterBox.style.color = '#5ead7b';
            botLeftBox.style.color = '#5ead7b';
            setTimeout(() => restartGameHuman(), 800);
            endGame();
            return;
        }

        if (
            topRightBox.classList.contains('O') &&
            midCenterBox.classList.contains('O') &&
            botLeftBox.classList.contains('O')
        ) {
            topRightBox.style.color = '#e06f67';
            midCenterBox.style.color = '#e06f67';
            botLeftBox.style.color = '#e06f67';
            setTimeout(() => restartGameBot(), 800);
            endGame();
            return;
        }
        if (drawCount === 9) {
            topLeftBox.style.color = '#c9b785';
            topCenterBox.style.color = '#c9b785';
            topRightBox.style.color = '#c9b785';
            //--
            midLeftBox.style.color = '#c9b785';
            midCenterBox.style.color = '#c9b785';
            midRightBox.style.color = '#c9b785';
            //--
            botLeftBox.style.color = '#c9b785';
            botCenterBox.style.color = '#c9b785';
            botRightBox.style.color = '#c9b785';
            setTimeout(() => restartGameDraw(), 800);
        }
    }

    function giveValueToEachBox(boxId, value) {
        if (boxId === 'topL') {
            topLeftBox.classList.add(value);
        }
        if (boxId === 'topC') {
            topCenterBox.classList.add(value);
        }
        if (boxId === 'topR') {
            topRightBox.classList.add(value);
        }
        if (boxId === 'midL') {
            midLeftBox.classList.add(value);
        }
        if (boxId === 'midC') {
            midCenterBox.classList.add(value);
        }
        if (boxId === 'midR') {
            midRightBox.classList.add(value);
        }
        if (boxId === 'botL') {
            botLeftBox.classList.add(value);
        }
        if (boxId === 'botC') {
            botCenterBox.classList.add(value);
        }
        if (boxId === 'botR') {
            botRightBox.classList.add(value);
        }
        verifyWinner();
    }

    function removeValueToEachBox() {
        if (topLeftBox.classList.contains('X')) {
            topLeftBox.classList.remove('X');
        } else {
            topLeftBox.classList.remove('O');
        }
        if (topCenterBox.classList.contains('X')) {
            topCenterBox.classList.remove('X');
        } else {
            topCenterBox.classList.remove('O');
        }
        if (topRightBox.classList.contains('X')) {
            topRightBox.classList.remove('X');
        } else {
            topRightBox.classList.remove('O');
        }
        if (midLeftBox.classList.contains('X')) {
            midLeftBox.classList.remove('X');
        } else {
            midLeftBox.classList.remove('O');
        }
        if (midCenterBox.classList.contains('X')) {
            midCenterBox.classList.remove('X');
        } else {
            midCenterBox.classList.remove('O');
        }
        if (midRightBox.classList.contains('X')) {
            midRightBox.classList.remove('X');
        } else {
            midRightBox.classList.remove('O');
        }
        if (botLeftBox.classList.contains('X')) {
            botLeftBox.classList.remove('X');
        } else {
            botLeftBox.classList.remove('O');
        }
        if (botCenterBox.classList.contains('X')) {
            botCenterBox.classList.remove('X');
        } else {
            botCenterBox.classList.remove('O');
        }
        if (botRightBox.classList.contains('X')) {
            botRightBox.classList.remove('X');
        } else {
            botRightBox.classList.remove('O');
        }
    }

    let turn = 0;
    let boxId;
    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            if (!box.classList.contains('clicked')) {
                if (turn === 0) {
                    box.querySelector('.value').textContent = 'X';
                    turn = 1;
                    drawCount += 1;
                    turnIndicator.innerHTML = 'Turn: O';
                    giveValueToEachBox(box.getAttribute('id'), 'X');
                    setTimeout(() => botAction(box), 500);
                } else {
                    return true;
                }
                box.classList.add('clicked');
            }
        });
    });

    function botAction(clickedBox) {
        let randomNumber = Math.floor(Math.random() * 9);
        let box = boxes[randomNumber];

        if (!box.classList.contains('clicked')) {
            box.querySelector('.value').textContent = 'O';
            turn = 0;
            turnIndicator.innerHTML = 'Turn: X';
            giveValueToEachBox(box.getAttribute('id'), 'O');
            box.classList.add('clicked');
            drawCount += 1;
        } else {
            botAction(clickedBox);
        }
    }

    //end
});
