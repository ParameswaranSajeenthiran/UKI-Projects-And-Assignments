import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(Month, Participants) {
  return { Month, Participants };
}

const data = [
  createData('January', 0),
  createData('February', 50),
  createData('March', 70),
  createData('April', 60),
  createData('May', 150),
  createData('June', 75),
  createData('July', 240),
  createData('Augest', 200),
  createData('September', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="Month" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Participants
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="Participants" stroke={theme.palette.primary.main} dot={false} />
          <Line type="monotone" dataKey="Participants" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
