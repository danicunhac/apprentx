import React from 'react';
import { Dot } from './styles';

interface OnboardingDotsProps {
  isActive?: boolean;
}

const OnboardingDot: React.FC<OnboardingDotsProps> = ({ isActive = false }) => {
  return <Dot isActive={isActive} />;
};

export default OnboardingDot;
