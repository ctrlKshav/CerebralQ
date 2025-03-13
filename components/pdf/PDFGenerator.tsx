import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
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
  // Using client-side rendering for PDFDownloadLink
  const [isClient, setIsClient] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  
  // Determine if dark mode is active
  const isDarkMode = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Button disabled variant="outline" size="sm">
        <Download className="w-4 h-4 mr-2" />
        Preparing Download...
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={<PDFResultsDocument resultData={resultData} isDarkMode={isDarkMode} />}
      fileName={fileName}
    >
      {({ loading, error }) => (
        <Button 
          variant="outline" 
          size="sm" 
          disabled={loading}
        >
          <Download className="w-4 h-4 mr-2" />
          {loading ? 'Generating PDF...' : 'Download Report'}
        </Button>
      )}
    </PDFDownloadLink>
  );
};
