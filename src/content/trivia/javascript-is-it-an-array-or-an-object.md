---
title: JavaScript - Is it an Array or an Object
topic: JavaScript
---
## JavaScript - Array vs Object type checking

In pre-es6 days, there was no straight forward way of determining if a variable contains an array or an object.

Because:

```javascript
const arr = [1, 2, 3];
console.log(typeof arr); 
// Output: object

const obj = { a: 10, b: 20 };
console.log(typeof obj); 
// Output: object
```

So how did we check?

We use the below code where we use the Object prototype and the built-in \`call\` method.

### Solution:

```javascript
const arr = [1, 2, 3];
console.log(Object.prototype.toString.call(arr)); 
// Output: [object Array]

const obj = { a: 10, b: 20 };
console.log(Object.prototype.toString.call(obj)); 
// Output: [object Object]
```

### ES6 way:

We use \`Array.isArray()\` method to validate quickly.

```javascript
const arr = [1, 2, 3];
console.log(Array.isArray(arr)); 
// Output: true

const obj = { a: 10, b: 20 }; 
console.log(Array.isArray(obj)); 
// Output: false
```