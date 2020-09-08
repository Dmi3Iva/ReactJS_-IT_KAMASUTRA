import React from "react";
import styles from "./users.module.css";
import defaultUserPhoto from "../assets/freepik-avatar.jpg";
import {NavLink} from "react-router-dom";

const User = ({
                  id: userId,
                  photos,
                  name,
                  followed,
                  followingInProgress,
                  unfollow,
                  follow,
                  status,
              }) => {
    return (
        <div key={userId}>
      <span>
        <div>
          <NavLink to={`/profile/${userId}`}>
            <img
                className={styles.userPhoto}
                src={photos.small != null ? photos.small : defaultUserPhoto}
                alt={`avatar of ${name}`}
            />
          </NavLink>
        </div>
        <div>
          {followed ? (
              <button
                  disabled={followingInProgress.some((id) => userId === id)}
                  onClick={() => {
                      unfollow(userId);
                  }}
              >
                  Unfollow
              </button>
          ) : (
              <button
                  disabled={followingInProgress.some((id) => userId === id)}
                  onClick={() => {
                      follow(userId);
                  }}
              >
                  Follow
              </button>
          )}
        </div>
      </span>
            <span>
        <span>
          <div>{name}</div>
          <div>{status}</div>
        </span>
      </span>
        </div>
    );
};

export default User;
