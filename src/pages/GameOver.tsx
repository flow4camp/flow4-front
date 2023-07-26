import React from "react";

interface GameOverProps {
    win: boolean;
  }

const GameOver: React.FC<GameOverProps> = ({ win }) => {

    return (
        <div>
            {win ? (
                <div>win</div>
            ) : (
                <div>lose</div>
            )}
        </div>
    )
}

export default GameOver;