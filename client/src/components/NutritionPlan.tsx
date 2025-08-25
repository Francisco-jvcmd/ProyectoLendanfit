import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Utensils, X } from 'lucide-react';
import { nutritionData } from '@/data/nutritionData';
import { NutritionRecommendation } from '@/types';

export function NutritionPlan() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedItem, setSelectedItem] = useState<NutritionRecommendation | null>(null);

  const currentNutrition = nutritionData[selectedMonth] || nutritionData[1];

  const openModal = (item: NutritionRecommendation) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Plan Nutricional</h2>
            <p className="text-muted-foreground text-lg">Recomendaciones alimentarias personalizadas</p>
          </div>

          {/* Tabs de Meses Nutrición */}
          <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto">
            {[1, 2, 3, 4, 5, 6].map((month) => (
              <Button
                key={month}
                onClick={() => setSelectedMonth(month)}
                variant={selectedMonth === month ? "default" : "secondary"}
                className={`font-bold py-2 px-4 ${
                  selectedMonth === month 
                    ? 'bg-secondary text-secondary-foreground' 
                    : 'bg-muted text-foreground hover:bg-border'
                }`}
                data-testid={`button-nutrition-month-${month}`}
              >
                Mes {month}
              </Button>
            ))}
          </div>

          {/* Contenido Nutricional */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">{currentNutrition.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentNutrition.recommendations.map((item, index) => (
                  <Card 
                    key={index} 
                    className="nutrition-card bg-card cursor-pointer hover:shadow-lg transition-all duration-200"
                    onClick={() => openModal(item)}
                    data-testid={`card-nutrition-${index}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                          <Utensils size={16} />
                        </div>
                        <h4 className="text-lg font-bold">{item.type}</h4>
                      </div>
                      <p className="text-primary font-semibold mb-2">{item.amount}</p>
                      <p className="text-muted-foreground text-sm">Haz clic para ver detalles y sugerencias</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Detalles Nutricionales */}
      <Dialog open={!!selectedItem} onOpenChange={closeModal}>
        <DialogContent className="bg-card border-border max-w-2xl max-h-96 overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="text-2xl font-bold">
                {selectedItem?.type} - {selectedItem?.amount}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground"
                data-testid="button-close-modal"
              >
                <X size={20} />
              </Button>
            </div>
          </DialogHeader>
          <div className="text-muted-foreground leading-relaxed">
            <p>{selectedItem?.details}</p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
