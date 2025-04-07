import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const Graphs = ({ playerStats }) => {
  const actionMap = {
    'Match Started': 1,
    'Match Paused': 2,
    'Joined Party': 3,
    'Left Party': 4,
  };

  const chartData = playerStats.map((stat) => ({
    ...stat,
    value: actionMap[stat.action] || 0,
  }));

  return (
    <div className="graph-container">
      <h2>Player Action Timeline</h2>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis
          domain={[0, 5]}
          tickFormatter={(val) => {
            const label = Object.keys(actionMap).find((key) => actionMap[key] === val);
            return label || '';
          }}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" name="Player Action" />
      </LineChart>
    </div>
  );
};

export default Graphs;
