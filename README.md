# Test Driven Development 
    1.RTL
    2.JEST
    3.VITEST

# Test priority 
    1.getBYRole
    2.getByLabelText
    3.getByPlaceHolder


 # Example

    test('renders correclty', () => {
        render(<Login />)
        const loginHeading = screen.getByRole('heading', {
            level: 1, name: /Welcome to tree foundation/i
        })

        const logo = screen.getByAltText("logo")
        const userNameInput = screen.getByRole('textbox',{
            name:/Enter Your Name/i
        })

        const userPasswordInput = screen.getByLabelText(/Enter Your Password/i)
        const loginButton = screen.getByRole('button')


        expect(loginHeading).toBeInTheDocument()
        expect(logo).toBeInTheDocument()

       

        expect(userNameInput).toBeInTheDocument()
        expect(userPasswordInput).toBeInTheDocument()
        expect(loginButton).toBeInTheDocument()   
    })









    <!-- import React, { useState } from 'react';

const Questionnaire: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: 'How was your day?',
      options: ['Ok', 'Good', 'Bad'],
      badOptions: ['One', 'Two', 'Three'],
      selectedAnswer: answers[0],
    },
    {
      question: 'Did you enjoy the movie?',
      options: ['Ok', 'Good', 'Bad'],
      badOptions: ['Four', 'Five', 'Six'],
      selectedAnswer: answers[1],
    },
    {
      question: 'How was your experience with the product?',
      options: ['Ok', 'Good', 'Bad'],
      badOptions: ['Seven', 'Eight', 'Nine'],
      selectedAnswer: answers[2],
    },
  ];

  const handleAnswerSelection = (answer: string) => {
    if (answer === 'Bad') {
      setAnswers([...answers, answer]);
    } else {
      setAnswers([...answers, answer]);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderQuestion = () => {
    if (currentQuestion >= questions.length) {
      return <div>Thank you for your responses!</div>;
    }

    const currentQuestionObj = questions[currentQuestion];
    let options = currentQuestionObj.options;

    if (currentQuestionObj.selectedAnswer === 'Bad') {
      options = currentQuestionObj.badOptions;
    }

    return (
      <div>
        <h3>{currentQuestionObj.question}</h3>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <button onClick={() => handleAnswerSelection(option)}>{option}</button>
            </li>
          ))}
        </ul>
        {currentQuestionObj.selectedAnswer && <div>Selected answer: {currentQuestionObj.selectedAnswer}</div>}
      </div>
    );
  };

  return <div>{renderQuestion()}</div>;
};

export default Questionnaire; -->
