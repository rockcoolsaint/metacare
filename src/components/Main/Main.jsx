import React from 'react'
import MainTopbar from "../MainTopbar/MainTopbar";
import Chart from '../../components/Chart/Chart';
import { userData } from '../../dummyData';

import "./styles.css";

const Main = () => {
  return (
    <div className='main'>
      <MainTopbar />
      <div className="charts">
        <Chart data={userData} title="Average response Time" grid dataKey="Active User" />
        <Chart data={userData} title="Replies per resolution" grid dataKey="Active User" />
        <Chart data={userData} title="Average resolution time" grid dataKey="Active User" />
        <Chart data={userData} title="First contact resolution time" grid dataKey="Active User" />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      </div>
    </div>
  )
}

export default Main;