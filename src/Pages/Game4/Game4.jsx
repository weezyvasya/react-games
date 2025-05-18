import "./Game4.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Game4() {
    const gameRules = {
        камень: {
          камень: "Ничья",
          ножницы: "Проиграли",
          бумага: "Выиграли", 
        },
        ножницы: {
          камень: 'Выиграли', 
          ножницы: 'ничья',
          бумага: 'Проиграли',
        },
        бумага: {
          камень: "Проиграли",
          ножницы: "Выиграли", 
          бумага: "Ничья",
        },
      };

  const arr = ['камень','ножницы','бумага']
  let start = 0
  let end = arr.length - 1
  const [variants, setVariants] = useState('')
  const [result, setResult] = useState('')
  const [stopInterval, setStopInterval] = useState(false)

  console.log(stopInterval)

  function hendel (e) {
    let variant = e.target.innerText
    let variantCompyter = arr[Math.floor(Math.random() * ((arr.length - 1) - 0 + 1)) + 0]
    setStopInterval(true)
    setVariants(variantCompyter)
    setResult(gameRules[variantCompyter][variant])

  }

 function createInterval(){
    return setInterval(()=>{
      if (start == end) {
        start = 0
      } else {
        start++
      }
      setVariants(arr[start])
    }, 200)
  }


  useEffect(() => {
   let indInt = createInterval()
   let indTim = null

    if (stopInterval) {
       clearInterval(indInt)
       indTim = setTimeout(()=>{
       indInt = createInterval()
       setStopInterval(false)
       }, 1500)
    }



    return () => {
       clearInterval(indInt)
       clearTimeout(indTim)
    }
  }, [stopInterval])

    
  return (
    <div className="game-four">
      <h1>Камень, Ножницы, Бумага</h1>
      <div className="game-four__footer">
        <p>{variants}</p>
        <p>{result}</p>
        {arr.map((vari) => <button onClick={hendel} key={vari}>{vari}</button>)}
        <Link to={"/"}>Перейти на главную</Link>
      </div>
    </div>
);
}

export default Game4;
