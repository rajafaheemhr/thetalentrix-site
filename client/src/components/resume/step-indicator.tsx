import { CheckCircle } from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="step-indicator">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        
        return (
          <div
            key={stepNumber}
            className={`step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
          >
            {isCompleted ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              stepNumber
            )}
          </div>
        );
      })}
    </div>
  );
}
