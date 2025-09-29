
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '@/components/ui/chart';
import { PersonaType } from './personaData';

interface PersonaChartProps {
  activePersona: PersonaType;
}

export const PersonaChart = ({ activePersona }: PersonaChartProps) => {
  return (
    <div className="h-[400px] w-full">
      <ChartContainer config={{
        analyst: { color: "#1A1F2C" },
        actor: { color: "#221F26" },
        ally: { color: "#222222" },
        aggressor: { color: "#333333" }
      }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius={150} data={activePersona.radarData}>
            <PolarGrid stroke="#222222" />
            <PolarAngleAxis 
              dataKey="subject" 
              stroke="#222222"
              tickLine={true}
              tick={{ fill: '#222222', fontSize: 14 }}
            />
            <Radar
              name="Persona"
              dataKey="value"
              stroke={activePersona.color}
              fill={activePersona.color}
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};
