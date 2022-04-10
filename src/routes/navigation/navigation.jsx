import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.scss'

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const signOutHandler = async () => {
        await signOutUser(); //I await for the action
        setCurrentUser(null); //I set the user to null to effectively sign out the user
        alert('You have successfully logged out!');
    };
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;