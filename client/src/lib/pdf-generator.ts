import jsPDF from 'jspdf';
import type { ResumeData } from '@shared/schema';

export async function generateResumePDF(resumeData: ResumeData): Promise<void> {
  try {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const lineHeight = 6;
    let yPosition = margin;

    // Helper function to add text with word wrapping
    const addWrappedText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10): number => {
      doc.setFontSize(fontSize);
      const lines = doc.splitTextToSize(text, maxWidth);
      doc.text(lines, x, y);
      return y + (lines.length * lineHeight);
    };

    // Helper function to check if we need a new page
    const checkPageBreak = (requiredSpace: number): number => {
      if (yPosition + requiredSpace > pageHeight - margin) {
        doc.addPage();
        return margin;
      }
      return yPosition;
    };

    // Title - Name
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    const fullName = `${resumeData.personalInfo.firstName} ${resumeData.personalInfo.lastName}`;
    doc.text(fullName, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 12;

    // Contact Information
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const contactInfo = [];
    if (resumeData.personalInfo.email) contactInfo.push(resumeData.personalInfo.email);
    if (resumeData.personalInfo.phone) contactInfo.push(resumeData.personalInfo.phone);
    if (resumeData.personalInfo.address) contactInfo.push(resumeData.personalInfo.address);
    
    if (contactInfo.length > 0) {
      doc.text(contactInfo.join(' | '), pageWidth / 2, yPosition, { align: 'center' });
      yPosition += lineHeight + 2;
    }

    // Links
    const links = [];
    if (resumeData.personalInfo.linkedin) links.push(resumeData.personalInfo.linkedin);
    if (resumeData.personalInfo.portfolio) links.push(resumeData.personalInfo.portfolio);
    
    if (links.length > 0) {
      doc.setTextColor(0, 0, 255);
      doc.text(links.join(' | '), pageWidth / 2, yPosition, { align: 'center' });
      doc.setTextColor(0, 0, 0);
      yPosition += lineHeight + 5;
    }

    // Divider line
    doc.setDrawColor(0, 0, 0);
    doc.line(margin, yPosition, pageWidth - margin, yPosition);
    yPosition += 8;

    // Professional Summary
    if (resumeData.summary && resumeData.summary.trim()) {
      yPosition = checkPageBreak(20);
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('PROFESSIONAL SUMMARY', margin, yPosition);
      yPosition += 8;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      yPosition = addWrappedText(resumeData.summary, margin, yPosition, pageWidth - 2 * margin);
      yPosition += 8;
    }

    // Work Experience
    if (resumeData.experience.length > 0) {
      yPosition = checkPageBreak(30);
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('WORK EXPERIENCE', margin, yPosition);
      yPosition += 8;

      resumeData.experience.forEach((exp, index) => {
        if (exp.jobTitle && exp.companyName) {
          yPosition = checkPageBreak(25);
          
          // Job Title
          doc.setFontSize(12);
          doc.setFont('helvetica', 'bold');
          doc.text(exp.jobTitle, margin, yPosition);
          
          // Dates (right aligned)
          if (exp.startDate) {
            const dateText = `${exp.startDate}${exp.endDate ? ` - ${exp.endDate}` : ' - Present'}`;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.text(dateText, pageWidth - margin, yPosition, { align: 'right' });
          }
          
          yPosition += lineHeight;

          // Company Name
          doc.setFontSize(11);
          doc.setFont('helvetica', 'italic');
          doc.text(exp.companyName, margin, yPosition);
          yPosition += lineHeight + 2;

          // Description
          if (exp.description && exp.description.trim()) {
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            yPosition = addWrappedText(exp.description, margin, yPosition, pageWidth - 2 * margin);
          }
          
          yPosition += 5;
        }
      });
    }

    // Education
    if (resumeData.education.degree || resumeData.education.institution) {
      yPosition = checkPageBreak(20);
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('EDUCATION', margin, yPosition);
      yPosition += 8;

      if (resumeData.education.degree) {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text(resumeData.education.degree, margin, yPosition);
        
        if (resumeData.education.graduationYear) {
          doc.setFontSize(10);
          doc.setFont('helvetica', 'normal');
          doc.text(resumeData.education.graduationYear, pageWidth - margin, yPosition, { align: 'right' });
        }
        
        yPosition += lineHeight;
      }

      if (resumeData.education.institution) {
        doc.setFontSize(11);
        doc.setFont('helvetica', 'italic');
        doc.text(resumeData.education.institution, margin, yPosition);
        yPosition += lineHeight;
      }

      if (resumeData.education.gpa) {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text(`GPA: ${resumeData.education.gpa}`, margin, yPosition);
        yPosition += lineHeight;
      }

      yPosition += 5;
    }

    // Skills
    if (resumeData.skills && resumeData.skills.trim()) {
      yPosition = checkPageBreak(20);
      
      doc.setFontSize(14);
      doc.setFont('helvetica', 'bold');
      doc.text('SKILLS', margin, yPosition);
      yPosition += 8;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      yPosition = addWrappedText(resumeData.skills, margin, yPosition, pageWidth - 2 * margin);
    }

    // Generate filename
    const fileName = `${resumeData.personalInfo.firstName}_${resumeData.personalInfo.lastName}_Resume.pdf`;
    
    // Save the PDF
    doc.save(fileName);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF resume');
  }
}
