import { getDefaultNormalizer } from '@testing-library/react';
import React from 'react'
import './home.scss';
import Sidebar from '../../component/sidebar/Sidebar';
import Navbar from '../../component/navbar/Navbar';

import Widget from '../../component/widget/Widget';
import Chart from '../../component/chart/Chart';
import Featured from '../../component/featured/Featured';
import Table from '../../component/table/Table';
function Home() {
  return (
    <div className='home'>
      <Sidebar />
      <div className="home_container">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest transection</div>
          <Table/>
        </div>
      </div>

    </div>
  )
}

export default Home