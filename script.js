// JavaScript functions to solve each problem

//Problem One
function checkAnswer() {
  let userAnswer = parseInt(document.getElementById('answerCheck').value);
  let correctAnswer = 233168; // The correct sum of multiples of 3 or 5 below 1000
  let checkResult = document.getElementById('checkResult');
  if (isNaN(userAnswer) || userAnswer < 0) {
    checkResult.innerText = "Invalid input. Please enter a valid positive number.";
  } else {
    if (userAnswer === correctAnswer) {
      checkResult.innerText = "Congratulations! Your answer is correct.";
    } else {
      checkResult.innerText = "Sorry, your answer is incorrect. Please try again.";
    }
  }
}

function calculateSum() {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let max = parseInt(document.getElementById('max').value);
  let calculateResult = document.getElementById('calculateResult');
  if (isNaN(num1) || isNaN(num2) || isNaN(max) || num1 <= 0 || num2 <= 0 || max <= 0) {
    calculateResult.innerText = "Invalid input. Please enter valid positive numbers.";
  } else {
    let totalSum = 0;
    for (let i = 1; i < max; i++) {
      if (i % num1 === 0 || i % num2 === 0) {
        totalSum += i;
      }
    }
    calculateResult.innerText = `The sum of all the multiples of ${num1} or ${num2} below ${max} is: ${totalSum}`;
  }
}

function toggleMode(mode) {
  if (mode === 'check') {
    document.getElementById('checkMode').style.display = 'block';
    document.getElementById('calculateMode').style.display = 'none';
  } else if (mode === 'calculate') {
    document.getElementById('checkMode').style.display = 'none';
    document.getElementById('calculateMode').style.display = 'block';
  }
}

// End of problem 1

//Problem 2
function sumEvenFibonacci(firstTerm, secondTerm, lastTerm) {
  let sum = 0;
  let currentTerm = secondTerm;

  while (currentTerm < lastTerm) {
    if (currentTerm % 2 === 0) {
      sum += currentTerm;
    }

    let nextTerm = firstTerm + currentTerm;
    firstTerm = currentTerm;
    currentTerm = nextTerm;
  }

  return sum;
}

function calculateFibonacciSum() {
  let firstTerm = parseInt(document.getElementById('firstTerm').value);
  let secondTerm = parseInt(document.getElementById('secondTerm').value);
  let lastTerm = parseInt(document.getElementById('lastTerm').value);

  let result = sumEvenFibonacci(firstTerm, secondTerm, lastTerm);
  document.getElementById('result').innerText = `Sum of even-valued terms: ${result}`;
}


//End of program 2

//Problem 3

function calculateLargestPrimeFactor() {
  let userNumber = parseInt(document.getElementById('userNumber').value);
  let largestPrimeFactor = calculateLargestPrimeFactorNumber(userNumber);
  let primeFactorResult = document.getElementById('primeFactorResult');
  primeFactorResult.innerText = `Largest prime factor of ${userNumber} is: ${largestPrimeFactor}`;
}

function calculateLargestPrimeFactorNumber(number) {
  let divisor = 2;
  let originalNumber = number;
  let largestPrimeFactor = 1;

  while (number > 1) {
      if (number % divisor === 0) {
          
          largestPrimeFactor = divisor;
          number /= divisor;
      } else {
          divisor++;
      }
  }

  return largestPrimeFactor;
}

function calculateProblem3() {
  let correctAnswer = 6857; // Correct answer for problem 3
  let userAnswer = parseInt(document.getElementById('answer3').value);
  let resultDiv = document.getElementById('result3');

  if (isNaN(userAnswer) || userAnswer < 0) {
      resultDiv.innerText = "Invalid input. Please enter a valid positive number.";
      return; // Exit the function if input is invalid
  }

  if (userAnswer === correctAnswer) {
      resultDiv.innerText = "Congratulations! Your answer is correct.";
  } else {
      resultDiv.innerText = "Sorry, your answer is incorrect. The correct answer is 6857.";
  }
}



//End of Problem3