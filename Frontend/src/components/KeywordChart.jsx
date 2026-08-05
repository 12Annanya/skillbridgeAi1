import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function KeywordChart({ missingSkills }) {
  const chartData = missingSkills.map((s) => ({ name: s.name, hours: s.hours }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={chartData} layout="vertical" margin={{ left: 20 }}>
        <XAxis type="number" stroke="#8892A6" />
        <YAxis type="category" dataKey="name" stroke="#8892A6" width={120} />
        <Tooltip contentStyle={{ background: "#0f1524", border: "1px solid rgba(255,255,255,.1)" }} />
        <Bar dataKey="hours" fill="url(#barGradient)" radius={[0, 8, 8, 0]} />
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default KeywordChart;