import React, { useState } from 'react';

export default function learningJavascript() {

  const Q1 = "What is Hoisting in JavaScript?";
  const A1 = 
  `JavaScript Hoisting is the behavior where the interpreter moves function and variable declarations to the top of their respective scope before executing the code. This allows variables to be accessed before declaration, aiding in more flexible coding practices and avoiding “undefined” errors during execution.

  Hoisting is the default behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase. This guarantees that regardless of where these declarations appear within a scope, they can be accessed throughout that scope.

  Features of Hoisting
  Declarations are hoisted, not initializations.
  Allows calling functions before their declarations.
  All variable and function declarations are processed before any code execution.
  Undeclared variables are implicitly created as global variables when assigned a value.

  Note: JavaScript only hoists declarations, not initializations.`;

  console.log(A1);
  // Sample data: List of questions and answers
  const questionsData = [
    { question: Q1, answer: A1 },
    { question: 'What is a state in React?', answer: 'State is an object that determines the behavior of a component.' },
    { question: 'What are props in React?', answer: 'Props are inputs to components, passed as arguments.' },
  ];

  // State to track the current question index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handler for the Next button
  const handleNext = () => {
    if (currentIndex < questionsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handler for the Previous button
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h2>learning Javascript.</h2>

      <div>
        <h2>{questionsData[currentIndex].question}</h2>
        <p style={{ whiteSpace: 'pre-line' }}>{questionsData[currentIndex].answer}</p>
      </div>
      <div>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext} disabled={currentIndex === questionsData.length - 1}>
          Next
        </button>
      </div>
    </div>
  );
}