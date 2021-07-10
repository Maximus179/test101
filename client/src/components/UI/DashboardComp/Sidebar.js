import SideNav, {NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome, faTasks, faLockOpen, faComments, faTrashAlt, faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import firebaseConfig from "../../../firebase";

const Sidebar = () => {
    return (
            <SideNav style={ {display: 'table'}}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <a href="/dashboard">
                                <FontAwesomeIcon icon={faHome} size="lg" />
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="/dashboard">Dashboard</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Tasks">
                        <NavIcon>
                            <a href="/tasks">
                                <FontAwesomeIcon icon={faTasks} size="lg" />
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="/tasks">Tasks</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="ResetPassword">
                        <NavIcon>
                            <a href="/reset">
                                <FontAwesomeIcon icon={faLockOpen} size="lg" />
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="/reset">Reset Password</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Feedback">
                        <NavIcon>
                            <a href="/feedback">
                                <FontAwesomeIcon icon={faComments} size="lg" />
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="/feedback">Feedback</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Delete">
                        <NavIcon>
                            <a href="/delete">
                                <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                            </a>
                        </NavIcon>
                        <NavText>
                            <a href="/delete">Delete Account</a>
                        </NavText>
                    </NavItem>
                    <br/>
                   
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <NavItem eventKey="signout_button">
                        <NavIcon>
                                <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
                        </NavIcon>
                        <NavText>
                            <div className="sidebar_button">
                            <button type="button" class="btn btn-warning btn-lg "  onClick={() => firebaseConfig.auth().signOut()}> <strong>Signout</strong></button>
                            </div>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    )
}

export default Sidebar;