import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function SkillChart({ matchedCount, missingCount }) {
  const data = [
    { name: "Matched", value: matchedCount },
    { name: "Missing", value: missingCount },
  ];
  const COLORS = ["#00D4FF", "#8B5CF6"];

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={4}
        >
          {data.map((entry, i) => (
            <Cell key={i} fill={COLORS[i]} stroke="none" />
          ))}
        </Pie>
        <Tooltip contentStyle={{ background: "#0f1524", border: "1px solid rgba(255,255,255,.1)" }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default SkillChart;