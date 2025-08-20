import React from 'react';
import { 
  Globe, 
  Award, 
  Shield, 
  Truck, 
  ChevronDown, 
  ArrowRight, 
  BookOpen 
} from 'lucide-react';

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className = '' }) => {
  const iconMap: { [key: string]: React.ComponentType<any> } = {
    Globe,
    Award,
    Shield,
    Truck,
    ChevronDown,
    ArrowRight,
    BookOpen
  };

  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    return <div className={`w-${size} h-${size} bg-current rounded ${className}`}></div>;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
