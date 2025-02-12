import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import type { populationChartProps } from "../utlis/customTypes"

const PopulationChart = ({ data }: { data: populationChartProps }) => {
  // Format population numbers with commas
  const formatPopulation = (value: number) => value.toLocaleString()

  // Format year display
  const formatYear = (value: number) => `'${value.toString().slice(2)}` // Shows '60 instead of 1960

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="year"
            tickFormatter={formatYear}
            label={{
              value: "Year",
              position: "bottom",
              offset: 0,
              style: {
                fill: "#333", // Darker color
                fontSize: "16px", // Larger font
                fontWeight: "bold", // Bold text
              },
            }}
            tick={{
              style: {
                fontSize: "10px", // Smaller font size
                fill: "#4a4a4a", // Dark gray color
              },
            }}
          />

          <YAxis
            tickFormatter={formatPopulation}
            label={{
              value: "Population",
              angle: -90,
              position: "left",
              offset: 20, // Increased from 10
              style: {
                fill: "#333", // Darker color
                fontSize: "16px", // Larger font
                fontWeight: "bold", // Bold text
              },
            }}
            tick={{
              style: {
                fontSize: "10px", // Smaller font size
                fill: "#4a4a4a", // Dark gray color
              },
            }}
          />

          <Tooltip
            formatter={(value: number) => [
              formatPopulation(value),
              "Population",
            ]}
            labelFormatter={(year) => `Year: ${year}`}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ fill: "#8884d8", strokeWidth: 2 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PopulationChart
