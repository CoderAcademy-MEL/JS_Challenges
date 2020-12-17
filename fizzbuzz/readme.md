# The Ultimate FizzBuzz

As an aspiring junior developer, you have found your self completing coding challenges for potential employers. In doing these challenges, you have noticed that many of them are just the same problem, with a little variation. The problem in question is FizzBuzz; it requires you to create a sequence of numbers from 1 to 100. If the number is divisible by three, then the number should be replaced with the string `Fizz` if the number is divisible by five, then the number should be replaced with the string `Buzz`. If, however, the number is divisible by both three and five then the number should be replaced with the string `FizzBuzz`. You then return an array containing the sequence.

You want to write a program that will take in four parameters. Two will be strings `stringOne` and `stringTwo` that will be used as the replacement strings. The other two will be integers `numOne` and `numTwo` that will be values used in the calculation to decide whether to return the number or the string. If nothing is given for a parameter then it should use the default value from the original problem. Return an array containing the custom FizzBuzz sequence.

**INPUTS**

- `stringOne` *Optional* - The replacement string for `Fizz`.
- `stringTwo` *Optional* - The replacement string for `Buzz`.
- `numOne` *Optional* - The replacement number for `3`.
- `numTwo` *Optional* - The replacement number for `5`.

**OUTPUT**

An `array` containing the sequence from 1 to 100.

**EXAMPLES**


`ultimateFizzBuzz()[15]` Returns `16`. Remember that arrays are indexed from 0.

`ultimateFizzBuzz()[44]` Returns `FizzBuzz`. 45 is divisible by 3 and 5.

`ultimateFizzBuzz('Hey', 'All')[25]` Returns `26`.

`ultimateFizzBuzz('Hey', 'All')[11]` Returns `Hey`. 12 is divisible by 3.

`ultimateFizzBuzz('But' ,'Why?', 3, 7)[27]` Returns `Why?`. 28 is divisible by 7.

Some light [prereading](https://i.pinimg.com/originals/3b/6f/06/3b6f0699bfc1861a72a1d08fbaad2c72.jpg)
