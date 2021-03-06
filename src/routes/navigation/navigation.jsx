import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from "../../components/cart-icon/cart-icon";
import Dropdown from "../../components/dropdown/dropdown";
import { CartContext } from "../../contexts/cart";
import { UserContext } from "../../contexts/user";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.scss'

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
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
                            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">
                                SIGN IN
                            </Link>
                        )}
                    <CartIcon />
                </div>
                {isCartOpen && <Dropdown />}
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;