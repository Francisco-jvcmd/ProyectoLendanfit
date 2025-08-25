import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { Questionnaire } from '@/components/Questionnaire';
import { Dashboard } from '@/components/Dashboard';
import { ExercisePlan } from '@/components/ExercisePlan';
import { NutritionPlan } from '@/components/NutritionPlan';
import { Button } from '@/components/ui/button';
import { useUserData } from '@/hooks/useUserData';
import { UserData } from '@/types';

type Section = 'questionnaire' | 'dashboard' | 'exercise-plan' | 'nutrition';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('questionnaire');
  const { userData, setUserData } = useUserData();

  const handleQuestionnaireComplete = (data: UserData) => {
    setUserData(data);
    setCurrentSection('dashboard');
  };

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            <nav className="hidden md:flex space-x-6">
              <Button
                variant="ghost"
                onClick={() => handleNavigate('questionnaire')}
                className="text-muted-foreground hover:text-primary"
                data-testid="button-nav-inicio"
              >
                Inicio
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigate('dashboard')}
                className="text-muted-foreground hover:text-primary"
                data-testid="button-nav-perfil"
              >
                Mi Perfil
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigate('exercise-plan')}
                className="text-muted-foreground hover:text-primary"
                data-testid="button-nav-ejercicio"
              >
                Plan de Ejercicio
              </Button>
              <Button
                variant="ghost"
                onClick={() => handleNavigate('nutrition')}
                className="text-muted-foreground hover:text-primary"
                data-testid="button-nav-nutricion"
              >
                Nutrición
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {currentSection === 'questionnaire' && (
          <section className="section active">
            <Questionnaire onComplete={handleQuestionnaireComplete} />
          </section>
        )}

        {currentSection === 'dashboard' && (
          <section className="section active">
            <Dashboard userData={userData} onNavigate={handleNavigate} />
          </section>
        )}

        {currentSection === 'exercise-plan' && (
          <section className="section active">
            <ExercisePlan userData={userData} />
          </section>
        )}

        {currentSection === 'nutrition' && (
          <section className="section active">
            <NutritionPlan />
          </section>
        )}
      </main>
    </div>
  );
}
