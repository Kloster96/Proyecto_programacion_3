import React from 'react'
import {
  Pie,
  PieChart,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import CustomTooltop from './CustomTooltop';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({data, colors}) => {
  return (
    <div>
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="count"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    outerRadius={130}
                    innerRadius={100}
                    labelLine={false}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltop />} />
                <Legend content={<CustomLegend />} />
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default CustomPieChart