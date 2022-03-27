import React, { PureComponent } from 'react';
import moment from 'moment';

import Box from '@mui/material/Box';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

function formatXAxis(tickItem) {
  return moment(tickItem).format('DD MMM YYYY hh A');
}

function groupBy(data) {
  const groups = data.reduce((acc, item) => {
    const d = moment(item.created_at);
    const group = d.format('DD MMM YYYY HH:00:00');
    const time = moment(group).format('x');

    acc[time] = acc[time] || {'time': time, 'count': 0};
    acc[time].count += 1

    return acc;
  }, {});

  return Object.keys(groups).map((key) => groups[key]);
};

function TweetChart({ data }) {
  const chart_data = groupBy(data);

  return (
    <Box mt={5} mb={1}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={800}
          height={400}
          data={chart_data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDataOverflow dataKey='time' domain="['dataMin', 'dataMax']" type="number" tickFormatter={formatXAxis}/>
          <YAxis allowDataOverflow dataKey="count" domain="['dataMin-1', 'dataMax+1']" type="number" yAxisId="1" />
          <Tooltip />
          <Line yAxisId="1" type="natural" dataKey="count" stroke="#8884d8" animationDuration={300} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default TweetChart;
