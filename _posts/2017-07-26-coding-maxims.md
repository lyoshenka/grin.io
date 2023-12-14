---
priority: 2
---

_numbered for ease of reference, not for priority_

1. code is debt, and bad code is an [unhedged call option](https://www.castsoftware.com/blog/bad-code-isnt-technical-debt-its-an-unhedged-call-option) ([a](/archive/www.castsoftware.com~blog~bad-code-isnt-technical-debt-its-an-unhedged-call-option.html))
  - ![cant have 0-days or bugs if I dont write any code](/img/no-bugs.jpg)
  - our users dont care about the code
  - every line of code has costs (your time, readability, maintainability, complexity)
  - its like owning a house with lots of rooms. its nice when your friends come over once a month, but you pay rent every day
  - dont add features prematurely

2. ~~DRY DRY [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)~~ actually [DAMP](https://twitter.com/matryer/status/1082278413510082560) ([a](/img/damp.png)) is better

3. keep it [simple](https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/SimpleMadeEasy.md) ([a](/archive/github.com~matthiasn~talk-transcripts~blob~master~Hickey_Rich~SimpleMadeEasy.md.html)) (especially [at first](https://en.wikipedia.org/wiki/John_Gall_(author)#Gall.27s_law))

4. be consistent

5. no magic! be predictable

6. no [magic numbers/strings](https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants) — use constants instead

7. a good repro is 90% of a bugfix

8. code is written once, but is read many times

9. ship early, ship often

10. first code, then ship, then measure, *then* optimize

11. remember the [80/20 rule](https://en.wikipedia.org/wiki/Pareto_principle), and the [90/90 rule](https://en.wikipedia.org/wiki/Ninety-ninety_rule)

12. design [layers of abstraction](https://en.wikipedia.org/wiki/Abstraction_layer) with [deep modules](https://web.stanford.edu/~ouster/cgi-bin/cs190-winter18/lecture.php?topic=modularDesign) ([a](/archive/web.stanford.edu~~ouster~cgi-bin~cs190-winter18~lecture.php%3ftopic=modularDesign.html))

13. prefer [encapsulated complexity](https://vitalik.ca/general/2022/02/28/complexity.html) ([a](/archive/vitalik.ca~general~2022~02~28~complexity.html))

14. [write tests. not too many. mostly integration.](https://kentcdodds.com/blog/write-tests) ([a](/archive/kentcdodds.com~blog~write-tests.html))

15. comments should describe [what's not obvious](https://web.stanford.edu/~ouster/cgi-bin/cs190-winter18/lecture.php?topic=comments) ([a](/archive/web.stanford.edu~~ouster~cgi-bin~cs190-winter18~lecture.php%3ftopic=comments.html)). i used to hate comments but [this book](https://www.goodreads.com/en/book/show/39996759-a-philosophy-of-software-design) ([a](/archive/www.goodreads.com~en~book~show~39996759-a-philosophy-of-software-design.html)) changed my mind.

16. [Postel's law](https://en.wikipedia.org/wiki/Robustness_principle) is wrong — be strict both ways

17. budget your [innovation tokens](https://mcfunley.com/choose-boring-technology) ([a](/archive/mcfunley.com~choose-boring-technology.html))

18. first you don't know the rules, then you learn the rules, then you break the rules

See also: [programming principles](https://en.wikipedia.org/wiki/Category:Programming_principles), [hacker laws](https://github.com/dwmkerr/hacker-laws) ([a](/archive/github.com~dwmkerr~hacker-laws.html)), [Dieter Rams' principles](https://github.com/zedr/dieter-rams-10-applied-to-software) ([a](/archive/github.com~zedr~dieter-rams-10-applied-to-software.html)), [the Zen of python](https://www.python.org/dev/peps/pep-0020/) ([a](/archive/python.org-dev-peps-pep-0020.html)), [Urbit precepts](https://urbit.org/docs/development/precepts) ([a](/archive/urbit.org-docs-development-precepts.html))

*old version [here](https://gist.github.com/lyoshenka/0a43205aa9a072b196ff87e2c689a8b9)*
