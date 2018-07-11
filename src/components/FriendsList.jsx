import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const placeholder = "You don't have many friends, but here they are";
const FriendsList = ({ friends }) => (
  <div>
    <Typography variant="headline">{placeholder}</Typography>
    <div>
      {friends.map(friend => (
        <Link key={friend.userId} to="/profile">
          <center>
            <ListItemText primary={friend.username} />
          </center>
        </Link>
      ))}
    </div>
  </div>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FriendsList;
