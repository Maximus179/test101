import './Heading.scss';
import firebase from "firebase/app";
import { AuthContext } from "./../../../Auth";
import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

const Heading = () => {

    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
        return <Redirect to="/login" />;
      }

    const user = firebase.auth().currentUser;
    if (user !== null) {
        const email = user.email;
    }

    return (
        <div className="heading">
            <div className="user-info">
                User: {user.email}
            </div>
        </div>
    );
};
export default Heading;
