import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user, error, isLoggedIn } = useSelector((state) => state.auth);
  return (
    <div>
      {isLoggedIn && (
        <>
          <p className="text-red-500 font-medium text-sm mt-2">
            {user.username}
          </p>
          <h1>This is the Profile of {user.username}</h1>
        </>
      )}
    </div>
  );
};

export default Profile;
