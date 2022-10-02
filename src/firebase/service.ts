import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "./config";
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async ()=> signInWithPopup(auth, googleProvider)
.then((result) => {

  const user = result.user;
  console.log(user)
  window.open('/signin')
  // ...
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(errorMessage)
});
export const logOut = async()=>{
    signOut(auth)
}