---
title: Post vs put vs patch
topic: Http
---
## Post vs Put vs Patch

This topic has always boggled me. I thought they were interchangeable.

### Here are the differences:

1. ***Post*** is used to make a new entry, so it can only occur once per a unique situation. Example: submitting a comment, if you allow ***post*** to happen multiple times in this scenario, there will be multiple identical comments in the DB and subsequently in the page. ***Post*** call is **non-idempotent**.
2. ***Put*** is more like updating an existing entry in the back-end. You want to update your profile, your contact information, etc; that would be a ***put*** call. This can be harmlessly done any number of times because it will only override the same record multiple times, so it is non-destructive. ***Put*** call is **idempotent**.
3. ***Patch*** call is more like ***Put*** call than the ***Post*** call in the sense that it will also update same existing entry. The main difference between ***Put*** and ***Patch*** is that the ***Patch*** call will only pass in a portion of the complete data and this data is merged in the back-end with the entry. So, it will not override the whole entry. ***Patch*** is also an **idempotent** call.

### Idempotent HTTP methods:

So, essentially those methods that do not destructively update the back-end thus corrupting the DB with duplicate entries or unnecessary deletions are called idempotent methods.

Check - [Stackoverflow question](https://stackoverflow.com/questions/45016234/what-is-idempotency-in-http-methods)