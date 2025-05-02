import './Game2.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Game2() {
    const correctAnswers = [30, 25, 0];
    const [userAnswers, setUserAnswers] = useState(['', '', '']);
    const [result, setResult] = useState('');
    const [gameover, setGameover] = useState(false);

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...userAnswers];
        newAnswers[index] = value;
        setUserAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const allAnswered = userAnswers.every(answer => answer !== '');
        if (!allAnswered) {
            setResult('Пожалуйста, ответьте на все вопросы');
            return;
        }

        const isCorrect = userAnswers.every((answer, index) => 
            Number(answer) === correctAnswers[index]
        );

        if (isCorrect) {
            setResult('Поздравляем! Все ответы верные!');
        } else {
            setResult('К сожалению, есть ошибки. Попробуйте еще раз!');
        }
        setGameover(true);
    };

    const resetGame = () => {
        setUserAnswers(['', '', '']);
        setResult('');
        setGameover(false);
    };

    return ( 
        <div className="game-two">
            <div className="game-two__header">
                <h1>Угадай число</h1>
            </div>
            <div className="game-two__main">
                <p>Реши задачу 15 + 15</p>
                <input 
                    value={userAnswers[0]} 
                    onChange={(e) => handleAnswerChange(0, e.target.value)} 
                    type="number" 
                    disabled={gameover}
                />
                
                <p>Реши задачу 15 + 10</p>
                <input 
                    value={userAnswers[1]} 
                    onChange={(e) => handleAnswerChange(1, e.target.value)} 
                    type="number" 
                    disabled={gameover}
                />
                
                <p>Реши задачу 15 - 15</p>
                <input 
                    value={userAnswers[2]} 
                    onChange={(e) => handleAnswerChange(2, e.target.value)} 
                    type="number" 
                    disabled={gameover}
                />
                
                {!gameover ? (
                    <button onClick={checkAnswers}>Ответить</button>
                ) : (
                    <button onClick={resetGame}>Попробовать снова</button>
                )}
                
                {result && <p>{result}</p>}
            </div>
            <div className="game-two__footer">
                <Link to={"/"}>Перейти на главную</Link>
            </div>
        </div>
    );
}

export default Game2;