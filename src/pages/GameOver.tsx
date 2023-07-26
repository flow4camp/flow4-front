import React from "react";
import { useLocation } from 'react-router-dom';

const GameOver: React.FC = () => {
    const location = useLocation();
    const win = location.state?.win || false;
  
    return (
      <div>
        {win ? 
        (<h1>Congratulations! You won!</h1>) : 
        (<h1>Game Over! Better luck next time!</h1>)}
      </div>
    );
  };

export default GameOver;