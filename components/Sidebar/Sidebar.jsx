import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">EXPLORE</a>
        </li>
        <li>
          <a href="/">SUBSCRIPTIONS</a>
        </li>
        <li>
          <a href="/">PLAYLISTS</a>
        </li>
        <li>
          PROFILE
          <ul>
            <li>VIEW PROFILE</li>
            <li>BOOKMARKS</li>
            <li>DOWNLOADS</li>
            <li>NOTIFICATIONS</li>
          </ul>
        </li>
      </nav>
      <button>LOGOUT</button>
    </div>
  );
}
