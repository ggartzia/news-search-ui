import Box from '@mui/material/Box';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

function EmotionChart({ data }) {
    return (
      <RadarChart
        cx={250}
        cy={200}
        outerRadius={150}
        width={500}
        height={350}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="rating" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
}

export default EmotionChart;
