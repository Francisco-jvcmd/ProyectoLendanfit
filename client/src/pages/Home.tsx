import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { Questionnaire } from '@/components/Questionnaire';
import { Dashboard } from '@/components/Dashboard';
import { ExercisePlan } from '@/components/ExercisePlan';
import { NutritionPlan } from '@/components/NutritionPlan';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useUserData } from '@/hooks/useUserData';
import { UserData } from '@/types';

type Section = 'questionnaire' | 'dashboard' | 'exercise-plan' | 'nutrition';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section>('questionnaire');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { userData, setUserData } = useUserData();

  const handleQuestionnaireComplete = (data: UserData) => {
    setUserData(data);
    setCurrentSection('dashboard');
  };

  const handleNavigate = (section: Section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  const navigationItems = [
    { id: 'questionnaire', label: 'Inicio', testId: 'button-nav-inicio' },
    { id: 'dashboard', label: 'Mi Perfil', testId: 'button-nav-perfil' },
    { id: 'exercise-plan', label: 'Plan de Ejercicio', testId: 'button-nav-ejercicio' },
    { id: 'nutrition', label: 'Nutrición', testId: 'button-nav-nutricion' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavigate(item.id as Section)}
                  className="text-muted-foreground hover:text-primary"
                  data-testid={item.testId}
                >
                  {item.label}
                </Button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-muted-foreground hover:text-primary"
                  data-testid="button-mobile-menu"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Navegación</h3>
                  </div>
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => handleNavigate(item.id as Section)}
                      className={`justify-start text-left w-full py-3 px-4 ${
                        currentSection === item.id 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/80' 
                          : 'text-muted-foreground hover:text-primary hover:bg-muted'
                      }`}
                      data-testid={`mobile-${item.testId}`}
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
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
