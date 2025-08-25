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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Plan de Ejercicio - 6 Meses</h2>
              <p className="text-muted-foreground text-lg">Progresión mensual adaptada a tu nivel</p>
            </div>
            <Button
              onClick={() => setShowPDFGenerator(true)}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-3 px-6"
              data-testid="button-download-pdf"
            >
              <Download className="mr-2" size={20} />
              Descargar PDF
            </Button>
          </div>

          {/* Tabs de Meses */}
          <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6].map((month) => (
              <Button
                key={month}
                onClick={() => setSelectedMonth(month)}
                variant={selectedMonth === month ? "default" : "secondary"}
                className={`font-bold py-2 px-4 ${
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
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Mes {selectedMonth} - Nivel {levelLabels[userData.stepsLevel]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentExercises.map((exercise, index) => (
                  <Card key={index} className="exercise-card bg-card hover:shadow-lg transition-all duration-200">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                          {index + 1}
                        </div>
                        <h4 className="text-lg font-bold">{exercise.name}</h4>
                      </div>
                      <p className="text-muted-foreground mb-4">{exercise.description}</p>
                      <div className="flex justify-between text-sm">
                        <span className="bg-muted px-2 py-1 rounded" data-testid={`text-duration-${index}`}>
                          {exercise.duration}
                        </span>
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded" data-testid={`text-frequency-${index}`}>
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
