import React from 'react';
import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';

const Authentication = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
