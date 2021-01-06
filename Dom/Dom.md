# Event Flow

> What's differences between currentTarget vs target?

- target: element which is triggering event
- currentTarget: other elements which trigger event by the ultimate cause

# How event flow work

- Capture phase: Check binded event from lower level of html (ex: html->body->div) = propagate up
- Target phase: when event happen in target element
- Bubble phase: = Check event from specific elemet (ex: div->body>html) = propagate down

# How to manipulate event flow

- target.addEventListener (type,listener [, <U>useCapture</U>]) => add option at the end of addEventListener
- default opotion is bubble phase

# Event object control methods

- e.stopPropagation: stop event loop
- e.preventDefault: stop browser event logic (ex-stop redirecting page when submit button clicked)
