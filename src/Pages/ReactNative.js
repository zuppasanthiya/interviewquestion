import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReactNativeInterview.css'; // Import custom CSS

const ReactNativeInterview = () => {
  const [answers, setAnswers] = useState({
    todoList: '',
    counter: '',
    fetchAPI: '',
    conditionalRendering: '',
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
      id: 'todoList',
      question: `1. Create a simple To-Do List app in React Native where users can add, delete, and mark tasks as completed.`,
    },
    {
      id: 'counter',
      question: `2. Create a counter component in React Native that increases or decreases the count when the respective button is clicked.`,
    },
    {
      id: 'fetchAPI',
      question: `3. Write a React Native component that fetches data from an API and displays it in a list.`,
    },
    {
      id: 'conditionalRendering',
      question: `4. Implement a component in React Native that conditionally renders different content based on a boolean state.`,
    }
  ];

  const theoryQuestions = [
    {
      id: 'theory1',
      question: "1. What are the core components of React Native?",
    },
    {
      id: 'theory2',
      question: "2. Explain the differences between React Native and traditional native development.",
    },
    {
      id: 'theory3',
      question: "3. What is the purpose of the `useEffect` hook in React Native?",
    },
    {
      id: 'theory4',
      question: "4. How does React Native handle navigation? Discuss the use of React Navigation.",
    },
    {
      id: 'theory5',
      question: "5. What is the role of state management in React Native? Compare the use of Context API and Redux."
    }
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4" style={{color:"white"}}>React Native Interview Questions</h3>

      <form onSubmit={handleSubmit}>
        <h2 className="mb-3" style={{color:"orange"}}>Programming Questions</h2>
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

        <h2 className="mb-3" style={{color:"orange"}}>Theory Questions</h2>
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

export default ReactNativeInterview;
