import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';
import { UserData } from '@/types';
import { exerciseData } from '@/data/exerciseData';
import { PDFGenerator } from './PDFGenerator';

interface ExercisePlanProps {
  userData: UserData;
}

const levelLabels = {
  basic: 'Básico',
  medium: 'Medio',
  advanced: 'Avanzado'
};

export function ExercisePlan({ userData }: ExercisePlanProps) {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [showPDFGenerator, setShowPDFGenerator] = useState(false);

  const currentExercises = exerciseData[userData.stepsLevel][selectedMonth] || exerciseData[userData.stepsLevel][1];

  return (
    <>
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 sm:mb-12 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">Plan de Ejercicio - 6 Meses</h2>
              <p className="text-muted-foreground text-sm sm:text-lg">Progresión mensual adaptada a tu nivel</p>
            </div>
            <Button
              onClick={() => setShowPDFGenerator(true)}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-2 sm:py-3 px-4 sm:px-6 w-full sm:w-auto"
              data-testid="button-download-pdf"
            >
              <Download className="mr-2" size={16} />
              Descargar PDF
            </Button>
          </div>

          {/* Tabs de Meses */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2">
            {[1, 2, 3, 4, 5, 6].map((month) => (
              <Button
                key={month}
                onClick={() => setSelectedMonth(month)}
                variant={selectedMonth === month ? "default" : "secondary"}
                className={`font-bold py-2 px-3 sm:px-4 text-sm sm:text-base flex-shrink-0 ${
                  selectedMonth === month 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-foreground hover:bg-border'
                }`}
                data-testid={`button-month-${month}`}
              >
                Mes {month}
              </Button>
            ))}
          </div>

          {/* Contenido del Mes */}
          <div>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center sm:text-left">
                Mes {selectedMonth} - Nivel {levelLabels[userData.stepsLevel]}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {currentExercises.map((exercise, index) => (
                  <Card key={index} className="exercise-card bg-card hover:shadow-lg transition-all duration-200">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center font-bold mr-2 sm:mr-3 text-sm sm:text-base flex-shrink-0">
                          {index + 1}
                        </div>
                        <h4 className="text-base sm:text-lg font-bold leading-tight">{exercise.name}</h4>
                      </div>
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{exercise.description}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-xs sm:text-sm">
                        <span className="bg-muted px-2 py-1 rounded text-center sm:text-left" data-testid={`text-duration-${index}`}>
                          {exercise.duration}
                        </span>
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded text-center sm:text-left" data-testid={`text-frequency-${index}`}>
                          {exercise.frequency}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPDFGenerator && (
        <PDFGenerator
          userData={userData}
          onClose={() => setShowPDFGenerator(false)}
        />
      )}
    </>
  );
}
