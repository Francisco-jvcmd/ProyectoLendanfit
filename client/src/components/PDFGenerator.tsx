import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Download, Check, X } from 'lucide-react';
import { useState } from 'react';
import { UserData } from '@/types';
import { exerciseData } from '@/data/exerciseData';
import { nutritionData } from '@/data/nutritionData';

interface PDFGeneratorProps {
  userData: UserData;
  onClose: () => void;
}

const levelLabels = {
  basic: 'Básico',
  medium: 'Medio',
  advanced: 'Avanzado'
};

const healthLabels = {
  excellent: 'Excelente',
  average: 'Promedio',
  'needs-improvement': 'Necesita Mejoras'
};

const objectiveLabels = {
  'reduce-stress': 'Reducir el estrés',
  'gain-muscle': 'Ganar masa muscular',
  'improve-resistance': 'Mejorar la resistencia',
  'lose-weight': 'Perder peso',
  'improve-flexibility': 'Mejorar flexibilidad',
  'general-health': 'Mejorar salud general'
};

export function PDFGenerator({ userData, onClose }: PDFGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    // Simulate PDF generation time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    try {
      // Import jsPDF dynamically
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(20);
      doc.text('Plan Lendanfit - 6 Meses', 20, 30);
      
      // Add user info
      doc.setFontSize(14);
      doc.text(`Edad: ${userData.age} años`, 20, 50);
      doc.text(`Nivel: ${levelLabels[userData.stepsLevel]}`, 20, 65);
      doc.text(`Salud: ${healthLabels[userData.healthStatus]}`, 20, 80);
      doc.text(`Objetivo: ${objectiveLabels[userData.mainObjective]}`, 20, 95);
      
      // Add exercise plan
      doc.setFontSize(16);
      doc.text('Plan de Ejercicio:', 20, 120);
      
      let yPosition = 140;
      const level = userData.stepsLevel;
      
      for (let month = 1; month <= 6; month++) {
        const exercises = exerciseData[level][month] || exerciseData[level][1];
        doc.setFontSize(14);
        doc.text(`Mes ${month}:`, 20, yPosition);
        yPosition += 15;
        
        exercises.forEach((exercise) => {
          if (yPosition > 270) {
            doc.addPage();
            yPosition = 20;
          }
          doc.setFontSize(10);
          const text = `• ${exercise.name} - ${exercise.frequency}`;
          doc.text(text, 25, yPosition);
          yPosition += 10;
        });
        yPosition += 10;
      }
      
      // Add nutrition plan
      if (yPosition > 200) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(16);
      doc.text('Plan Nutricional:', 20, yPosition);
      yPosition += 20;
      
      for (let month = 1; month <= 6; month++) {
        const nutrition = nutritionData[month];
        if (nutrition) {
          if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
          }
          
          doc.setFontSize(14);
          doc.text(`Mes ${month}: ${nutrition.title}`, 20, yPosition);
          yPosition += 15;
          
          nutrition.recommendations.forEach((rec) => {
            if (yPosition > 270) {
              doc.addPage();
              yPosition = 20;
            }
            doc.setFontSize(10);
            doc.text(`• ${rec.type}: ${rec.amount}`, 25, yPosition);
            yPosition += 10;
          });
          yPosition += 10;
        }
      }
      
      // Save the PDF
      doc.save('plan-lendanfit-6-meses.pdf');
      
      setIsComplete(true);
      
      // Auto-close after showing success
      setTimeout(() => {
        onClose();
      }, 1500);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <div className="flex justify-between items-center">
            <DialogTitle className="text-2xl font-bold">Generar PDF</DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground"
              data-testid="button-close-pdf-modal"
            >
              <X size={20} />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="text-center py-8">
          {!isGenerating && !isComplete && (
            <>
              <Download className="mx-auto mb-4 text-primary" size={48} />
              <h3 className="text-lg font-semibold mb-4">¿Descargar tu plan completo?</h3>
              <p className="text-muted-foreground mb-6">
                Se generará un PDF con tu plan de ejercicio y nutrición de 6 meses
              </p>
              <Button 
                onClick={generatePDF}
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-3 px-8"
                data-testid="button-generate-pdf"
              >
                <Download className="mr-2" size={20} />
                Generar PDF
              </Button>
            </>
          )}
          
          {isGenerating && (
            <>
              <div className="animate-spin mx-auto mb-4 text-primary">
                <Download size={48} />
              </div>
              <h3 className="text-lg font-semibold mb-4">Generando tu PDF...</h3>
              <p className="text-muted-foreground">Por favor espera un momento</p>
            </>
          )}
          
          {isComplete && (
            <>
              <Check className="mx-auto mb-4 text-green-500" size={48} />
              <h3 className="text-lg font-semibold mb-4 text-green-500">¡PDF Descargado!</h3>
              <p className="text-muted-foreground">Tu plan ha sido guardado exitosamente</p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
