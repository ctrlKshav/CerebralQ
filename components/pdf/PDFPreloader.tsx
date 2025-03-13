import { useEffect } from 'react';
import { Font } from '@react-pdf/renderer';

// Register fonts used in our PDF documents
const PDFPreloader = () => {
  useEffect(() => {
    // Register the Helvetica font and its variants, which is used across our PDFs
    Font.register({
      family: 'Helvetica',
      fonts: [
        { src: 'https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf' }, // Regular version
        { 
          src: 'https://fonts.gstatic.com/s/roboto/v29/KFOlCnqEu92Fr1MmWUlfBBc9.ttf',
          fontWeight: 'bold',
          fontStyle: 'normal',
        },
      ]
    });
  }, []);

  // This component doesn't render anything visible
  return null;
};

export default PDFPreloader;
