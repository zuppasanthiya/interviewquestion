import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './JavaInterview.css'; // Import custom CSS

const JavaInterview = () => {
  const [answers, setAnswers] = useState({
    fizzBuzz: '',
    findLargestNumber: '',
    isPalindrome: '',
    factorial: '',
    reverseString: '',
    theory1: '',
    theory2: '',
    theory3: '',
    theory4: '',
    theory5: ''
  });

  const handleChange = (e, question) => {
    setAnswers({
      ...answers,
      [question]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission of answers, e.g., sending to a server
    console.log('Submitted Answers:', answers);
  };

  const programmingQuestions = [
    {
      id: 'fizzBuzz',
      question: `1. Write a function \`fizzBuzz()\` that prints the numbers from 1 to 100. 
                But for multiples of three, print "Fizz" instead of the number, 
                and for the multiples of five, print "Buzz". For numbers which are multiples 
                of both three and five, print "FizzBuzz".`,
    },
    {
      id: 'findLargestNumber',
      question: `2. Write a function \`findLargestNumber(int[] arr)\` that takes an array of numbers 
                and returns the largest number in the array.`,
    },
    {
      id: 'isPalindrome',
      question: `3. Write a function \`isPalindrome(String str)\` that takes a string and returns true 
                if the string is a palindrome, and false otherwise.`,
    },
    {
      id: 'factorial',
      question: `4. Write a function \`factorial(int n)\` that takes a number and returns the factorial 
                of that number.`,
    },
    {
      id: 'reverseString',
      question: `5. Write a function \`reverseString(String str)\` that takes a string and returns 
                the reversed string.`,
    }
  ];

  const theoryQuestions = [
    {
      id: 'theory1',
      question: "1. Explain the concept of inheritance in Java.",
    },
    {
      id: 'theory2',
      question: "2. What is polymorphism in Java? Provide an example.",
    },
    {
      id: 'theory3',
      question: "3. What are Java interfaces and how are they used?",
    },
    {
      id: 'theory4',
      question: "4. Explain the difference between an abstract class and an interface in Java.",
    },
    {
      id: 'theory5',
      question: "5. What is exception handling in Java? Describe the try-catch-finally block."
    }
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4" style={{color:"white"}}>Java Interview Questions</h3>

      <form onSubmit={handleSubmit}>
        <h2 className="mb-3"style={{color:"orange"}}>Programming Questions</h2>
        {programmingQuestions.map((item) => (
          <div className="mb-4" key={item.id}>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{item.question}</p>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Type your answer here..."
                  value={answers[item.id] || ''}
                  onChange={(e) => handleChange(e, item.id)}
                />
              </div>
            </div>
          </div>
        ))}

        <h2 className="mb-3"style={{color:"orange"}}>Theory Questions</h2>
        {theoryQuestions.map((item) => (
          <div className="mb-4" key={item.id}>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{item.question}</p>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Type your answer here..."
                  value={answers[item.id] || ''}
                  onChange={(e) => handleChange(e, item.id)}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Submit Answers</button>
        </div>
      </form>
    </div>
  );
}

export default JavaInterview;
