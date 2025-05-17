import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./First.css";
import Heart from './Heart';

function First() {

  
  const [showFirstVideo, setShowFirstVideo] = useState(true);
  const navigate = useNavigate(); 
  

  const [audio] = useState(new Audio("music.mp3"));

  useEffect(() => {
    audio.play();
    audio.loop = true;
    audio.muted = false;
  }, [audio]);

  
  const handleButton1Click = () => {
    setShowFirstVideo(false);
  };

  const handleButton2Click = () => {
    audio.pause();
    navigate("/next"); 
  };

  return (
    <div className="container">

      {showFirstVideo && (
        <video
          autoPlay
          muted
          onContextMenu={(e) => e.preventDefault()}
          onEnded={() => console.log("First Video ended")}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="video_cake1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {!showFirstVideo && (
        <video
          autoPlay
          muted
          onContextMenu={(e) => e.preventDefault()}
          onEnded={() => console.log("Second Video ended")}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          <source src="video_cake2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      <div className="buttons">
        <button onClick={handleButton1Click}>Celebrate</button>
        <button onClick={handleButton2Click}>Welcome</button>
      </div>

      
      <audio id="background-music" loop>
        <source src="music.mp3" type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      <Heart/>
    </div>
    
  );
}

export default First;
