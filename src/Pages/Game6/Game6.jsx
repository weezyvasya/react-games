import { useState } from "react";
import { Link } from "react-router-dom";
import "./Game6.css";

function Game6() {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    function renderColor() {
        return Math.floor(0 + Math.random() * (255 + 1 - 0));
    }

    function generateRandomColor() {
        const red = renderColor();
        const green = renderColor();
        const blue = renderColor();
        const newColor = `rgb(${red}, ${green}, ${blue})`;
        setBackgroundColor(newColor);
    }

    return ( 
        <div className="game-six-container" style={{ backgroundColor }}>
            <h1>Генератор случайных цветов</h1>
            <button className="game-six-button" onClick={generateRandomColor}>
                Сгенерировать случайный цвет
            </button>
            <Link to="/" className="game-six-link">Перейти на главную</Link>
        </div>
    );
}

export default Game6;