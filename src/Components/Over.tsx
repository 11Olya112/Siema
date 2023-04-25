import React from 'react';
import hand from '../icons/hand.svg';
import './Over.scss';

type Props = {
  onNext: () => void;
};

export const Over: React.FC<Props> = ({ onNext }) => {
  return (
    <div className="over">
      <div className="container__flex">
        <img src={hand} alt="Hand" />
        <div>
          <div className="container__score">
            Total score:
          </div>
          <h1 className="over__text">$8,000 earned</h1>
          <button type="button" className="container__button" onClick={onNext}>Try again</button>
        </div>
      </div>
    </div>
  );
};
