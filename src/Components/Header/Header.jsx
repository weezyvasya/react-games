import React from 'react';
import groupImg from '../../img/Group1597880565.png';
import star2 from '../../img/Star2.png';
import star3 from '../../img/Star3.png';
import star4 from '../../img/Star4.png';
import star5 from '../../img/Star5.png';
import './Header.css';

function Header() {
  return (
    <>
      <section className="section-logo">
      <img className="header-img" src={groupImg} alt="star" />
      <img className="first-star" src={star2} alt="star" />
        <img className="second-star" src={star3} alt="star" />
        <img className="third-star" src={star5} alt="star" />
        <img className="forth-star" src={star4} alt="star" />
        <div className="header">
          <h1 className="header-title">Добро пожаловать на мой сайт мини-игр</h1>
          <p className="header-text">
            Тебе предстоит пройти несколько увлекательных игр. Если готов, нажимай 
            <strong>«Поехали!»</strong> и <strong>приступай.</strong>
          </p>
          <button className="btnUI">Поехали</button>
        </div>
        <div className="animation-window">
          <div className="animation-line">
            <p className="animation-line__text">Викторина</p> 
            <p className="animation-line__text">Угадай число</p>
            <p className="animation-line__text">Переверни текст</p>
            <p className="animation-line__text">Простая арифметика</p>
            <p className="animation-line__text">Камень, ножницы, бумага</p>
            <p className="animation-line__text">Генератор случайных цветов</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;