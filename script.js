var currentPosition = 19;
var eatPosition1 = 0;
var eatPosition2 = 9;
var eatPosition3 = 13;
var eatPosition4 = 2;
var eatPosition5 = 16;
var eatPosition6 = 22;
var eatPosition7 = 26;
var score  = 0;
var eatenIndexes = [];
var timer = 4;

document.getElementById('timer').innerHTML = 'timer :' + timer + " detik"

var initialSnakeWidth= 30;

var interval = setInterval(function() {
    timer--;
    if (timer === 0) {
        clearInterval(interval)
        alert("GAME SELESAI!.\nSCORE ANDA :" + score)
        window.location.reload()
    }
    document.getElementById('timer').innerHTML = 'timer :' + timer + " detik"
}, 1000)

function bodyOnKeyDown (event) {
    
    var boxes = document.getElementsByClassName('box');

    var style = `width:${initialSnakeWidth}px; height:${initialSnakeWidth}`;

    var character = document.createElement('h1');
        character.setAttribute('id','snake')
        character.setAttribute("style", style);
    var newh1 = document.createElement('h1');
        newh1.appendChild(character);

    if (event.key === 'ArrowRight') {
        if (currentPosition !== 5 &&
            currentPosition !== 11 &&
            currentPosition !== 17 &&
            currentPosition !== 23 &&
            currentPosition !== 29) {
            boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
            boxes[currentPosition + 1].appendChild(character);
            currentPosition = currentPosition + 1;            
        }
    } else if (event.key === 'ArrowLeft') {
        if (currentPosition !== 0 &&
            currentPosition !== 6 &&
            currentPosition !== 12 &&
            currentPosition !== 18 &&
            currentPosition !== 24) {
            boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
            boxes[currentPosition - 1].appendChild(character);
            currentPosition = currentPosition - 1;
        }
    }
    if (event.key === 'ArrowUp') {
        if (currentPosition !== 0 &&
            currentPosition !== 1 &&
            currentPosition !== 2 &&
            currentPosition !== 3 &&
            currentPosition !== 4 &&
            currentPosition !== 5) {
            boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
            boxes[currentPosition - 6].appendChild(character);
            currentPosition = currentPosition - 6;            
        } 
    } else if (event.key === 'ArrowDown') {
        if (currentPosition !== 24 &&
        currentPosition !== 25 &&
        currentPosition !== 26 &&
        currentPosition !== 27 &&
        currentPosition !== 28 &&
        currentPosition !== 29) {
        boxes[currentPosition].removeChild(boxes[currentPosition].childNodes[0]);
        boxes[currentPosition + 6].appendChild(character);
        currentPosition = currentPosition + 6;
        }
    }
    if (boxes[currentPosition] === boxes[eatPosition1]) {
        if (eatenIndexes.indexOf(eatPosition1) === -1) {
            boxes[eatPosition1].removeChild(boxes[eatPosition1].childNodes[0]);
            boxes[eatPosition1].appendChild(character);
            score++
            eatenIndexes.push(eatPosition1)
            initialSnakeWidth += 5

            var style = `width:${initialSnakeWidth}px; height:${initialSnakeWidth}` 

            document.getElementById("snake").setAttribute("style", style);
            document.getElementById('point').innerHTML = 'point :' + score
        }
         
    } else if (boxes[currentPosition] === boxes[eatPosition2]) {
        if (eatenIndexes.indexOf(eatPosition2) === -1) {
            boxes[eatPosition2].removeChild(boxes[eatPosition2].childNodes[0]);
            boxes[eatPosition2].appendChild(character);
            score++
            eatenIndexes.push(eatPosition2)
            initialSnakeWidth += 5

            var style = `width:${initialSnakeWidth}px; height:${initialSnakeWidth}` 

            document.getElementById("snake").setAttribute("style", style);
            document.getElementById('point').innerHTML = 'point :' + score
        }
    } else if (boxes[currentPosition] === boxes[eatPosition3]) {
        if (eatenIndexes.indexOf(eatPosition3) === -1) {
            boxes[eatPosition3].removeChild(boxes[eatPosition3].childNodes[0]);
            boxes[eatPosition3].appendChild(character);
            score++
            eatenIndexes.push(eatPosition3)
            initialSnakeWidth += 5

            var style = `width:${initialSnakeWidth}px; height:${initialSnakeWidth}` 

            document.getElementById("snake").setAttribute("style", style);
            document.getElementById('point').innerHTML = 'point :' + score
        }
    } else if (boxes[currentPosition] === boxes[eatPosition4]) {
        if (eatenIndexes.indexOf(eatPosition4) === -1) {
            boxes[eatPosition4].removeChild(boxes[eatPosition4].childNodes[0]);
            boxes[eatPosition4].appendChild(character);
            score++
            eatenIndexes.push(eatPosition4)
            initialSnakeWidth += 5

            var style = `width:${initialSnakeWidth}px; height:${initialSnakeWidth}` 

            document.getElementById("snake").setAttribute("style", style);
            document.getElementById('point').innerHTML = 'point :' + score
        }
    } else if (boxes[currentPosition] === boxes[eatPosition5]) {
        if (eatenIndexes.indexOf(eatPosition5) === -1) {
            boxes[eatPosition5].removeChild(boxes[eatPosition5].childNodes[0]);
            boxes[eatPosition5].appendChild(character);
            score++
            eatenIndexes.push(eatPosition5)
            initialSnakeWidth += 5

            var style = `width:${initialSnakeWidth}px; height:${initialSnakeWidth}` 

            document.getElementById("snake").setAttribute("style", style);
            document.getElementById('point').innerHTML = 'point :' + score
        }
    } else if (boxes[currentPosition] === boxes[eatPosition6]) {
        if (eatenIndexes.indexOf(eatPosition6) === -1) {
            boxes[eatPosition6].removeChild(boxes[eatPosition6].childNodes[0]);
            boxes[eatPosition6].appendChild(character);
            score++
            eatenIndexes.push(eatPosition6)
            initialSnakeWidth += 5

            var style = `width:${initialSnakeWidth}px; height:${initialSnakeWidth}` 

            document.getElementById("snake").setAttribute("style", style);
            document.getElementById('point').innerHTML = 'point :' + score
        }
    } else if (boxes[currentPosition] === boxes[eatPosition7]) {
        if (eatenIndexes.indexOf(eatPosition7) === -1) {
            boxes[eatPosition7].removeChild(boxes[eatPosition7].childNodes[0]);
            boxes[eatPosition7].appendChild(character);
            score++
            eatenIndexes.push(eatPosition7)
            initialSnakeWidth += 5

            var style = `width:${initialSnakeWidth}px; height:${initialSnakeWidth}` 

            document.getElementById("snake").setAttribute("style", style);
            document.getElementById('point').innerHTML = 'point :' + score
        }
    }
}