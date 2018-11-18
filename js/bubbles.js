'use strict';

String.prototype.replaceAt=function(index, replacement) {
    if (replacement === undefined) {
      replacement = "";
    }
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

if ( !window.requestAnimationFrame ) {
  window.requestAnimationFrame = ( function() {
    return window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
      window.setTimeout( callback, 1000 / 60 );
    };
  } )();
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function chance(x, ofY) {
  // return true x times out ofY
  return getRandomIntInclusive(1,ofY) <= x;
}

const pre = document.getElementById("art");
const content = "   "+pre.innerHTML.split("-->")[1];
const original = content.split("\n");
const lines = content.split("\n");
const bubbleOrigin = [19, 24];

function bubbleStep() {
  lines.forEach(function(line, lineNo){
    if (lineNo == 0) {
      lines[lineNo] = line.replace(/[o|O]/, " ")
    } else {
      line.split("").forEach(function(char, charNo) {
        if (char === "o" || char === "O") {
          var originalChar = original[lineNo][charNo];
          if (originalChar == "o" || originalChar == "O") {
            originalChar = " ";
          }
          lines[lineNo] = lines[lineNo].replaceAt(charNo, originalChar);
          if (chance(1,2)) {
            char = (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase());
          }
          lines[lineNo-1] = lines[lineNo-1].replaceAt(Math.max(0, charNo-2+getRandomIntInclusive(0,3)), char);
        }
      })
    }
  });
  if (chance(3,5)) {
    const x = bubbleOrigin[0];
    const y = bubbleOrigin[1]-2+getRandomIntInclusive(0,3);
    lines[x] = lines[x].replaceAt(y, "oO".charAt(getRandomIntInclusive(0,1)));
  }
  pre.innerHTML = pre.innerHTML.split("-->")[0] + "-->" + lines.join("\n");
}

function animate() {
  window.requestAnimationFrame(function(){
    bubbleStep();
    setTimeout(animate, 150);
  });
}

animate();
