---
title: Logo Colorizer
layout: page
---

<script src="/js/iro-v5.js"></script>

<style>
#pickers {
  display: flex;
  margin-top: 2rem;
}
#pickers > div {
  flex: 1;
}
input {
  width: 50%;
}
#logo {
  margin: 2rem auto;
  max-width: 420px;
}
#logo svg {
  display: block;
  margin: 0 auto;
}
</style>

<div id="pickers">
  <div>
    <h3>FG</h3>
    <input type="text" />
    <div id="fgpicker"></div>
  </div>
  <div>
    <h3>BG</h3>
    <input type="text" />
    <div id="bgpicker"></div>
  </div>
</div>
<a href="javascript:;" onclick="swap()">swap</a>
<a href="">reset</a>

<div id="logo">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 419.99999" height="420" width="420" version="1.1">
  <g transform="translate(31.097601,-8.1231873)">
    <path
       d="m 65.387734,173.01215 c -6.87382,-6.92691 -6.90655,-6.98589 -5.028,-9.06166 1.03997,-1.14915 8.55332,-8.91903 16.69633,-17.26639 l 14.805494,-15.17702 -16.739884,-16.76161 -16.73986,-16.76162 6.96224,-7.01601 6.96224,-7.016001 16.76881,16.747041 16.768796,16.74704 17.00121,-16.97914 17.0012,-16.979141 7.23897,7.238971 7.23897,7.23896 -16.97915,17.00121 -16.97914,17.0012 16.73444,16.75618 16.73443,16.75618 -7.03569,7.39324 -7.03569,7.39323 -16.70449,-17.14429 -16.70448,-17.14428 -17.023936,17.00309 -17.02395,17.0031 z"
       style="fill:#333333;fill-opacity:1" />
    <path
       d="m 252.16913,81.439431 c -21.20237,-0.170212 -41.19093,13.339279 -48.28515,35.402339 -1.98804,6.18281 -2.23072,8.55234 -1.78711,17.39258 0.53143,10.59041 2.35843,16.73466 7.4082,24.91015 5.78283,9.36231 14.84956,16.43113 26.22656,20.44727 8.72481,3.07991 22.05732,3.25553 31.25782,0.41211 21.1751,-6.5442 34.97265,-25.49477 34.97265,-48.03516 0,-20.05402 -10.67834,-37.070137 -28.61914,-45.609367 -6.90475,-3.286435 -14.10637,-4.863185 -21.17383,-4.919922 z m 0.86524,20.068359 c 10.59123,0.22508 20.34384,6.18171 25.70703,16.69531 2.8899,5.66529 3.39649,7.68762 3.39649,13.55078 0,12.12197 -6.71093,22.62027 -17.79493,27.83984 -7.0272,3.3087 -17.979,3.30726 -25,-0.004 -11.1019,-5.23578 -17.51456,-15.47409 -17.47656,-27.90039 0.0374,-12.29438 5.70976,-21.49489 16.53906,-26.82616 4.8271,-2.37637 9.81471,-3.45778 14.62891,-3.35547 z"
       style="fill:#333333;fill-opacity:1" />
    <path
       d="m 158.76372,353.46877 c -54.08019,-6.55446 -101.502166,-39.94704 -126.051216,-88.76 -4.4005,-8.74989 -9.20327,-20.73945 -8.56391,-21.3788 0.55929,-0.5593 18.00105,-6.39608 18.24835,-6.1067 0.11502,0.13459 1.98786,4.51971 4.16186,9.74471 15.05954,36.19408 47.407634,66.7307 84.137336,79.42572 17.51769,6.0547 28.31693,7.86627 47.14776,7.90902 23.25282,0.0528 41.18518,-3.73297 60.55278,-12.7835 32.4213,-15.15057 58.9107,-42.47238 72.3895,-74.66436 2.0451,-4.88452 3.9498,-9.1123 4.2326,-9.39506 0.2827,-0.28276 4.6048,0.90844 9.6045,2.64711 l 9.0905,3.16121 -2.3798,6.32238 c -1.3088,3.4773 -4.8795,11.17227 -7.9348,17.09993 -25.2011,48.89288 -74.0235,81.9088 -128.97896,87.22152 -13.54566,1.30951 -22.06942,1.20356 -35.6565,-0.44318 z"
       style="fill:#333333;fill-opacity:1" />
  </g>
</svg>
</div>


<script>
  function setHash(newFg,newBg) {
    history.replaceState(null, null, '#' + newFg.replace('#','') + "," + newBg.replace('#',''));
  }

  const hash = window.location.hash.substr(1);
  const fgIn = document.querySelector("#pickers div:first-child input");
  const bgIn = document.querySelector("#pickers div:last-child input");
  const fgcolorPicker = new iro.ColorPicker('#fgpicker');
  const bgcolorPicker = new iro.ColorPicker('#bgpicker');
  const fgSvg = document.querySelectorAll("#logo path");
  const bgSvg = document.querySelectorAll("#logo");

  const colorFg = function (color) {
    Array.prototype.forEach.call(fgSvg, function(el, i){
      el.style.fill = color;
    });
  };
  const colorBg = function(color) {
    Array.prototype.forEach.call(bgSvg, function(el, i){
      el.style.backgroundColor = color;
    });
  };

  const swap = function() {
    var f = fgcolorPicker.color.hexString;
    var b = bgcolorPicker.color.hexString;
    fgcolorPicker.setColors([b]);
    bgcolorPicker.setColors([f]);
  };


  fgIn.addEventListener("change", function(e) {
    fgcolorPicker.setColors([fgIn.value]);
  });
  bgIn.addEventListener("change", function(e) {
    bgcolorPicker.setColors([bgIn.value]);
  });

  fgcolorPicker.on(['color:init', 'color:change'], function(color) {
    colorFg(color.hexString);
    fgIn.value = color.hexString;
    setHash(color.hexString, bgIn.value);
  });

  bgcolorPicker.on(['color:init', 'color:change'], function(color) {
    colorBg(color.hexString);
    bgIn.value = color.hexString;
    setHash(fgIn.value, color.hexString);
  });

  const [fg, bg] = hash.split(",");
  fgcolorPicker.setColors(["#" + (fg || "02f")]);
  bgcolorPicker.setColors(["#" + (bg || "fff")]);
</script>
