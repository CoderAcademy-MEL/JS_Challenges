const { ultimateFizzBuzz } = require('./fizzbuzz');

describe('FizzBuzz: ultimateFizzBuzz()', () => {
  describe('when no parameters given', () => {
    const seq = ultimateFizzBuzz();

    test('should return a number when not divisible by 3 or 5', () => {
      expect(seq[3]).toBe(4);
    });

    test('should return Fizz when the number is divisible by 3', () => {
      expect(seq[2]).toBe('Fizz');
    });

    test('should return Buzz when the number is divisible by 5', () => {
      expect(seq[4]).toBe('Buzz');
    });

    test('should return FizzBuzz when the number is divisible by 3 and 5', () => {
      expect(seq[14]).toBe('FizzBuzz');
    });
  });

  describe('when custom strings given', () => {
    const seq = ultimateFizzBuzz('Chill', 'Out');

    test('should return stringOne when divisible by 3', () => {
      expect(seq[2]).toBe('Chill');
    });

    test('should return stringTwo when divisible by 5', () => {
      expect(seq[4]).toBe('Out');
    });

    test('should return both strings when divisible by 3 and 5', () => {
      expect(seq[14]).toBe('ChillOut');
    });

  });

  describe('when custom strings and custom numbers given', () => {
    const seq = ultimateFizzBuzz('Hakuna', 'Matata', 6, 11);

    test('should return stringOne when divisible by numOne', () => {
      expect(seq[5]).toBe('Hakuna');
    });

    test('should return stringTwo when divisible by numTwo', () => {
      expect(seq[10]).toBe('Matata');
    });

    test('should return both strings when divisible by numOne and numTwo', () => {
      expect(seq[65]).toBe('HakunaMatata');
    });
  });
});