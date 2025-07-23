import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Plus, Trash2, CheckCircle } from "lucide-react";
import type { ResumeData } from "@shared/schema";

interface ResumeFormProps {
  currentStep: number;
  resumeData: ResumeData;
  updateResumeData: (data: Partial<ResumeData>) => void;
}

export default function ResumeForm({ currentStep, resumeData, updateResumeData }: ResumeFormProps) {
  const addExperience = () => {
    const newExperience = {
      jobTitle: "",
      companyName: "",
      startDate: "",
      endDate: "",
      description: ""
    };
    updateResumeData({
      experience: [...resumeData.experience, newExperience]
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperience = resumeData.experience.filter((_, i) => i !== index);
    updateResumeData({ experience: updatedExperience });
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updatedExperience = resumeData.experience.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    );
    updateResumeData({ experience: updatedExperience });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input
                  value={resumeData.personalInfo.firstName}
                  onChange={(e) => updateResumeData({
                    personalInfo: { ...resumeData.personalInfo, firstName: e.target.value }
                  })}
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input
                  value={resumeData.personalInfo.lastName}
                  onChange={(e) => updateResumeData({
                    personalInfo: { ...resumeData.personalInfo, lastName: e.target.value }
                  })}
                  placeholder="Enter your last name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => updateResumeData({
                    personalInfo: { ...resumeData.personalInfo, email: e.target.value }
                  })}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => updateResumeData({
                    personalInfo: { ...resumeData.personalInfo, phone: e.target.value }
                  })}
                  placeholder="(555) 123-4567"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">Address</label>
                <Input
                  value={resumeData.personalInfo.address || ""}
                  onChange={(e) => updateResumeData({
                    personalInfo: { ...resumeData.personalInfo, address: e.target.value }
                  })}
                  placeholder="Your full address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">LinkedIn Profile</label>
                <Input
                  type="url"
                  value={resumeData.personalInfo.linkedin || ""}
                  onChange={(e) => updateResumeData({
                    personalInfo: { ...resumeData.personalInfo, linkedin: e.target.value }
                  })}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Portfolio/Website</label>
                <Input
                  type="url"
                  value={resumeData.personalInfo.portfolio || ""}
                  onChange={(e) => updateResumeData({
                    personalInfo: { ...resumeData.personalInfo, portfolio: e.target.value }
                  })}
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Professional Summary</h3>
            <div>
              <label className="block text-sm font-medium mb-2">Professional Summary</label>
              <Textarea
                value={resumeData.summary || ""}
                onChange={(e) => updateResumeData({ summary: e.target.value })}
                placeholder="Write a brief summary of your professional background and key achievements..."
                className="min-h-[150px]"
              />
              <p className="text-sm text-gray-500 mt-2">
                Tip: Keep it concise (2-3 sentences) and highlight your most relevant skills and experience.
              </p>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">Work Experience</h3>
              <Button onClick={addExperience} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </div>
            
            {resumeData.experience.length === 0 && (
              <Card className="border-dashed">
                <CardContent className="p-8 text-center">
                  <p className="text-gray-500 mb-4">No work experience added yet</p>
                  <Button onClick={addExperience} variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Experience
                  </Button>
                </CardContent>
              </Card>
            )}

            {resumeData.experience.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-medium">Experience #{index + 1}</h4>
                    {resumeData.experience.length > 1 && (
                      <Button
                        onClick={() => removeExperience(index)}
                        variant="ghost"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Title *</label>
                      <Input
                        value={exp.jobTitle}
                        onChange={(e) => updateExperience(index, 'jobTitle', e.target.value)}
                        placeholder="e.g. Software Engineer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <Input
                        value={exp.companyName}
                        onChange={(e) => updateExperience(index, 'companyName', e.target.value)}
                        placeholder="e.g. Tech Corp"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Start Date *</label>
                      <Input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">End Date</label>
                      <Input
                        type="month"
                        value={exp.endDate || ""}
                        onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                        placeholder="Leave blank if current position"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2">Job Description & Achievements</label>
                      <Textarea
                        value={exp.description || ""}
                        onChange={(e) => updateExperience(index, 'description', e.target.value)}
                        placeholder="Describe your responsibilities, achievements, and key contributions..."
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Education & Skills</h3>
            
            {/* Education Section */}
            <div>
              <h4 className="text-lg font-medium mb-4">Education</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Degree</label>
                  <Input
                    value={resumeData.education.degree || ""}
                    onChange={(e) => updateResumeData({
                      education: { ...resumeData.education, degree: e.target.value }
                    })}
                    placeholder="e.g. Bachelor of Science in Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Institution</label>
                  <Input
                    value={resumeData.education.institution || ""}
                    onChange={(e) => updateResumeData({
                      education: { ...resumeData.education, institution: e.target.value }
                    })}
                    placeholder="e.g. University of Technology"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Graduation Year</label>
                  <Input
                    value={resumeData.education.graduationYear || ""}
                    onChange={(e) => updateResumeData({
                      education: { ...resumeData.education, graduationYear: e.target.value }
                    })}
                    placeholder="e.g. 2020"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">GPA (Optional)</label>
                  <Input
                    value={resumeData.education.gpa || ""}
                    onChange={(e) => updateResumeData({
                      education: { ...resumeData.education, gpa: e.target.value }
                    })}
                    placeholder="e.g. 3.8/4.0"
                  />
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h4 className="text-lg font-medium mb-4">Skills</h4>
              <div>
                <label className="block text-sm font-medium mb-2">Technical Skills</label>
                <Textarea
                  value={resumeData.skills || ""}
                  onChange={(e) => updateResumeData({ skills: e.target.value })}
                  placeholder="List your key skills separated by commas (e.g. JavaScript, React, Node.js, Python, SQL, Git)"
                  className="min-h-[100px]"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Separate skills with commas. Focus on skills relevant to your target role.
                </p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-medium">Resume Complete!</span>
              </div>
            </div>
            
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Great! Your resume is ready. Review the information below and download your professional resume.
              </AlertDescription>
            </Alert>

            {/* Resume Preview */}
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-4">Resume Preview</h4>
                <div className="max-h-96 overflow-y-auto space-y-4 text-sm">
                  {/* Personal Info */}
                  <div className="text-center border-b pb-4">
                    <h3 className="text-xl font-bold">
                      {resumeData.personalInfo.firstName} {resumeData.personalInfo.lastName}
                    </h3>
                    <p className="text-gray-600">
                      {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
                    </p>
                    {resumeData.personalInfo.address && (
                      <p className="text-gray-600">{resumeData.personalInfo.address}</p>
                    )}
                    <div className="flex justify-center space-x-4 mt-2">
                      {resumeData.personalInfo.linkedin && (
                        <a href={resumeData.personalInfo.linkedin} className="text-primary text-xs">
                          LinkedIn
                        </a>
                      )}
                      {resumeData.personalInfo.portfolio && (
                        <a href={resumeData.personalInfo.portfolio} className="text-primary text-xs">
                          Portfolio
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  {resumeData.summary && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Professional Summary</h4>
                      <p className="text-gray-700">{resumeData.summary}</p>
                    </div>
                  )}

                  {/* Experience */}
                  {resumeData.experience.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Work Experience</h4>
                      <div className="space-y-3">
                        {resumeData.experience.map((exp, index) => (
                          <div key={index} className="border-l-2 border-gray-300 pl-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">{exp.jobTitle}</h5>
                                <p className="text-gray-600">{exp.companyName}</p>
                              </div>
                              <div className="text-right text-xs text-gray-500">
                                {exp.startDate} - {exp.endDate || "Present"}
                              </div>
                            </div>
                            {exp.description && (
                              <p className="text-gray-700 text-xs mt-1">{exp.description}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education */}
                  {(resumeData.education.degree || resumeData.education.institution) && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Education</h4>
                      <div>
                        {resumeData.education.degree && (
                          <p className="font-medium">{resumeData.education.degree}</p>
                        )}
                        {resumeData.education.institution && (
                          <p className="text-gray-600">{resumeData.education.institution}</p>
                        )}
                        <div className="flex space-x-4 text-xs text-gray-500">
                          {resumeData.education.graduationYear && (
                            <span>Graduated: {resumeData.education.graduationYear}</span>
                          )}
                          {resumeData.education.gpa && (
                            <span>GPA: {resumeData.education.gpa}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Skills */}
                  {resumeData.skills && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-1">
                        {resumeData.skills.split(',').map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill.trim()}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
}
