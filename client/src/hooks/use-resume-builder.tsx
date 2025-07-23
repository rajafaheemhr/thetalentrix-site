import { useState, useCallback } from "react";
import type { ResumeData } from "@shared/schema";

const initialResumeData: ResumeData = {
  personalInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    portfolio: "",
  },
  summary: "",
  experience: [],
  education: {
    degree: "",
    institution: "",
    graduationYear: "",
    gpa: "",
  },
  skills: "",
};

export function useResumeBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const totalSteps = 5;

  const updateResumeData = useCallback((updates: Partial<ResumeData>) => {
    setResumeData(prev => ({ ...prev, ...updates }));
  }, []);

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, totalSteps]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= totalSteps) {
      setCurrentStep(step);
    }
  }, [totalSteps]);

  const reset = useCallback(() => {
    setCurrentStep(1);
    setResumeData(initialResumeData);
  }, []);

  const isValid = useCallback(() => {
    switch (currentStep) {
      case 1:
        return (
          resumeData.personalInfo.firstName.trim() !== "" &&
          resumeData.personalInfo.lastName.trim() !== "" &&
          resumeData.personalInfo.email.trim() !== "" &&
          resumeData.personalInfo.phone.trim() !== "" &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resumeData.personalInfo.email)
        );
      case 2:
        // Summary is optional, so always valid
        return true;
      case 3:
        // At least one experience with job title and company
        return resumeData.experience.length === 0 || 
               resumeData.experience.some(exp => 
                 exp.jobTitle.trim() !== "" && 
                 exp.companyName.trim() !== "" && 
                 exp.startDate.trim() !== ""
               );
      case 4:
        // Education and skills are optional, so always valid
        return true;
      case 5:
        // Final step is always valid
        return true;
      default:
        return false;
    }
  }, [currentStep, resumeData]);

  const getProgress = useCallback(() => {
    return (currentStep / totalSteps) * 100;
  }, [currentStep, totalSteps]);

  const getStepTitle = useCallback(() => {
    const titles = [
      "Personal Information",
      "Professional Summary", 
      "Work Experience",
      "Education & Skills",
      "Review & Download"
    ];
    return titles[currentStep - 1] || "";
  }, [currentStep]);

  const isComplete = useCallback(() => {
    return currentStep === totalSteps && isValid();
  }, [currentStep, totalSteps, isValid]);

  return {
    currentStep,
    totalSteps,
    resumeData,
    updateResumeData,
    nextStep,
    prevStep,
    goToStep,
    reset,
    isValid,
    getProgress,
    getStepTitle,
    isComplete,
  };
}
