import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NodeInterview.css'; // Import custom CSS

const NodeInterview = () => {
  const [answers, setAnswers] = useState({
    createServer: '',
    readFile: '',
    writeFile: '',
    fetchAPI: '',
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
      id: 'createServer',
      question: `1. Write a Node.js program to create a simple HTTP server that responds with "Hello World" for all requests.`,
    },
    {
      id: 'readFile',
      question: `2. Write a Node.js script that reads a file from the filesystem and prints its content to the console.`,
    },
    {
      id: 'writeFile',
      question: `3. Write a Node.js script that writes some data to a file.`,
    },
    {
      id: 'fetchAPI',
      question: `4. Write a Node.js program that makes an HTTP GET request to an external API and prints the response data.`,
    }
  ];

  const theoryQuestions = [
    {
      id: 'theory1',
      question: "1. What is the purpose of the `package.json` file in a Node.js project?",
    },
    {
      id: 'theory2',
      question: "2. Explain the concept of middleware in Express.js.",
    },
    {
      id: 'theory3',
      question: "3. How does the event loop work in Node.js?",
    },
    {
      id: 'theory4',
      question: "4. What is the difference between synchronous and asynchronous code in Node.js?",
    },
    {
      id: 'theory5',
      question: "5. How do you handle errors in a Node.js application?"
    }
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4" style={{color:"white"}}>Node.js Interview Questions</h3>

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

export default NodeInterview;
