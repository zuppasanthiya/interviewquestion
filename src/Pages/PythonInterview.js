import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PythonInterview.css'; // Import custom CSS

const PythonInterview = () => {
  const [answers, setAnswers] = useState({
    fibonacci: '',
    fileRead: '',
    dataAnalysis: '',
    webScraping: '',
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
      id: 'fibonacci',
      question: `1. Write a Python function to generate the Fibonacci sequence up to n terms.`,
    },
    {
      id: 'fileRead',
      question: `2. Write a Python script that reads a text file and prints the number of lines, words, and characters.`,
    },
    {
      id: 'dataAnalysis',
      question: `3. Write a Python program using pandas to analyze a CSV file and output summary statistics.`,
    },
    {
      id: 'webScraping',
      question: `4. Write a Python script using BeautifulSoup to scrape data from a website and print the extracted information.`,
    }
  ];

  const theoryQuestions = [
    {
      id: 'theory1',
      question: "1. What are Python's key features and advantages?",
    },
    {
      id: 'theory2',
      question: "2. Explain the concept of decorators in Python.",
    },
    {
      id: 'theory3',
      question: "3. What is the difference between Python 2 and Python 3?",
    },
    {
      id: 'theory4',
      question: "4. How does garbage collection work in Python?",
    },
    {
      id: 'theory5',
      question: "5. Explain the Global Interpreter Lock (GIL) in Python."
    }
  ];

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4" style={{color:"white"}}>Python Interview Questions</h3>

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

export default PythonInterview;
