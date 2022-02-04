---
title: Send Me Money
redirect_from: /btc
---

I assume you're here because you want to pay me for something or just send me some money. Thank you! Here's how to do that:

## Fiat

- [Paypal](https://www.paypal.com/paypalme/alexgrin)
- [Venmo](https://www.venmo.com/u/lyoshenka) `@lyoshenka`


## Crypto

Click addresses to expand them and show QR code

<p id="addresses"></p>{% comment %}must be right before address list or JS breaks{% endcomment %}

- BTC: `bc1q9763kvq2rn4hakwy6rwy7y5ef2a2luz3k7t0z60yvh6clzfajlfsq2hsfl`
- ETH: `agrin.eth` or `0x3dedb545e9b89f63fa71ab75497735d802c9d26f`
- SOL: `grin.sol` or `7gTmu6nMCAR4URzcoJVvYx8bzeiWyQvrXLcp8ivuXu7v`
- LBC: `@grin` or `bTgZsMQaggj2j1wxsX7L5gciTX3g6vzKgX`


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
    const qrSelector = "#addresses + ul code"

    function show(e) {
      const addr = e.target.getAttribute("data-address")
      if (e.target.innerHTML != addr) {
        e.target.innerHTML = addr // avoid repaint that breaks text selection
      }
      qr.set({value: addr});
      canvas.style.display = "block";
      window.getSelection().selectAllChildren(e.target);
    };

    function hide() {
      canvas.style.display = "none";
    };

    const elements = document.querySelectorAll(qrSelector);
    Array.prototype.forEach.call(elements, function(el, i){
      const addr = el.innerHTML
      if (addr.length > 16) { // addresses, not names
        el.style.cursor = "pointer";
        el.addEventListener("click", show);
        el.setAttribute("data-address", addr)
        el.innerHTML = addr.substring(0,7) + '...' + addr.substring(addr.length-4)
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
