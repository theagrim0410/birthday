import { useState} from 'react';
import { useNavigate } from "react-router-dom";
import Balloon from './Balloon';
import Heart from './Heart';
import './Next.css';

const Next = () => {
    const navigate = useNavigate(); 
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleButton2Click = () => {
    navigate("/photo"); 
  };

  return (
    <div className="animation-container">
      {/* Envelope with designed flap */}
      <div 
        className={`envelope ${isCardOpen ? 'open' : ''}`}
        onClick={() => setIsCardOpen(!isCardOpen)}
      >
        <div className="envelope-back"></div>
        <div className="card">
          <div className="card-content">
            <h3>Happy Birthday!</h3>
            <p>Someone special is thinking of you</p>
            <div className="confetti">🎉</div>
          </div>
        </div>
        <div className="envelope-front"></div>
        <div className="envelope-flap">
          <div className="flap-design">
            <div className="flap-message">To: Special Someone</div>
            <div className="flap-heart">💖</div>
            <div className="flap-border"></div>
          </div>
        </div>
      </div>

      {/* <h2 className="animation-title">Happy Birthday</h2> */}
      
      <Balloon />
      <Heart />

      {isCardOpen && (
        <div className="birthday-message">
          <p>Wishing you the happiest of days!</p>
        </div>
      )}
      
      <button 
        className="photo-button" onClick={handleButton2Click}>Surprise
      </button>
    </div>
  );
};

export default Next;