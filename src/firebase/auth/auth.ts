import {
  GoogleAuthProvider,
  User,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../config";

const auth = getAuth(app);

export async function emailSignIn(
  email: string,
  password: string
): Promise<User> {
  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    return userCred.user;
  } catch (error: any) {
    console.log(error?.code);
    console.log(error?.massage);
    return Promise.reject(error);
  }
}

export async function GooglePopUp(): Promise<User> {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider)
    .then((result) => {
      const cred = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      return user;
    })
    .catch((error) => {
      return Promise.reject(error.massage);
    });
}

export function isLogin(): boolean {
  if (auth.currentUser) {
    return true;
  }

  return false;
}

export function getDisplayName(): string {
  const user = auth.currentUser;
  if (!user) {
    throw Error("User not sign in");
  }
  return user.displayName || "";
}

export function ListenAuthChanges(func: (par: any) => void) {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      func(user?.displayName);
    }
  });
}

export async function SignOut(): Promise<boolean> {
  if (!auth.currentUser) throw Error("No user");

  try {
    await signOut(auth);
    console.log(auth);
    return true;
  } catch (error) {
    return false;
  }
}
