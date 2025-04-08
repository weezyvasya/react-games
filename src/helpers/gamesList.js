import guessTheNumberImg from '../img/guesthenumber.png';
import easyMathImg from '../img/easyMath.png';
import reverseTextImg from '../img/reverseText.png';
import rockPaperScissorsImg from '../img/rockSisorsPaper.png';
import easyQuestImg from '../img/easyQuest.png';
import randomColorImg from '../img/randomColor.png';


export const gamesList = [
    {
        img: guessTheNumberImg,
        number: 1,
        title: 'Угадай число',
        path: '/Game1'
      },
      {
        img: easyMathImg,
        number: 2,
        title: 'Простая арифметика',
        path: '/Game2'
      },
      {
        img: reverseTextImg,
        number: 3,
        title: 'Переверни текст',
        path: '/Game3'
      },
      {
        img: rockPaperScissorsImg,
        number: 4,
        title: 'Камень, ножницы, бумага',
        path: '/Game4'
      },
      {
        img: easyQuestImg,
        number: 5,
        title: 'Простая викторина',
        path: '/Game5'
      },
      {
        img: randomColorImg,
        number: 6,
        title: 'Генератор случайных цветов',
        path: '/Game6'
      }
]