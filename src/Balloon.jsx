import './Balloon.css';

const Balloon = () => {
  // Generate random balloons
  const balloons = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    duration: 5 + Math.random() * 10,
    delay: Math.random() * 5,
    color: `hsl(${Math.random() * 360}, 100%, 75%)`,
    size: 40 + Math.random() * 30
  }));

  return (
    <div className="balloon-container">
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="balloon"
          style={{
            left: `${balloon.left}%`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
            animationDuration: `${balloon.duration}s`,
            animationDelay: `${balloon.delay}s`,
            backgroundColor: balloon.color
          }}
        />
      ))}
    </div>
  );
};

export default Balloon;