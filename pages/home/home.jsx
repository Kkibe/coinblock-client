import React from 'react';
import './home.css';

import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Videos from '../../Tabs/Videos/Videos';

export default function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Videos />
        </div>
      </div>
    </div>
  );
}
