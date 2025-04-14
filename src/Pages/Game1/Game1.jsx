import "./Game1.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Game1() {

  const [number, setNumber] = useState(Math.floor(Math.random() * 11))
  const [guess, setGuess] = useState('')
  const [result, setResult] = useState('')
  const [gameOver, setGameOver] = useState(false)


  useEffect(() => {
    if (guess === '') return;

    const guessedNumber = parseInt(guess, 10);
    
    if (isNaN(guessedNumber)) {
      setResult('Введите число!');
      return;
    }

    if (number > guessedNumber) {
      setResult('Больше');
    } else if (number < guessedNumber) {
      setResult('Меньше');
    } else {
      setResult('Угадал! Загадываю новое число...');
      setGameOver(true);
    }
  }, [guess, number]);

  useEffect(() => {
    if (gameOver) {
      const timer = setTimeout(() => {
        setNumber(Math.floor(Math.random() * 11));
        setGuess('');
        setResult('');
        setGameOver(false);
      }, 3500); 
      return () => clearTimeout(timer);
    }
  }, [gameOver]);
  

  
  return (
    <div className="game-one">
      <div className="game-one__header">
        <h1>Угадай число</h1>
      </div>
      <div className="game-one__main">
        <p>Компьютер загадал число от 0 до 10, угадай его?</p>
        <input value={guess} onChange={(e)=> setGuess(e.target.value)} type="number" min='0' max='10' />
        <p>{result}</p>
      </div>
      <div className="game-one__footer">
         <Link to={"/"}>Перейти на главную</Link>
      </div>
    </div>
  );
}

export default Game1;
