// https://www.codewars.com/kata/566584e3309db1b17d000027/javascript

// Create a function that differentiates a polynomial for a given value of x.

// Your function will receive 2 arguments: a polynomial as a string, and a point to evaluate the equation as an integer.

// Assumptions:
// There will be a coefficient near each x, unless the coefficient equals 1 or -1.
// There will be an exponent near each x, unless the exponent equals 0 or 1.
// All exponents will be greater or equal to zero
// Examples:
// differenatiate("12x+2", 3)      ==>   returns 12
// differenatiate("x^2+3x+2", 3)   ==>   returns 9

function differentiate(equation, point){
  let derivativeResult = 0;

  const terms = equation.match(/[+-]?\d*x(?:\^\d+)?|[+-]?\d+/g) || [];

  for (const term of terms) {
    let coefficient = 0;
    let exponent = 0;

    if (!term.includes('x')) {
      continue;
    }

    
    const coeffMatch = term.match(/([+-]?\d*)x/);
    if (coeffMatch) {
      if (coeffMatch[1] === '') { 
        coefficient = 1;
      } else if (coeffMatch[1] === '-') {
        coefficient = -1;
      } else {
        coefficient = parseInt(coeffMatch[1]);
      }
    }

    const expMatch = term.match(/x\^(\d+)/);
    if (expMatch) {
      exponent = parseInt(expMatch[1]);
    } else {
      exponent = 1;
    }

    if (exponent > 0) {
      const newCoefficient = coefficient * exponent;
      const newExponent = exponent - 1;
      derivativeResult += newCoefficient * Math.pow(point, newExponent);
    }
  }

  return derivativeResult;
}