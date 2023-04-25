import React from 'react';
import hand from '../icons/hand.svg';
import './Start.scss';

type Props = {
  onNext: () => void;
};

export const Start: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="container">
      <div className="container__flex">
        <img src={hand} alt="Hand" className="container__image" />
        <div>
          <h1 className="container__text">Who wants to be a millionaire?</h1>
          <button type="button" className="container__button" onClick={onNext}>Start</button>
        </div>
      </div>
    </div>
  );
};
