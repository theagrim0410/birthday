import './Heart.css';

const Heart = () => {
  // Generate random hearts
  const hearts = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 8 + Math.random() * 15,
    delay: Math.random() * 5,
    size: 10 + Math.random() * 20,
    hue: 350 + Math.random() * 20
  }));

  return (
    <div className="heart-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
            color: `hsl(${heart.hue}, 100%, 65%)`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default Heart;