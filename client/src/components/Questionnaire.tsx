import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { UserData } from '@/types';

interface QuestionnaireProps {
  onComplete: (data: UserData) => void;
}

export function Questionnaire({ onComplete }: QuestionnaireProps) {
  const [formData, setFormData] = useState<Partial<UserData>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.age && formData.stepsLevel && formData.healthStatus && formData.mainObjective) {
      onComplete(formData as UserData);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Crea Tu Plan Personalizado</h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            Responde estas preguntas para generar tu plan de ejercicio y nutrición de 6 meses
          </p>
        </div>

        <Card className="bg-card border-border shadow-xl">
          <CardContent className="p-4 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Edad */}
              <div className="space-y-3">
                <Label className="text-base sm:text-lg font-semibold">¿Cuál es tu edad?</Label>
                <Input
                  type="number"
                  min="13"
                  max="100"
                  placeholder="Ej: 25"
                  className="bg-muted border-border text-white text-base py-3"
                  value={formData.age || ''}
                  onChange={(e) => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) }))}
                  required
                  data-testid="input-age"
                />
              </div>

              {/* Nivel de Pasos */}
              <div className="space-y-3">
                <Label className="text-base sm:text-lg font-semibold">¿Cuántos pasos das diariamente?</Label>
                <RadioGroup
                  value={formData.stepsLevel}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, stepsLevel: value as UserData['stepsLevel'] }))}
                  className="space-y-3"
                >
                  <div className="flex items-start space-x-3 bg-muted p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors">
                    <RadioGroupItem value="basic" id="basic" data-testid="radio-steps-basic" className="mt-1" />
                    <Label htmlFor="basic" className="cursor-pointer flex-1">
                      <div className="font-medium text-sm sm:text-base">Menos de 4,000 pasos - Nivel Básico</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1">Estilo de vida sedentario, poco movimiento diario</div>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 bg-muted p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors">
                    <RadioGroupItem value="medium" id="medium" data-testid="radio-steps-medium" className="mt-1" />
                    <Label htmlFor="medium" className="cursor-pointer flex-1">
                      <div className="font-medium text-sm sm:text-base">4,000 - 6,000 pasos - Nivel Medio</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1">Actividad moderada, algunas caminatas</div>
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3 bg-muted p-3 sm:p-4 rounded-lg cursor-pointer hover:bg-opacity-80 transition-colors">
                    <RadioGroupItem value="advanced" id="advanced" data-testid="radio-steps-advanced" className="mt-1" />
                    <Label htmlFor="advanced" className="cursor-pointer flex-1">
                      <div className="font-medium text-sm sm:text-base">Más de 6,000 pasos - Nivel Avanzado</div>
                      <div className="text-xs sm:text-sm text-muted-foreground mt-1">Persona activa, ejercicio regular</div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Estado de Salud */}
              <div className="space-y-3">
                <Label className="text-base sm:text-lg font-semibold">¿Cómo describes tu estado de salud?</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, healthStatus: value as UserData['healthStatus'] }))}>
                  <SelectTrigger className="bg-muted border-border text-white py-3 text-base" data-testid="select-health-status">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excelente - Sin limitaciones de salud</SelectItem>
                    <SelectItem value="average">Promedio - Algunas molestias menores</SelectItem>
                    <SelectItem value="needs-improvement">Necesita Mejoras - Problemas de salud a considerar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Objetivo Principal */}
              <div className="space-y-3">
                <Label className="text-base sm:text-lg font-semibold">¿Cuál es tu objetivo principal?</Label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, mainObjective: value as UserData['mainObjective'] }))}>
                  <SelectTrigger className="bg-muted border-border text-white py-3 text-base" data-testid="select-main-objective">
                    <SelectValue placeholder="Selecciona tu objetivo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="reduce-stress">Reducir el estrés</SelectItem>
                    <SelectItem value="gain-muscle">Ganar masa muscular</SelectItem>
                    <SelectItem value="improve-resistance">Mejorar la resistencia</SelectItem>
                    <SelectItem value="lose-weight">Perder peso</SelectItem>
                    <SelectItem value="improve-flexibility">Mejorar flexibilidad</SelectItem>
                    <SelectItem value="general-health">Mejorar salud general</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-3 sm:py-4 px-6 text-base sm:text-lg mt-6"
                data-testid="button-submit-questionnaire"
              >
                Generar Mi Plan Personalizado
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
