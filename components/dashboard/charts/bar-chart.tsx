"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface BarChartProps {
  data: Array<{
    name: string
    value: number
  }>
  color?: string
}

export function SimpleBarChart({ data, color = "hsl(var(--chart-1))" }: BarChartProps) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "Value",
          color: color,
        },
      }}
      className="h-[200px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar
            dataKey="value"
            style={{
              fill: "var(--color-value)",
            }}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
