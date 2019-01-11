'use strict';

String.prototype.replaceAt = function (index, replacement) {
  if (replacement === undefined) {
    replacement = "";
  }
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (function () {
    return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
        window.setTimeout(callback, 1000 / 60);
      };
  })();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function chance(x, ofY) {
  // return true x times out ofY
  return getRandomIntInclusive(1, ofY) <= x;
}

function caseFlip(char, shouldFlip) {
  return shouldFlip ?
    (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()) :
    char;
}

function isBubble(char) {
  return char === 'o' || char === 'O';
}

const pre = document.getElementById("art");
const content = "   " + pre.innerHTML.split("-->")[1];
const original = content.split("\n");
const lines = content.split("\n");
const bubbleOrigin = {line: 19, char: 24};

function bubbleStep() {
  lines[0] = lines[0].replace(/[o|O]/, " ")
  for (let i = 1; i <= bubbleOrigin.line; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      const char = caseFlip(lines[i][j], chance(1, 2));
      if (isBubble(char)) {
        const originalChar = isBubble(original[i][j]) ? " " : original[i][j];
        lines[i] = lines[i].replaceAt(j, originalChar);

        let newPos = j - 2 + getRandomIntInclusive(0, 3);
        if (newPos < 0) newPos = 0;
        if (newPos >= lines[i - 1].length) newPos = lines[i - 1].length - 1;
        lines[i - 1] = lines[i - 1].replaceAt(newPos, char);
      }
    }
  }

  if (chance(3, 5)) {
    const newBubblePos = bubbleOrigin.char - 2 + getRandomIntInclusive(0, 3);
    lines[bubbleOrigin.line] = lines[bubbleOrigin.line].replaceAt(newBubblePos, "oO".charAt(getRandomIntInclusive(0, 1)));
  }

  pre.innerHTML = pre.innerHTML.split("-->")[0] + "-->" + lines.join("\n");
}

function animate() {
  window.requestAnimationFrame(function () {
    bubbleStep();
    setTimeout(animate, 150);
  });
}

animate();
