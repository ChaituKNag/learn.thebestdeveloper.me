---
title: JavaScript - Closures
topic: JavaScript
---
## JavaScript - Closures

This is from MDN:

> A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```javascript
function init() {
  // name is a local variable created by init
  var name = 'Mozilla'; 
  // displayName() is the inner function, a closure
  function displayName() { 
    // use variable declared in the parent function
    alert(name); 
  }
  displayName();
}
init();
```

### Practical use-cases

* Currying functions
* Object oriented programming
* Callbacks like *event handlers*