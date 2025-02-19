import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  onClick: () => void;
  isMobile?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  isActive,
  onClick,
  isMobile = false
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2 text-sm rounded-lg transition-colors ${
        isActive
          ? 'bg-[#EA580C] text-[#2C3E50]'
          : 'text-white hover:bg-gray-800'
      } ${isMobile ? 'justify-start' : ''}`}
    >
      <Icon className="w-5 h-5 mr-3" />
      <span className="text-left">{label}</span>
    </button>
  );
}

export default SidebarItem;