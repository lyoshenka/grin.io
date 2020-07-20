---
---


Simplicity is my most important software design principle. But "keep it simple" is easier said than done. In fact it’s said all the time, so we must not be doing it enough.


## **What Is Simple?**

Rich Hickey gave the [definitive talk](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/SimpleMadeEasy.md) on the words *simple* and *complex*. Complex means "intertwined" or "braided together", like threads tangled into a ball. Simple is the opposite - those threads laid neatly alongside each other.

**Complexity is the enemy because it prevents us from understanding what our program does.** Hickey says:

> Every time I pull out a new part of the software that I need to comprehend, and it's attached to another thing, I have to pull that other thing into my mind because I can't think about the one without the other.
> 
> That's the nature of them being intertwined. So every intertwining is adding this burden, and the burden is combinatorial as to the number of things that we can consider.
> 
> Fundamentally, this complexity (and by complexity I mean this braiding together of things) is going to limit our ability to understand our systems.

[We can pay attention to only a handful of things at once](https://en.wikipedia.org/wiki/Chunking_(psychology)#Channel_capacity,%22Magic_number_seven,%22_Increase_of_short-term_memory). Too many interconnections between components, and we literally cannot follow what our system is doing.


## **Why Simplify?**

In 2017, I shared [a few programming aphorisms](https://grin.io/coding-maxims) with my company. Looking back, half of them are variations on Hickey's vision of simplicity:

> 1) Code is debt

Any code you write increases the complexity of your system. You should constantly ask yourself "is this code worth making my system somewhat harder to understand?"

This is especially relevant for complex features. Salvatore Sanfilippo, the creator of Redis, [writes](http://antirez.com/news/112):

> Often complexity is generated when there is no willingness to recognize that a non-fundamental goal of a project is accounting for a very large amount of design complexity, or is making another more important goal very hard to reach, because there is a design tension among a fundamental feature and a non-fundamental one.

The [80/20 rule](https://en.wikipedia.org/wiki/Pareto_principle) reminds us that most complexity comes from just a few features. Find the worst offenders and cut them out.

> 3) Gall's law 

“A complex system that works is invariably found to have evolved from a simple system that worked”. If you end up with a complex system and it’s not working, beware! You may not be able to fix it because you can’t load it all into your brain anymore.

> 5) Be predictable. No magic.

I use *magic* to mean a hidden effect that makes your code look nice or “just work” (e.g. operator overloading). It’s the worst kind of complexity because the underlying behavior is not obvious.

> 7) A good repro is 90% of a bugfix.

If you've cleanly reproduced the bug, then you really understand how it happens. This is why if you're having trouble reproducing it, the best way to go is to remove absolutely everything that's not related.

> 8) Code is written once, but read many times.

You pay the price of complex code every time you come back to read it. Be mindful of the costs you impose on your future self and on other developers.

> 10) First code, then ship, then measure, *then* optimize.

This one's about the danger of premature optimization. Optimization adds complexity and you don't want to add it before you need it.


## **Learning To Keep It Simple**

Rich Hickey's talk is the first step to grokking *simple*. Read or listen to it and take notes.

When you feel stuck in your programming, step back a moment and notice the ways your code is entangled with other parts of the system. Imagine an engineer who is familiar with your tools but not your code. Ask yourself if they could understand the component you’re working on in isolation. What else would they need to know?

Ultimately, **the best way to internalize simpicity is to work on one large project for a long time.** Several years, at least. That’s how the best programmers [develop a taste](http://www.paulgraham.com/taste.html) for simplicity. You’ll have the opportunity to make mistakes, see the effects of those mistakes, rewrite the system a few times, and experience the satisfaction of keeping it simple.
