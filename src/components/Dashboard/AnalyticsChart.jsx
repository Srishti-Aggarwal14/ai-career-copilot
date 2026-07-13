import "./AnalyticsChart.css";
import { getDashboardData } from "../../utils/dashboardData";
import { getXPData } from "../../utils/xpSystem";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";



function AnalyticsChart() {
  const dashboard = getDashboardData();

const xp = getXPData();

const data = [

  {
    metric: "Resume",
    score: dashboard.resumeScore
  },

  {
    metric: "Interview",
    score: dashboard.interviewScore
  },

  {
    metric: "DSA",
    score: dashboard.dsaSolved
  },

  {
    metric: "XP",
    score: xp.xp
  },

  {
    metric: "Placement",
    score: Math.round(
      (dashboard.resumeScore +
        dashboard.interviewScore) / 2
    )
  }

];

  return (

    <div className="chart-card">

      <h2>📈 Interview Performance</h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="metric" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#2563eb"
            strokeWidth={4}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>

  );

}

export default AnalyticsChart;