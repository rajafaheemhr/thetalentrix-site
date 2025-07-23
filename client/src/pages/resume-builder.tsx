import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StepIndicator from "@/components/resume/step-indicator";
import ResumeForm from "@/components/resume/resume-form";
import { useResumeBuilder } from "@/hooks/use-resume-builder";
import { ChevronLeft, ChevronRight, Download, Check } from "lucide-react";
import { generateResumePDF } from "@/lib/pdf-generator";
import { useToast } from "@/hooks/use-toast";

export default function ResumeBuilder() {
  const { toast } = useToast();
  const {
    currentStep,
    totalSteps,
    resumeData,
    updateResumeData,
    nextStep,
    prevStep,
    isValid,
    reset
  } = useResumeBuilder();

  const handleDownloadPDF = async () => {
    try {
      await generateResumePDF(resumeData);
      toast({
        title: "Resume Downloaded!",
        description: "Your professional resume has been downloaded successfully.",
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error generating your resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleComplete = async () => {
    await handleDownloadPDF();
    // Optionally reset the form or redirect
    setTimeout(() => {
      reset();
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Professional Resume Builder</h1>
          <p className="text-xl text-gray-600">
            Create a professional, ATS-friendly resume in minutes
          </p>
        </div>

        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        <Card className="shadow-lg">
          <CardContent className="p-8">
            <ResumeForm
              currentStep={currentStep}
              resumeData={resumeData}
              updateResumeData={updateResumeData}
            />

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className={currentStep === 1 ? "invisible" : ""}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep === totalSteps ? (
                <Button
                  onClick={handleComplete}
                  className="btn-talentrix"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              ) : (
                <Button
                  onClick={nextStep}
                  className="btn-talentrix"
                  disabled={!isValid()}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Progress Information */}
        <div className="text-center mt-8">
          <p className="text-gray-600">
            Step {currentStep} of {totalSteps} completed
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2 max-w-md mx-auto">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
