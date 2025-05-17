// components/Photo.jsx
import { useState, useEffect } from 'react';
import './Photo.css';
import Balloon from './Balloon';

const Photo = () => {
  const photos = [
    'https://img.freepik.com/free-vector/happy-birthday-lettering-concept_23-2148463675.jpg?semt=ais_hybrid&w=740',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIdSToeL4o7GQnrrhhi9yENoYxlLozjkymzQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwsAc3XO9o-6vgjMhfS0pcwhACBn4JlzGQMg&s',
    'https://www.justbake.in/userfiles/chocolate-drip-birthday-cake-30.jpg'
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // const targetDate = new Date();
  const targetDate = new Date('November 6, 2025 00:00:00');
  // targetDate.setDate(targetDate.getDate() + 177);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="photo-slideshow-overlay">
      <div className="photo-slideshow">
        <img 
          src={photos[currentIndex]} 
          alt="Birthday memory" 
          className="photo"
        />
        <div className="controls">
          <button onClick={prevPhoto}>❮</button>
          <button onClick={nextPhoto}>❯</button>
        </div>
        
        <div className="countdown-container">
          <h3>Time Until Celebration!</h3>
          <div className="countdown">
            <div className="countdown-item">
              <span>{timeLeft.days}</span>
              <span>Days</span>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.hours}</span>
              <span>Hours</span>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.minutes}</span>
              <span>Minutes</span>
            </div>
            <div className="countdown-item">
              <span>{timeLeft.seconds}</span>
              <span>Seconds</span>
            </div>
          </div>
        </div>
      </div>
      <Balloon/>
    </div>
  );
};

export default Photo;