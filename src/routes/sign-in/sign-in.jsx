import SignUp from "../../components/sign-up/sign-up";
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
}
    from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>Sign In Page Test</h1>
            <SignUp />
            <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}

export default SignIn;