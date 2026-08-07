import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function WeeklyChart() {

  const data = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 4 },
    { day: "Wed", hours: 3 },
    { day: "Thu", hours: 5 },
    { day: "Fri", hours: 6 },
    { day: "Sat", hours: 4 },
    { day: "Sun", hours: 7 }
  ];

  return (
    <div className="chart-card">
      <h3>Weekly Study Progress</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="hours"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default WeeklyChart;