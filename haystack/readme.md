# Needle in a Haystack

Sven has made a bet with friend Juan that he could find the literal needle hidden in a haystack. Sven knows of your talent coding and hopes that you can write a program to help him. You have a tool that can scan the pile of hay and represent it as a matrix (array of arrays). Each cell will contain either the string `H` representing hay or `N` representing the elusive needle. Return the location of the needle so that Sven can win his bet.

**INPUT**

- An array of arrays (matrix) `[[],[]]` representing the haystack.
- A cell `stack[x][y]` will contain either `'H'` or `'N'` for Hay or Needle.
- Input will always have exactly one `'N'`.

**OUTPUT**

- An array containing the pair of indexes that point to the location of the needle.
- It must be in the format `[x,y]`

**EXAMPLE**

One man doing the [Impossible](https://www.youtube.com/watch?v=h1tIVDkYAjA)

Suppose we had the haystack:

```js
const stack = [
  ['H', 'H', 'H'],
  ['H', 'H', 'H'],
  ['H', 'N', 'H']
]
```

In this example, we can see that the needle is in the 3rd array, and then the second element in that array. If we wanted to access the value `N` in code, we would need to call `stack[2][1]`. Once you have found the needle, return the position as a new array in this case `[2, 1]`.

The Haystack will always contain a needle, so you don't need to consider that edge case. Check `haystack.test.js` for more examples.