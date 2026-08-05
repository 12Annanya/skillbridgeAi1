import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function CompanyChart({ studyPlan }) {
  const freq = {};

  studyPlan.forEach((phase) =>
    phase.topics.forEach((t) =>
      t.askedBy.forEach((company) => {
        freq[company] = (freq[company] || 0) + 1;
      })
    )
  );

  const chartData = Object.entries(freq)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" stroke="#8892A6" angle={-20} textAnchor="end" height={60} />
        <YAxis stroke="#8892A6" allowDecimals={false} />
        <Tooltip contentStyle={{ background: "#0f1524", border: "1px solid rgba(255,255,255,.1)" }} />
        <Bar dataKey="count" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default CompanyChart;