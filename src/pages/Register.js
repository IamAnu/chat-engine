import React, { useState } from "react";
import Add from "../images/avatar.webp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


function Register() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.target[1].value);
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    // FireBase Authentication Code from it's doc.
    try {
      const res = createUserWithEmailAndPassword(auth, email, password);
      
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      /** 
       *  Register three observers:
        1. 'state_changed' observer, called any time the state changes
        2. Error observer, called on failure
        3. Completion observer, called on successful completion
      */

      uploadTask.on(
       
        (error) => {
          // Handle unsuccessful uploads
          setErr(true);
        },
        () => {
          /** 
           * Handle successful uploads on complete
            For instance, get the download URL: https://firebasestorage.googleapis.com/..
          */
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            res.then(userCredentials => {
              updateProfile(userCredentials.user, {
                displayName,
                photoURL:downloadURL,
              }).then(() => {
                 setDoc(doc(db, "users", userCredentials.user.uid),{
                  uid: userCredentials.user.uid,
                  displayName,
                  email,
                  photoURL:downloadURL,
                }).then(() => {
                  alert( `Registered`);
                }).catch(err => console.log(`Error in setDoc ${err}`))
              }).catch(err => console.log(`Error in updateProfile ${err}`))
              .then(()=>{
                setDoc(doc( db , "userChats" , res.user.uid), {});
              })
            })
            console.log("File available at", downloadURL);
          }).catch(err => console.error(`Error in getDownloadURL ${err}`));
        }
      );
      
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> Let's Chat </span>
        <span>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="name@gmail.com" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            {/* Change this avatar later */}
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button> Sign up </button>
          {err && <span> Something went wrong. </span>}
        </form>
        <p>Do you have an account ? login</p>
      </div>
    </div>
  );
}

export default Register;
