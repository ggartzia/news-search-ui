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

function format(date) {
  var d = new Date(date)
  return d.getTime();
}

function groupBy (data) {
  return data.reduce(function(acc, item) {
    const d = moment(date);
    const group = d.format('MMM DD YYYY') + ' ' + d.format('hh a');
    acc[group] = (acc[group] || []).push(item);
    return acc;
  }, {});
};

function TweetChart({ data }) {
  console.log(groupBy(data));
  return (
    <Box mt={5} mb={1}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={800}
          height={400}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis allowDataOverflow dataKey="name" domain="['dataMin', 'dataMax']" type="number" />
          <YAxis allowDataOverflow domain="['dataMin-1', 'dataMax+1']" type="number" yAxisId="1" />
          <Tooltip />
          <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default TweetChart;
