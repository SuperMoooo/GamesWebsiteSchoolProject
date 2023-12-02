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

    const resetBtn = document.querySelector('.reset-btn');

    const textWinner = document.querySelector('.textWinner');

    const turnIndicator = document.querySelector('.turn-indicator');
    turnIndicator.innerHTML = 'Turn: X';

    function endGame() {
        boxes.forEach((box) => {
            box.classList.add('clicked');
            turnIndicator.innerHTML = '';
        });
    }

    function restartGame() {
        removeValueToEachBox();
        textWinner.innerHTML = '';
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
            textWinner.innerHTML = 'Winner: X';
            endGame();
        }
        if (
            topLeftBox.classList.contains('O') &&
            topCenterBox.classList.contains('O') &&
            topRightBox.classList.contains('O')
        ) {
            topLeftBox.style.color = '#5ead7b';
            topCenterBox.style.color = '#5ead7b';
            topRightBox.style.color = '#5ead7b';
            textWinner.innerHTML = 'Winner: O';
            endGame();
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
            textWinner.innerHTML = 'Winner: X';
            endGame();
        }

        if (
            midLeftBox.classList.contains('O') &&
            midCenterBox.classList.contains('O') &&
            midRightBox.classList.contains('O')
        ) {
            midLeftBox.style.color = '#5ead7b';
            midCenterBox.style.color = '#5ead7b';
            midRightBox.style.color = '#5ead7b';
            textWinner.innerHTML = 'Winner: O';
            endGame();
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
            textWinner.innerHTML = 'Winner: X';
            endGame();
        }

        if (
            botLeftBox.classList.contains('O') &&
            botCenterBox.classList.contains('O') &&
            botRightBox.classList.contains('O')
        ) {
            botLeftBox.style.color = '#5ead7b';
            botCenterBox.style.color = '#5ead7b';
            botRightBox.style.color = '#5ead7b';
            textWinner.innerHTML = 'Winner: O';
            endGame();
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
            textWinner.innerHTML = 'Winner: X';
            endGame();
        }

        if (
            topLeftBox.classList.contains('O') &&
            midLeftBox.classList.contains('O') &&
            botLeftBox.classList.contains('O')
        ) {
            topLeftBox.style.color = '#5ead7b';
            midLeftBox.style.color = '#5ead7b';
            botLeftBox.style.color = '#5ead7b';
            textWinner.innerHTML = 'Winner: O';
            endGame();
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
            textWinner.innerHTML = 'Winner: X';
            endGame();
        }

        if (
            topCenterBox.classList.contains('O') &&
            midCenterBox.classList.contains('O') &&
            botCenterBox.classList.contains('O')
        ) {
            topCenterBox.style.color = '#5ead7b';
            midCenterBox.style.color = '#5ead7b';
            botCenterBox.style.color = '#5ead7b';
            textWinner.innerHTML = 'Winner: O';
            endGame();
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
            textWinner.innerHTML = 'Winner: X';
            endGame();
        }

        if (
            topRightBox.classList.contains('O') &&
            midRightBox.classList.contains('O') &&
            botRightBox.classList.contains('O')
        ) {
            topRightBox.style.color = '#5ead7b';
            midRightBox.style.color = '#5ead7b';
            botRightBox.style.color = '#5ead7b';
            textWinner.innerHTML = 'Winner: O';
            endGame();
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
            textWinner.innerHTML = 'Winner: X';
            endGame();
        }

        if (
            topLeftBox.classList.contains('O') &&
            midCenterBox.classList.contains('O') &&
            botRightBox.classList.contains('O')
        ) {
            topLeftBox.style.color = '#5ead7b';
            midCenterBox.style.color = '#5ead7b';
            botRightBox.style.color = '#5ead7b';
            textWinner.innerHTML = 'Winner: O';
            endGame();
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
            textWinner.innerHTML = 'Winner: X';
            endGame();
        }

        if (
            topRightBox.classList.contains('O') &&
            midCenterBox.classList.contains('O') &&
            botLeftBox.classList.contains('O')
        ) {
            topRightBox.style.color = '#5ead7b';
            midCenterBox.style.color = '#5ead7b';
            botLeftBox.style.color = '#5ead7b';
            textWinner.innerHTML = 'Winner: O';
            endGame();
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

    boxes.forEach((box) => {
        box.addEventListener('click', () => {
            const boxId = box.getAttribute('id');
            if (!box.classList.contains('clicked')) {
                if (turn === 0) {
                    box.querySelector('.value').textContent = 'X';
                    turn = 1;
                    turnIndicator.innerHTML = 'Turn: O';
                    giveValueToEachBox(boxId, 'X');
                } else {
                    box.querySelector('.value').textContent = 'O';
                    turn = 0;
                    turnIndicator.innerHTML = 'Turn: X';
                    giveValueToEachBox(boxId, 'O');
                }
                box.classList.add('clicked');
            }
        });
    });

    resetBtn.addEventListener('click', restartGame);

    //end
});
