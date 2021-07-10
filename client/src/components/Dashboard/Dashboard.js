import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./../../Auth";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import './Dashboard.scss';
import Heading from "../UI/Heading/Heading";
import VideoCall from "../UI/VideoCall.png";
import Chat from "../UI/Chat.png";
import Sidebar from "../UI/DashboardComp/Sidebar";
import ReactPlayer from "react-player";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  const user = firebase.auth().currentUser;
  if (user !== null) {
    const email = user.email;
  }


  return (
    <div className="dashboard_background">
      <div>
        <Heading />
        <Sidebar />
      </div>
      <div className="right-side_dashboard">
        <div className="content_dashboard">
          For starting a Video Call -
          <img src={(VideoCall)} alt="videocall image" /><Link to="/home"> Click here</Link>
        </div>
      </div>
      <div className="left-side_dashboard">
        <div className="content_dashboard">
          For starting a Chat Room -
          <img class="img-fluid" src={(Chat)} alt="chat" /><Link to="/chat"> Click here</Link>
        </div>
      </div>
      <div className="text_dash">
      <p>Doubts? Watch the video.</p>
      </div>
      <div className="video_element_dash">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
          width="675px"
          height="425px"
        />
      </div>

    </div>
  );
};

export default Dashboard;