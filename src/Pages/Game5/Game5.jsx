import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Game5.css";

function Game5() {
  let quizQuestion = [
    {
      text: "Что такое DOM?",
      variants: [
        "Метод работы со строками",
        "Объектная модель документа",
        "Часть HTML",
      ],
      answer: 1,
    },
    {
      text: "Как называется метод массивов, который переварачивает массив?",
      variants: ["Split()", "Join()", "Reverse()"],
      answer: 2,
    },
    {
      text: "Что такое HTML?",
      variants: [
        "Язык программирования",
        "Язык гипертекстовой разметки",
        "Стили страницы",
      ],
      answer: 1,
    },
    {
      text: "Что такое CSS?",
      variants: [
        "Каскадная таблица стилей",
        "Язык програмирования",
        "Язык разметки",
      ],
      answer: 0,
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [res, setRes] = useState(0);

  function checkAnswer(ind) {
    if (ind === quizQuestion[currentQuestion].answer) {
      setRes(res + 1);
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <div className="game-five">
      <h1>Quiz</h1>
      {currentQuestion < quizQuestion.length ? (
        <div className="question-container">
          <p>{quizQuestion[currentQuestion].text}</p>
          {quizQuestion[currentQuestion].variants.map((variant, ind) => (
            <button onClick={() => checkAnswer(ind)} key={variant}>
              {variant}
            </button>
          ))}
        </div>
      ) : (
        <div className="result-container">
          <p className="result">Правильных ответов: {res} из {quizQuestion.length}</p>
          <button className="restart-button" onClick={() => location.reload()}>
            Начать заново
          </button>
          <Link to="/" className="home-link">На главную</Link>
        </div>
      )}
    </div>
);
}

export default Game5;
