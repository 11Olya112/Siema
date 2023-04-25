/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useState } from 'react';
// import rectangle from '../icons/method-draw-image.svg';
import data from '../questions.json';
import { Menu } from './Menu';

type Props = {
  onNext: () => void;
};

export const Game: React.FC<Props> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');

  const { question } = data.questions[0];
  const { answers } = data.questions[0];

  const handleClick = (answer: any) => {
    setSelected(answer.text);
    setTimeout(() => {
      setSelected(answer.correct ? 'correct' : answer.text);
      setTimeout(() => {
        onNext();
      }, 2000);
    }, 2000);
  };

  function getButtonClassName(answer: any) {
    if (selected === answer.text) {
      return 'main__button--selected';
    }

    if (selected === 'correct' && answer.correct) {
      return 'main__button--correct';
    }

    if (selected === answer.text && !answer.correct) {
      return 'main__button--wrong';
    }

    return '';
  }

  return (
    <div className="main">
      <nav className="nav">
        <button
          className="nav__menu"
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
        </button>
      </nav>
      <Menu isOpen={isOpen} onChange={setIsOpen} />

      <div className="main__text">{question}</div>
      <ul className="main__list">
        {answers.map((answer) => (
          <li key={answer.text}>
            <button
              type="button"
              onClick={() => handleClick(answer)}
              className={`main__button ${getButtonClassName(answer)}`}
            >
              <div className="main__answer">{answer.text}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
