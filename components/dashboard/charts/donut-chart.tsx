"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

interface DonutChartProps {
  data: Array<{
    name: string
    value: number
    color: string
  }>
  centerText?: {
    value: string
    label: string
  }
}

export function DonutChart({ data, centerText }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <div className="relative">
      <ChartContainer
        config={data.reduce(
          (acc, item) => ({
            ...acc,
            [item.name.toLowerCase()]: {
              label: item.name,
              color: item.color,
            },
          }),
          {},
        )}
        className="h-[200px]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <ChartTooltip content={<ChartTooltipContent />} />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      {centerText && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">{centerText.value}</div>
            <div className="text-sm text-muted-foreground">{centerText.label}</div>
          </div>
        </div>
      )}
    </div>
  )
}
