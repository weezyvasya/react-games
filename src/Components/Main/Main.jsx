import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { gamesList } from "../../helpers/gamesList";
import starAbout from "../../img/StarAbout.png";
import star11 from "../../img/Star11.png";
import star12 from "../../img/Star12.png";

function Main() {
  return (
    <>
      <section className="section-about">
        <img className="img-about" src={starAbout} alt="star" />
        <img className="img-about-first" src={star11} alt="star" />
        <img className="img-about-second" src={star12} alt="star" />
        <div className="container">
          <div className="section-about-content">
            <div className="section-about-content-description">
              <h1>Об играх</h1>
              <p>
                В моей коллекции представлено 6 игр на разные темы.
                <br />
                Игры несложные — в них может поиграть каждый.
                <br />
                Все игры доступны для пользования.
              </p>
            </div>
            <div className="section-about-content-cards">
              {gamesList.map((game) => (
                <div key={game.number} className="card">
                  <div className="card__top">
                    <img className="card-img" src={game.img} alt={game.title} />
                  </div>
                  <div className="card__bottom">
                    <strong>Игра № {game.number}</strong>
                    <h2>{game.title}</h2>
                    <Link to={game.path}>
                      <button className="btnUI btnUI_hidden">Играть</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
