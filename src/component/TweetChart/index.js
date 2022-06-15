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

function timeStamp(date) {
  const d = (date == null) ? moment(date) : moment();
  const hour = d.format('DD MMM YYYY HH:00:00');
  return moment(hour).format('x');
}

function groupBy(data) {
  const groups = data.reduce((acc, item) => {
    const d = moment(item.created_at);
    const hour = d.format('DD MMM YYYY HH:00:00');
    const time =  moment(hour).format('x');

    acc[hour] = acc[hour] || {'time': time, 'hour': hour, 'count': 0};
    acc[hour].count += 1

    return acc;
  }, {});

  return Object.keys(groups).map((key) => groups[key]);
};

function TweetChart({ data, published }) {
  const chart_data = groupBy(data);

  return (
    <Box mt={5} mb={1}>
      <ResponsiveContainer width="95%"
                           height={400}>
        <LineChart
          width={800}
          height={400}
          data={chart_data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDataOverflow dataKey='time' domain="[timeStamp(published), timeStamp(null)]" type="number" tickFormatter={formatXAxis}/>
          <YAxis allowDataOverflow dataKey="count" domain="[0, dataMax+5]" type="number" yAxisId="1" />
          <Tooltip />
          <Line yAxisId="1" type="natural" dataKey="count" stroke="#8884d8" animationDuration={100} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default TweetChart;