import React from "react";
import defaultUserPhoto from "../assets/freepik-avatar.jpg";
import {NavLink} from "react-router-dom";
import DefaultUserAvatar from "../Common/DefaultUserAvatar/DefaultUserAvatar";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
    avatar: {
        width: 100,
        height: 100
    }
});

const User = ({
                  id: userId,
                  photos,
                  name,
                  followed,
                  followingInProgress,
                  unfollow,
                  follow,
                  status,
                  classes
              }) => {
    return (
        <div key={userId}>
      <span>
        <div>
          <NavLink to={`/profile/${userId}`}>
              {
                  photos.small ?
                      <img
                          className={classes.avatar}
                          src={photos.small != null ? photos.small : defaultUserPhoto}
                          alt={`avatar of ${name}`}
                      />
                      :
                      <DefaultUserAvatar className={classes.avatar}/>
              }
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

export default withStyles(styles)(User);
