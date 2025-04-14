import './Game2.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Game2() {

    const Answers = [30,25,0]
    const [result, setResult] = useState('')
    const [answer, setAnswer] = useState('')
    const [gameover, setGameover] = useState(false)

    useEffect(() =>{
        if (answer === '') return;

        

    })


    
    return ( 
    <div className="game-two">
      <div className="game-two__header">
        <h1>Угадай число</h1>
      </div>
      <div className="game-two__main">
        <p>Реши задачу 15 + 15</p>
        <input value={answer} onChange={(e)=> setAnswer(e.target.value)} type="number" min='0' max='10' />
        <p>э</p>
        <p>Реши задачу 15 + 10</p>
        <input value={answer} onChange={(e)=> setAnswer(e.target.value)} type="number" min='0' max='10' />
        <p>э</p>
        <p>Реши задачу 15 - 15</p>
        <input value={answer} onChange={(e)=> setAnswer(e.target.value)} type="number" min='0' max='10' />
        <p>э</p>
      </div>
      <div className="game-two__footer">
         <Link to={"/"}>Перейти на главную</Link>
      </div>
    </div>
     );
}

export default Game2;