import { auth } from "./firebase";

// Sign Up
export const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

// Login
export const login = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// Logout
export const logout = () => auth.signOut();

// Password Reset
export const passwordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const passwordChange = (password) =>
  auth.currentUser.updatePassword(password);