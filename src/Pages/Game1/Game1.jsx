import './Game1.css'
import { Link } from "react-router-dom";

function Game1() {
    return ( 
        <>
          <h1>GAME</h1>
          <Link to="/"> <button className="btnUI">Вернуться на главную</button></Link>
        </>
     );
}

export default Game1;