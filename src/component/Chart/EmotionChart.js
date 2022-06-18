import Box from '@mui/material/Box';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';

const EMOTIONS = [{id: 'none', name: 'Neutral', value: 1},
                  {id: 'happy', name: 'Contento', value: 1},
                  {id: 'relax', name: 'Relajado', value: 1},
                  {id: 'sad', name: 'Triste', value: 1},
                  {id: 'angry', name: 'Enfadado', value: 1}];

function EmotionChart({ data }) {
    let search_value = function(id) {
        let result = data.filter(e => e['_id'] == id);
        return result[0];
    };
    let all_emotions = EMOTIONS.map((e) => {
                            let emotion = search_value(e.id);
                            if (emotion) {
                              e.value = emotion['value'] + 1;
                            }
                            return e;
                          });
    return (
      <RadarChart
        cx={250}
        cy={200}
        outerRadius={150}
        width={500}
        height={350}
        data={all_emotions}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Emotions"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    );
}

export default EmotionChart;
