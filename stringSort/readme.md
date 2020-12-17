# Fancy Sorting

Your task is to create a function that can sort an array of strings using a custom order. Your function will get an `array` of `strings` to sort, and a `string` that represents the order they should be sorted by. The string may contain more characters than you need. You will also not have to deal with multiple string having the same first letter, or needing to sort by a letter not in the input string.

**INPUT**

- An `array` of `strings`, that need sorting.
- A `string` that represents the order that the array needs to be sorted by.

**OUTPUT**

- The input `array` that is sorted.

**EXAMPLE**

Consider the following input:

```js
const array = ["apple", "banana", "cherry"];
const string = "bcda";
sortByString(array, string);
```

The string has the letters `dbca` this represents what letter should come 'first' in a comparison sort. In this case as `b` is the first letter in the input string, any words that start with the letter `b` should be moved to the start of the array. 

```
output = ["banana"]
```

Next in the string is the letter `c` so any words that begin with `c` should come next.

```
output = ["banana", "cherry"]
```

Now we have a letter `d` but no words that match it. This is fine, and we can just move on to the next letter. That is `a` so again we can add any words that begin with `a` to the array.

```
output =  ["banana", "cherry", "apple]
```

Now that we have sorted all the words the array can be returned from the function.

**NOTE**: You don't need to create a new array, this was just a step by step example to help understand the problem. You should try to use the `array.prototype.sort` function.


