import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
}
    from "../../utils/firebase/firebase.utils";


const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page Test</h1>
            <SignIn />
            <SignUp />
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default Authentication;