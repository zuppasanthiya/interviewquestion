import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ReactInterview.css'; 

const ReactInterview = () => {
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
      id: 'counter',
      question: `1. Create a counter component in React that increases or decreases the count when the respective button is clicked.`,
    },
    {
      id: 'fetchAPI',
      question: `2. Write a React component that fetches data from an API and displays it in a list.`,
    },
    {
      id: 'conditionalRendering',
      question: `3. Implement a component in React that conditionally renders different content based on a boolean state.`,
    }
  ];

  const theoryQuestions = [
    {
      id: 'theory1',
      question: "1. What are the differences between class components and functional components in React?",
    },
    {
      id: 'theory2',
      question: "2. Explain the concept of hooks in React. Name a few commonly used hooks.",
    },
    {
      id: 'theory3',
      question: "3. What is the Virtual DOM and how does it differ from the real DOM?",
    },
    {
      id: 'theory4',
      question: "4. How does state management work in React? Discuss the use of Context API and Redux.",
    },
    {
      id: 'theory5',
      question: "5. Explain the lifecycle methods in React class components.",
    }
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4" style={{color:"white"}}>React Interview Questions</h3>

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

export default ReactInterview;
