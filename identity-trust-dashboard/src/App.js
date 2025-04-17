import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { date: "2025-03-15", LoginGov: 0.94, IDme: 0.88, StateSSO: 0.91 },
  { date: "2025-03-16", LoginGov: 0.92, IDme: 0.86, StateSSO: 0.89 },
  { date: "2025-03-17", LoginGov: 0.95, IDme: 0.89, StateSSO: 0.92 },
  { date: "2025-03-18", LoginGov: 0.91, IDme: 0.85, StateSSO: 0.87 },
  { date: "2025-03-19", LoginGov: 0.93, IDme: 0.87, StateSSO: 0.90 },
  { date: "2025-03-20", LoginGov: 0.96, IDme: 0.90, StateSSO: 0.93 }
];

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Identity & Access Trust Dashboard</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis domain={[0.8, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
          <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
          <Legend />
          <Line type="monotone" dataKey="LoginGov" stroke="#8884d8" name="Login.gov" />
          <Line type="monotone" dataKey="IDme" stroke="#82ca9d" name="ID.me" />
          <Line type="monotone" dataKey="StateSSO" stroke="#ffc658" name="State SSO" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
