import React from "react";
import { useUserContext } from "../context/userContext";
import UploadPhoto from "./uploadPhoto";

const Dashboard = () => {
    const { user, logoutUser } = useUserContext();
    return (
        <div>
            <h1>Dashboard </h1>
            <h2>Name : {user.displayName}</h2>
            <h2>Email : {user.email}</h2>
            <button onClick={logoutUser} style={{ cursor: "pointer" }}>Log out</button>

            <UploadPhoto />
        </div>
    );
};

export default Dashboard;