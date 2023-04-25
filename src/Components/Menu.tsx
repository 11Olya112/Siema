/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import menu from '../icons/menu.svg';
import data from '../questions.json';
import './Menu.scss';

type Props = {
  isOpen: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: React.FC<Props> = ({ isOpen, onChange }) => {
  const { money } = data;
  const { m } = data.questions[0];

  return (
    <div className={`menu ${isOpen && 'open'} `}>
      <div
        role="button"
        tabIndex={0}
        className="menu__icon"
        onClick={() => onChange(false)}
      >

      </div>
      <ul className="main__list">
        {money.map(mon => (
          <li key={mon.amount}>
            <button
              type="button"
              className={`menu__button ${m === +mon.amount && 'menu__button--money'}`}
            >
              <div className="menu__prize">{mon.amount}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
