import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  unit: string;
  percentage: number;
  icon: LucideIcon;
  color: string;
  bg:string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  unit,
  // percentage,
  icon: Icon,
  color,
  bg
}) => {
  return (
    <div className={`${bg} rounded-xl p-4 shadow-sm`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-white text-sm">{title}</h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-2xl font-bold text-white">{value}</span>
            <span className="text-white ml-1">{unit}</span>
          </div>
        </div>
        <div className={`p-2 rounded-lg ${color}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      <div className="mt-1">
        {/* <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${color.replace('bg-', 'bg-opacity-100 bg-')}`}
            style={{ width: `${percentage}%` }}
          />
        </div> */}
      </div>
    </div>
  );
}

export default StatCard;