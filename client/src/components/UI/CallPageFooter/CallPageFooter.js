import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhoneAlt,
  faDesktop,
  faMicrophoneSlash,
  faVideoSlash,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import "./CallPageFooter.scss";


const CallPageFooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  toggleAudio,
  disconnectCall,
  isVideo,
  toggleVideo,
}) => {
  return (
    <div className="footer-item">
      <div className="center-item">
        <div
          className={`icon-block ${!isAudio ? "red-bg" : null}`}
          onClick={() => toggleAudio(!isAudio)}
        >
          <FontAwesomeIcon
            className="icon"
            icon={isAudio ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div className="icon-block" onClick={disconnectCall}>
          <FontAwesomeIcon className="icon red" icon={faPhoneAlt} />
        </div>
        <div
          className={`icon-block ${!isVideo ? "red-bg" : null}`}
          onClick={() => toggleVideo(!isVideo)}
        >
          <FontAwesomeIcon
            className="icon"
            icon={isVideo ? faVideo : faVideoSlash}
          />
        </div>
        <div>
        {isPresenting ? (
          <div className="icon-block" onClick={stopScreenShare}>
            <FontAwesomeIcon className="icon" icon={faTimesCircle} />
            <p className="title">Stop</p>
          </div>
        ) : (
          <div className="icon-block" onClick={screenShare}>
            <FontAwesomeIcon className="icon" icon={faDesktop} />
          </div>
          
        )}
      </div>
      </div>
    </div>
  );
};

export default CallPageFooter;
