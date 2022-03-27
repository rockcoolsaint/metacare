import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from 'recharts';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import './styles.css';

const Chart = ({ title, data, dataKey, grid }) => {
  return (
    <div className='chart'>
      <div className="chart__draw">
        <div className="chart__header">
          <div className="header-left">
            <h3 className="chartTitle">{title}</h3>
            <span className="avg-res-time">+4.14%</span>
          </div>
          <div className="header-right">
            <span className='priority-indicator'></span>
            <span className="priority">High Priority</span>
            <span className='schedule'><span className='schedule__type'>This Month</span><span><img src="images/schedule.png" alt="schedule" /></span></span>
          </div>
        </div>
        <ResponsiveContainer width={730} height={250}>
          <LineChart data={data} >
            <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis axisLine={false} />
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            <Tooltip/>
            {grid && <CartesianGrid vertical={false} stroke="#e0dfdf" />}
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="chart_info">
        <Box
          sx={{
            width: 200,
            height: 150,
            backgroundColor: '#efefef',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="body2" component="div" gutterBottom>
            Average Response Time
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            30 Mins
          </Typography>
        </Box>
        <Box
          sx={{
            width: 200,
            height: 150,
            backgroundColor: '#efefef',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
          }}
        >
          <Typography variant="body2" component="div" gutterBottom>
            Response Time
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            1 Hour 30 Mins
          </Typography>
        </Box>
      </div>
    </div>
  )
}

export default Chart;
