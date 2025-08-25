import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ChartLine, Heart, Target, Footprints } from 'lucide-react';
import { UserData } from '@/types';

interface DashboardProps {
  userData: UserData;
  onNavigate: (section: 'exercise-plan' | 'nutrition') => void;
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

const stepsLabels = {
  basic: 'Menos de 4,000 pasos',
  medium: '4,000 - 6,000 pasos',
  advanced: 'Más de 6,000 pasos'
};

export function Dashboard({ userData, onNavigate }: DashboardProps) {
  const currentDate = new Date().toLocaleDateString('es-ES', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Mi Perfil de Entrenamiento</h2>
          <p className="text-muted-foreground text-lg">Resumen de tu información y progreso</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Edad Card */}
          <Card className="bg-card text-center">
            <CardContent className="p-6">
              <div className="text-primary text-3xl mb-2">
                <Calendar className="mx-auto" size={32} />
              </div>
              <div className="text-2xl font-bold mb-1" data-testid="text-age">{userData.age}</div>
              <div className="text-muted-foreground">Años</div>
            </CardContent>
          </Card>

          {/* Nivel Card */}
          <Card className="bg-card text-center">
            <CardContent className="p-6">
              <div className="text-primary text-3xl mb-2">
                <ChartLine className="mx-auto" size={32} />
              </div>
              <div className="text-xl font-bold mb-1" data-testid="text-level">{levelLabels[userData.stepsLevel]}</div>
              <div className="text-muted-foreground">Nivel de Actividad</div>
            </CardContent>
          </Card>

          {/* Salud Card */}
          <Card className="bg-card text-center">
            <CardContent className="p-6">
              <div className="text-primary text-3xl mb-2">
                <Heart className="mx-auto" size={32} />
              </div>
              <div className="text-xl font-bold mb-1" data-testid="text-health">{healthLabels[userData.healthStatus]}</div>
              <div className="text-muted-foreground">Estado de Salud</div>
            </CardContent>
          </Card>

          {/* Fecha Card */}
          <Card className="bg-card text-center">
            <CardContent className="p-6">
              <div className="text-primary text-3xl mb-2">
                <Calendar className="mx-auto" size={32} />
              </div>
              <div className="text-lg font-bold mb-1" data-testid="text-current-date">{currentDate}</div>
              <div className="text-muted-foreground">Fecha Actual</div>
            </CardContent>
          </Card>
        </div>

        {/* Objetivo y Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="text-primary text-2xl mr-3" size={28} />
                <h3 className="text-xl font-bold">Objetivo Principal</h3>
              </div>
              <p className="text-muted-foreground text-lg" data-testid="text-objective">
                {objectiveLabels[userData.mainObjective]}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Footprints className="text-primary text-2xl mr-3" size={28} />
                <h3 className="text-xl font-bold">Pasos Diarios</h3>
              </div>
              <p className="text-muted-foreground text-lg" data-testid="text-steps">
                {stepsLabels[userData.stepsLevel]}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Botones de Acción */}
        <div className="text-center">
          <div className="space-x-4">
            <Button 
              onClick={() => onNavigate('exercise-plan')}
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-3 px-8"
              data-testid="button-view-exercise-plan"
            >
              Ver Plan de Ejercicio
            </Button>
            <Button 
              onClick={() => onNavigate('nutrition')}
              className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-bold py-3 px-8"
              data-testid="button-view-nutrition-plan"
            >
              Ver Plan Nutricional
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
