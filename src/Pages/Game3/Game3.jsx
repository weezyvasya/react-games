import "./Game3.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Game3() {
  const [newWord, setNewWord] = useState("");

  function reversWord() {
    setNewWord(newWord.split("").reverse().join("").toLocaleLowerCase());
  }

  return (
    <>
      <div className="game-three">
        <h1>Переверни текст</h1>
        <input
          type="text"
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <button onClick={reversWord}>Трансформировать текст</button>
        {newWord && <div className="game-three__result">{newWord}</div>}
        <div className="game-three__footer">
          <Link to={"/"}>Перейти на главную</Link>
        </div>
      </div>
    </>
  );
}

export default Game3;
