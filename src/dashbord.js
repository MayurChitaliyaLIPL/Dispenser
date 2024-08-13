import React from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts';
import Component from './chart';
import Componentpie from './pie';
import DataTable from './datatable';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"

import { Progress } from "./components/ui/progress"
// import MiniDrawer from './sidebar';

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};

const ChartContainer = ({ children }) => (
  <div className="bg-white p-4 shadow-md rounded-lg">
    {children}
  </div>
);

const Dashboard = () => {
  const blocksData = [
    { title: 'This Week', amount: '$1,329', percentage: 25 },
    { title: 'Last Week', amount: '$1,230', percentage: 20 },
    { title: 'Two Weeks Ago', amount: '$1,430', percentage: 15 },
    { title: 'Three Weeks Ago', amount: '$1,530', percentage: 10 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
   
    {/* <MiniDrawer/> */}
      <main className="flex-grow container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Responsive Cards */}
          {blocksData.map((block, index) => (
            <Card key={index} className="shadow-md rounded-lg">
              <CardHeader className="pb-2">
                <CardDescription>{block.title}</CardDescription>
                <CardTitle className="text-4xl">{block.amount}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  +{block.percentage}% from last week
                </div>
              </CardContent>
              <CardFooter>
                <Progress value={block.percentage} aria-label={`${block.percentage}% increase`}/>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChartContainer>
            <h2 className="text-lg font-bold mb-2 text-black">Graph 1</h2>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
                <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <ChartContainer>
            <h2 className="text-lg font-bold mb-2 text-black">Graph 2</h2>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
                <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <ChartContainer>
            <h2 className="text-lg font-bold mb-2 text-black">Graph 3</h2>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
                <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          <ChartContainer>
            <h2 className="text-lg font-bold mb-2 text-black">Graph 4</h2>
            <ResponsiveContainer width="100%" height={230}>
              <BarChart data={chartData}>
                <XAxis dataKey="month" />
                <Bar dataKey="desktop" fill={chartConfig.desktop.color} radius={4} />
                <Bar dataKey="mobile" fill={chartConfig.mobile.color} radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
          {/* Adding the Pie Chart */}
          <ChartContainer>
            <h2 className="text-lg font-bold mb-2 text-black">Pie Chart</h2>
            <Componentpie />
          </ChartContainer>
          <ChartContainer>
            <h2 className="text-lg font-bold mb-2 text-black">Data Table</h2>
            <DataTable />
          </ChartContainer>
        </div>
      </main>

      <Component />
    </div>
  );
};

export default Dashboard;