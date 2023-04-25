import React, { useState } from 'react';
import './App.scss';
import { Start } from './Components/Start';
import { Game } from './Components/Game';
import { Over } from './Components/Over';

export const App: React.FC = () => {
  const [componentIndex, setComponentIndex] = useState(0);

  const components = [
    <Start key={componentIndex} onNext={() => setComponentIndex(1)} />,
    <Game key={componentIndex} onNext={() => setComponentIndex(2)} />,
    <Over key={componentIndex} onNext={() => setComponentIndex(0)} />,
  ];

  return (
    <div className="starter">
      {components[componentIndex]}
    </div>
  );
};
