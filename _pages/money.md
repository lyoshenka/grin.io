---
title: Send Me Money
redirect_from: /btc
---

I assume you're here because you want to pay me for something or just send me some money. Thank you! Here's how to do that:

## Fiat

- [Paypal](https://www.paypal.com/paypalme/alexgrin)
- [Venmo](https://www.venmo.com/u/lyoshenka) `@lyoshenka`


## Crypto

Click addresses to expand and show QR code

- BTC: `bc1qp48hdsjg6z2faw2pcsjsgd5p53qplwlahc0s7qkxajut6m2v6snqm98x6p`
- ETH: `agrin.eth` or `0x3dedb545e9b89f63fa71ab75497735d802c9d26f`
- SOL: `grin.sol` or `7gTmu6nMCAR4URzcoJVvYx8bzeiWyQvrXLcp8ivuXu7v`
- LBC: `@grin` or `bTgZsMQaggj2j1wxsX7L5gciTX3g6vzKgX`


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
    const qrSize = Math.min(window.innerHeight*0.8, window.innerWidth*0.8, 300);

    const canvas = document.createElement('canvas');
    canvas.style.cssText = "display:none;position:fixed;top:5px;right:5px;";
    canvas.style.width = qrSize + "px";
    canvas.style.height = qrSize + "px";
    document.body.appendChild(canvas);

    const qr = new QRious({element: canvas, size: qrSize});

    function show(e) {
      const addr = e.target.getAttribute("data-address")
      if (e.target.innerHTML != addr) {
        e.target.innerHTML = addr // avoid repaint that breaks text selection
      }
      qr.set({value: addr});
      canvas.style.display = "block";
      window.getSelection().selectAllChildren(e.target);

      // if address is behind qr code, scoll it down
      const distToTop = e.target.getBoundingClientRect().top;
      if (distToTop < qrSize) {
        window.scrollBy(0,distToTop-qrSize-40); // 40px extra space
      }
    };

    function hide() {
      canvas.style.display = "none";
    };

    const elements = document.querySelectorAll("ul code");
    Array.prototype.forEach.call(elements, function(el, i){
      const addr = el.innerHTML
      if (addr.length > 20) { // addresses, not other names
        el.style.cursor = "pointer";
        el.addEventListener("click", show);
        el.setAttribute("data-address", addr)
        el.innerHTML = addr.substring(0,7) + '...' + addr.substring(addr.length-4)
      }
    });

    // weird bug on ios safari - the vers first selection doesn't work. so let's make it here
    const is_ios = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
    const is_safari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
    if (is_ios && is_safari) {
      window.getSelection().selectAllChildren(document.getElementById("crypto"))
    }

    document.addEventListener("click", function(e) {
      // loop parent nodes from the target to the delegation node
      for (var target = e.target; target && target != this; target = target.parentNode) {
        if (target.matches("[data-address]")) {
          return;
        }
      }
      canvas.style.display = "none";
    }, false);
  })
})();

</script>
