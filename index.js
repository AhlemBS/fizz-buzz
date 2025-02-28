const N = 20;

const fizzBuzz = (N) => {
    return Array.from({ length: N }, (_, i) => {  
      const num = i + 1; // to start from 1
      if (num % 15 === 0) return "FizzBuzz";
      if (num % 3 === 0) return "Fizz";
      if (num % 5 === 0) return "Buzz";
      return num;
    }).join(", ");
  };
 
console.log(fizzBuzz(N));
  