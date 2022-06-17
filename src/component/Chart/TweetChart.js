import Box from '@mui/material/Box';

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function formatXAxis(date) {
  var d = (date ? new Date(date) : new Date()),
      pretty = function(time) {
          time = '' + time;
          if (time.length < 2) return '0' + time;
          else return time;
      };

  return pretty(d.getHours()) + ":" + pretty(d.getMinutes());
}

function TweetChart({ data, published }) {
  var maxValue = Math.max(...data.map((x) => x.count));
  return (
    <Box mt={5} mb={1}>
      <ResponsiveContainer width="95%"
                           height={400}>
        <LineChart
          width={800}
          height={400}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" domain="[formatXAxis(published), formatXAxis(null)]" tickFormatter={formatXAxis} />
          <YAxis dataKey="actividad" domain="[0, maxValue]" />
          <Tooltip />
          <Legend />
          <Line type="natural" dataKey="actividad" stroke="#8884d8" animationDuration={100} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default TweetChart;