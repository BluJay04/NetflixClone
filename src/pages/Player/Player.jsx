import React from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate } from 'react-router-dom';

const Player = () => {
  const navigate = useNavigate();

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" onClick={() => navigate(-1)} />
      <iframe
        width="90%"
        height="90%"
        src="https://www.youtube.com/embed/nbp3Ra3Yp74"
        title="Trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;