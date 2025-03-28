import React, { useEffect, useState } from 'react';
import { BlobProvider } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { PDFResultsDocument } from '@/components/pdf/PDFDocument';
import { ResultData } from '@/types/tests/mbti';
import { useTheme } from 'next-themes';

interface PDFGeneratorProps {
  resultData: ResultData;
  fileName?: string;
}

export const PDFGenerator: React.FC<PDFGeneratorProps> = ({ 
  resultData, 
  fileName = 'personality-results.pdf' 
}) => {
  // Using client-side rendering
  const [isClient, setIsClient] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  
  // Determine if dark mode is active
  const isDarkMode = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    try {
      // Create a blob from the PDF document
      const blob = await renderToBlob();
      
      // Create a URL for the blob
      const url = URL.createObjectURL(blob);
      
      // Create an anchor element and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 100);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  // Function to render PDF to blob using @react-pdf/renderer
  const renderToBlob = async () => {
    const { pdf } = await import('@react-pdf/renderer');
    return await pdf(
      <PDFResultsDocument 
        resultData={resultData} 
        isDarkMode={isDarkMode} 
  
      />
    ).toBlob();
  };

  if (!isClient) {
    return (
      <Button disabled variant="outline" size="sm">
        <Download className="w-4 h-4 mr-2" />
        Preparing Download...
      </Button>
    );
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleDownload}
    >
      <Download className="w-4 h-4 mr-2" />
      Download Report
    </Button>
  );
};
