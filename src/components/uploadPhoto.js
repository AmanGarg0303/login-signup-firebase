import { useState } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";
import { useUserContext } from "../context/userContext";

function UploadPhoto() {
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };
  const { user } = useUserContext();

  const uploadFiles = (file) => {
    //
    if (!file) return;

    const metadata = {
      contentType: user.email,
    };

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          console.log("Uploaded by ", user.displayName);
          console.log("Uploaded by ", user.email);
        });
      }
    );
  };

  return (
    <div className="App">
      <form onSubmit={formHandler}>
        <input type="file" className="input" />
        <button type="submit" style={{ cursor: "pointer" }}>
          Upload
        </button>
      </form>
      <hr />
      <h2>Uploading done {progress}%</h2>
    </div>
  );
}

export default UploadPhoto;
