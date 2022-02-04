---
title: Send Me Money
redirect_from: /btc
---

I assume you're here because you want to pay me for something or just send me some money. Thank you! Here's how to do that:

## Fiat

- [Paypal](https://www.paypal.com/paypalme/alexgrin)
- [Venmo](https://www.venmo.com/u/lyoshenka) `@lyoshenka`


## Crypto

- BTC: `bc1q9763kvq2rn4hakwy6rwy7y5ef2a2luz3k7t0z60yvh6clzfajlfsq2hsfl`
- ETH: `agrin.eth` or `0x3dedb545e9b89f63fa71ab75497735d802c9d26f`
- SOL: `grin.sol` or `7gTmu6nMCAR4URzcoJVvYx8bzeiWyQvrXLcp8ivuXu7v`
- LBC: `@grin` or `bTgZsMQaggj2j1wxsX7L5gciTX3g6vzKgX`

_Click address to show QR code_

<canvas id="qr" style="display:none;position:fixed;top:5px;right:5px;height:300px;width:300px"></canvas>


## Cash

if you know, you know


<script type="text/javascript" src="/js/qrious.min.js"></script>
<script>
(function() {
  function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function(){
    const canvas = document.getElementById('qr');
    const qr = new QRious({element: canvas, size: 300});
    const qrSelector = "#crypto + ul code"

    function show(e) {
      qr.set({value: e.target.innerHTML});
      canvas.style.display = "block";
    };

    function hide() {
      canvas.style.display = "none";
    };

    const elements = document.querySelectorAll(qrSelector);
    Array.prototype.forEach.call(elements, function(el, i){
      if (el.innerHTML.length > 16) { // addresses, not names
        el.style.cursor = "pointer";
        el.addEventListener("click", show);
        //el.addEventListener("mouseout", hide);
        //el.setAttribute("data-qr", "")
      }
    });

    document.addEventListener("click", function(e) {
      // loop parent nodes from the target to the delegation node
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches(qrSelector)) {
          return;
        }
      }
      canvas.style.display = "none";
    }, false);
  })
})();

</script>
