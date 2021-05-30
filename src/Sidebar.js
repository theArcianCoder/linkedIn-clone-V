import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
      <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
            <p>{topic}</p>
      </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        <Avatar src ={user.photoUrl} className="sidebar__avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2335</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on your posts</p>
          <p className="sidebar__statNumber">2315</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('Programming')}
        {recentItem('Software Engineer')}
      </div>
    </div>
  );
}

export default Sidebar;