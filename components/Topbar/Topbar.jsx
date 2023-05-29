import React from 'react';
import './topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <nav>
        <a href="/">ALL</a>
        <a href="/">VIDEOS</a>
        <a href="/">AUDIOS</a>
        <a href="/">IMAGES</a>
        <a href="/">DOCS</a>
      </nav>
      <div>
        <input type="search" placeholder="Search..." />
        <button>S</button>
      </div>
    </div>
  );
}
