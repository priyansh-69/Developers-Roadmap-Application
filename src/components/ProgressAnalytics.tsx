// src/components/ProgressAnalytics.tsx

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
  LabelList,
} from 'recharts';

interface SectionData {
  section: string;
  completed: number;
  remaining: number;
}

interface ProgressAnalyticsProps {
  data: SectionData[];
}

export function ProgressAnalytics({ data }: ProgressAnalyticsProps) {
  return (
    <div className="mt-8 p-6 border rounded-lg bg-white shadow-lg">
<h2 className="text-2xl font-bold mb-6 text-gray-900">Progress Analytics</h2>
<ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} margin={{ top: 20, right: 40, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="section" tick={{ fontSize: 14, fill: '#4B5563' }} />
          <YAxis
            domain={[0, 100]}
            tickFormatter={(tick) => `${tick}%`}
            tick={{ fontSize: 14, fill: '#4B5563' }}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#F9FAFB', border: 'none', borderRadius: 8 }}
            formatter={(value: number, name: string) => `${value}% ${name}`}
          />
          <Legend />

          {/* Completed portion */}
          <Bar dataKey="completed" stackId="progressStack" fill="#4f46e5" barSize={50} radius={[8, 8, 0, 0]}>
            <LabelList
              dataKey="completed"
              position="inside"
              fill="#ffffff"
              fontSize={14}
              fontWeight="bold"
              formatter={(val: number) => (val > 0 ? `${val}%` : '')}
            />
          </Bar>

          {/* Remaining portion */}
          <Bar dataKey="remaining" stackId="progressStack" fill="#9ca3af" barSize={50} radius={[0, 0, 8, 8]}>
            <LabelList
              dataKey="remaining"
              position="inside"
              fill="#1f2937"
              fontSize={14}
              fontWeight="bold"
              formatter={(val: number) => (val > 0 ? `${val}%` : '')}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
