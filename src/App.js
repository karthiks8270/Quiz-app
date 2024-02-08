import './App.css';
import { useState } from 'react';

function App() {
  
  const questions = [
      {
        questionText:'what is the capital of france',
        answerOptions:[
          
          { answerText:'New York', isCorrect:false},
          { answerText:'London', isCorrect:false},
          { answerText:'Paris', isCorrect:true},
          { answerText:'Dublin', isCorrect:false},
        ]
      },
      {
        questionText:'who is the ceo of Google',
        answerOptions:[
          
          { answerText:'Sundair', isCorrect:false},
          { answerText:'Satya', isCorrect:false},
          { answerText:'Antony', isCorrect:true},
          { answerText:'Mark', isCorrect:false},
        ]
      },
      {
        questionText:'what is the capital of India',
        answerOptions:[
          
          { answerText:'Delhi', isCorrect:false},
          { answerText:'London', isCorrect:false},
          { answerText:'NewDelhi', isCorrect:true},
          { answerText:'Dublin', isCorrect:false},
        ]
      },
      {
        questionText:'what is the full form of js ',
        answerOptions:[
          
          { answerText:'Java', isCorrect:false},
          { answerText:'java1', isCorrect:false},
          { answerText:'JavaScript', isCorrect:true},
          { answerText:'Python', isCorrect:false},
        ]
      }
  ];
  const [currentQuestion,setQuestion] = useState(0);
  const [showScore,setShowScore] = useState(false);
  const [score,setScore] = useState(0);
  const handlerButton = (isCorrect) =>{
    if(isCorrect===true){
       setScore(score+1);
    }
    const nextQuestion = currentQuestion+1;
    if(nextQuestion<questions.length){
      setQuestion(nextQuestion);
    }
    else{
        setShowScore(true);
    }
}
  return(
    <div className='app'>
          {showScore ? (
            <div className='score'>Your score {score} out of {questions.length}</div>
          ):(
            <div >
            <h1>Quiz App</h1>
              <div className='Quiz'>
              <div className='Quiz-text'>
                <h3>{[currentQuestion+1]}<span>/{questions.length}</span></h3>
                <p>{questions[currentQuestion].questionText}</p>
              </div>
              <div className='Quiz-list-bt'>
                {questions[currentQuestion].answerOptions.map((options)=>(
                  <button className='Quiz-bt' onClick={() => handlerButton(options.isCorrect)}>  {options.answerText}</button>
                ))} 
              </div>
              </div>
            </div>
          )}
  </div>
  )
}
export default App;
