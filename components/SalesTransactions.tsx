"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

const originalData = [
  { name: "JAN", value: 40 },
  { name: "FEB", value: 55 },
  { name: "MAR", value: 75 },
  { name: "APR", value: 35 },
  { name: "MEI", value: 80 },
  { name: "JUN", value: 45 },
];

const MAX_VALUE = 100;

export default function SalesTransactions() {
  const [progress, setProgress] = useState(0);
  const animationRef = useRef<number>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1800;
    const start = performance.now();
    const targetValue = 90375;

    const animate = (time: number) => {
      const p = Math.min((time - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);

      setProgress(ease);
      setCount(Math.floor(targetValue * ease));

      if (p < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const animatedData = originalData.map((item) => ({
    ...item,
    value: item.value * progress,
  }));

  return (
    <div className="bg-white rounded-[12px] p-6 shadow-sm h-full flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-start gap-4 mb-8 flex-nowrap">
        <div className="min-w-fit">
          <h3 className="text-[clamp(18px,2.5vw,32px)] font-semibold text-[#191919] whitespace-nowrap">
            Sales Transactions
          </h3>
          <p className="text-[clamp(12px,1.8vw,18px)] text-[#9A9A9A] whitespace-nowrap">
            Last updated: Jan 01, 2027
          </p>
        </div>

        <div className="text-right min-w-fit">
          <p className="text-[clamp(10px,1.5vw,14px)] text-[#9A9A9A] whitespace-nowrap">
            6 Types of Livestock
          </p>
          <p className="text-[clamp(22px,3vw,40px)] font-semibold text-[#1F4941] leading-none whitespace-nowrap">
            <AnimatedCounter end={91} suffix="M" />
            <span className="text-[#9A9A9A] text-[clamp(14px,2vw,26px)]">
              +
            </span>
          </p>
        </div>
      </div>

      {/* Chart */}
      <div
        className="bg-[#F4F6F5] rounded-[20px] 
                min-h-[220px] sm:min-h-[260px] 
                lg:flex-1"
      >
        <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] lg:min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={animatedData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1F4941" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#1F4941" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                interval={0}
                scale="point"
                tick={{ fill: "#9A9A9A", fontSize: 12 }}
              />

              <YAxis hide domain={[0, MAX_VALUE]} />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#1F4941"
                strokeWidth={3}
                fill="url(#colorArea)"
                dot={false}
                isAnimationActive={false}
              />

              <ReferenceLine
                segment={[
                  { x: "MAR", y: 0 },
                  { x: "MAR", y: animatedData[2].value },
                ]}
                stroke="#1F4941"
                strokeWidth={2}
              />

              <ReferenceDot
                x="MAR"
                y={animatedData[2].value}
                r={6}
                fill="#1F4941"
                stroke="white"
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Counter Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 text-center px-4"
          >
            <div className="flex items-center justify-center gap-4 whitespace-nowrap">
              <p className="text-[clamp(16px,2.5vw,26px)] font-semibold text-[#191919]">
                ${count.toLocaleString("de-DE")},00
              </p>
              <p className="text-[#35B46A] text-[clamp(10px,1.5vw,14px)] font-medium flex items-center gap-1 whitespace-nowrap">
                <img src="img/trend-up.svg" alt="" className="w-4 h-4" />
                <AnimatedCounter end={40} suffix="%" />
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
