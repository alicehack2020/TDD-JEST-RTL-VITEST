import React, { useState } from 'react';

const Questionnaire: React.FC = () => {
const [currentQuestion, setCurrentQuestion] = useState(0);
const [answers, setAnswers] = useState<{ id: number; question: string; selectedOption: string; badOption: string }[]>([]);
    
 const [selectedAnswer, setSelectedAnswer] = useState("")
    
  const questions = [
    {
      question: 'How was your day?',
      options: ['Ok', 'Good', 'Bad'],
      badOptions: ['One', 'Two', 'Three'],
    },
    {
      question: 'Did you enjoy the movie?',
      options: ['Ok', 'Good', 'Bad'],
      badOptions: ['Four', 'Five', 'Six'],
    },
    {
      question: 'How was your experience with the product?',
      options: ['Ok', 'Good', 'Bad'],
      badOptions: ['Seven', 'Eight', 'Nine'],
    },
  ];

  const handleAnswerSelection = (answer: string) => {
    if (answer === 'Bad') {
      setSelectedAnswer("Bad");
    } else {
      
      const answerWithBad = {
        id: currentQuestion,
        question: questions[currentQuestion].question,
        selectedOption: answer,
        badOption: selectedAnswer
      };
  
      setAnswers([...answers,answerWithBad])
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };
  
    const submit = () => {
      console.log(answers)
  }
  
  

  const renderQuestion = () => {
    if (currentQuestion >= questions.length) {
      return <div><button onClick={()=>submit()}>Submit</button></div>;
    }

    const currentQuestionObj = questions[currentQuestion];
    let options = currentQuestionObj.options;

    if (selectedAnswer === 'Bad') {
      options = currentQuestionObj.badOptions;
    }

    return (
      <div className='grid place-content-center'>
        <h3>{currentQuestionObj.question}</h3>
        <div className='flex gap-2 mt-4 justify-between' >
          {options.map((option, index) => (
            <div key={index} >
              <button className='p-2 border border-r-gray-400 bg-blue-400 shadow-md' onClick={() => handleAnswerSelection(option)}>{option}</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <div>{renderQuestion()}</div>;
};

export default Questionnaire; 






























// import React, { useState } from 'react';

// const Questionnaire: React.FC = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState<{ id: number; question: string; selectedOption: string; badOption: string }[]>([]);

//   const questions = [
//     {
//       id: 1,
//       question: 'How was your day?',
//       options: ['Ok', 'Good', 'Bad'],
//       badOptions: ['One', 'Two', 'Three'],
//     },
//     {
//       id: 2,
//       question: 'Did you enjoy the movie?',
//       options: ['Ok', 'Good', 'Bad'],
//       badOptions: ['Four', 'Five', 'Six'],
//     },
//     {
//       id: 3,
//       question: 'How was your experience with the product?',
//       options: ['Ok', 'Good', 'Bad'],
//       badOptions: ['Seven', 'Eight', 'Nine'],
//     },
//   ];

//   const handleAnswerSelection = (answer: string) => {
//     const currentQuestionObj = questions[currentQuestion];

//     const answerObject = {
//       id: currentQuestionObj.id,
//       question: currentQuestionObj.question,
//       selectedOption: answer,
//       badOption: currentQuestionObj.badOptions?.[currentQuestion] || '',
//     };

//     setAnswers([...answers, answerObject]);
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   const submitAnswers = () => {
//     console.log(answers);
//   };

//   const renderQuestion = () => {
//     if (currentQuestion >= questions.length) {
//       return (
//         <div>
//           <button onClick={submitAnswers}>Submit</button>
//         </div>
//       );
//     }

//     const currentQuestionObj = questions[currentQuestion];
//     let options = currentQuestionObj.options;

//     if (currentQuestionObj.badOptions) {
//       options = currentQuestionObj.badOptions;
//     }

//     return (
//       <div>
//         <h3>{currentQuestionObj.question}</h3>
//         <ul>
//           {options.map((option, index) => (
//             <li key={index}>
//               <button onClick={() => handleAnswerSelection(option)}>{option}</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   return <div>{renderQuestion()}</div>;
// };

// export default Questionnaire;
