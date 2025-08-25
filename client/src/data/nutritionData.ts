import { NutritionData } from '@/types';

export const nutritionData: NutritionData = {
  1: {
    title: "Fundamentos Nutricionales",
    recommendations: [
      {
        type: "Vegetales",
        amount: "5 porciones diarias",
        details: "Incluye espinacas, brócoli, zanahorias, pimientos, tomates. Distribuye en almuerzo y cena, añade en ensaladas y como snacks. Una porción equivale a 1 taza de vegetales crudos o 1/2 taza cocidos."
      },
      {
        type: "Proteínas",
        amount: "2-3 porciones diarias",
        details: "Pollo, pescado, huevos, legumbres, tofu. Una porción en cada comida principal, del tamaño de tu palma. Varía las fuentes: pescado 2-3 veces por semana, legumbres 2-3 veces, carnes magras el resto."
      },
      {
        type: "Carbohidratos Complejos",
        amount: "3-4 porciones diarias",
        details: "Avena, arroz integral, quinoa, pan integral. Concentra el consumo en desayuno y almuerzo para mayor energía. Una porción = 1/2 taza de granos cocidos o 1 rebanada de pan integral."
      },
      {
        type: "Grasas Saludables",
        amount: "2-3 porciones diarias",
        details: "Aguacate, nueces, aceite de oliva, semillas. Una cucharada de aceite por comida, un puñado de frutos secos como snack. Incluye omega-3: nueces, chía, linaza."
      }
    ]
  },
  2: {
    title: "Hidratación y Timing",
    recommendations: [
      {
        type: "Agua",
        amount: "8-10 vasos diarios",
        details: "Bebe un vaso al despertar, antes de cada comida, y durante el ejercicio. Añade limón o pepino para variedad. Aumenta la ingesta en días calurosos o de ejercicio intenso."
      },
      {
        type: "Pre-Ejercicio",
        amount: "1-2 horas antes",
        details: "Banana con mantequilla de maní, avena con frutas, o tostada integral con miel. Evita comidas pesadas. Si ejercitas temprano, un snack ligero 30 min antes es suficiente."
      },
      {
        type: "Post-Ejercicio",
        amount: "30 minutos después",
        details: "Combina proteína y carbohidratos: batido con proteína y fruta, yogur con granola, huevos con tostada. Relación ideal 3:1 carbohidratos:proteína para recuperación óptima."
      },
      {
        type: "Electrolitos",
        amount: "Durante ejercicio prolongado",
        details: "Para ejercicios de más de 60 minutos, repone electrolitos con bebidas deportivas naturales o agua con una pizca de sal y limón."
      }
    ]
  },
  3: {
    title: "Optimización Energética",
    recommendations: [
      {
        type: "Desayuno Energético",
        amount: "Dentro de 1 hora al despertar",
        details: "Combina proteína, carbohidratos complejos y grasas: avena con nueces y fruta, huevos con tostada integral y aguacate, smoothie con proteína, espinacas y banana."
      },
      {
        type: "Snacks Inteligentes",
        amount: "2-3 snacks diarios",
        details: "Manzana con almendras, yogur griego con bayas, hummus con vegetales, mix de frutos secos. Mantén snacks de 150-200 calorías entre comidas principales."
      },
      {
        type: "Cena Ligera",
        amount: "2-3 horas antes de dormir",
        details: "Proteína magra con vegetales: salmón con brócoli, pollo con ensalada, tofu salteado con vegetales. Evita carbohidratos pesados en la noche."
      },
      {
        type: "Antioxidantes",
        amount: "Diario en múltiples comidas",
        details: "Bayas, vegetales de colores intensos, té verde, cacao oscuro. Estos combaten la inflamación y apoyan la recuperación del ejercicio."
      }
    ]
  },
  4: {
    title: "Nutrición para Rendimiento",
    recommendations: [
      {
        type: "Carbohidratos de Calidad",
        amount: "45-65% de calorías totales",
        details: "Ajusta según intensidad de ejercicio: días intensos más carbohidratos (quinoa, batata, frutas), días ligeros menos carbohidratos, más vegetales y proteína."
      },
      {
        type: "Proteína Completa",
        amount: "1.2-1.6g por kg de peso",
        details: "Distribuye equitativamente en todas las comidas. Combina proteínas vegetales (arroz + frijoles) para aminoácidos completos. Post-ejercicio: 20-25g de proteína."
      },
      {
        type: "Micronutrientes Clave",
        amount: "Diario",
        details: "Hierro (espinacas, carne roja), vitamina D (pescado graso, exposición solar), vitamina C (cítricos, pimientos), magnesio (nueces, semillas)."
      },
      {
        type: "Planificación de Comidas",
        amount: "Semanal",
        details: "Prepara comidas con anticipación. Cocina granos y proteínas en lotes. Ten snacks saludables siempre disponibles. Planifica según tu horario de ejercicio."
      }
    ]
  },
  5: {
    title: "Nutrición Avanzada",
    recommendations: [
      {
        type: "Periodización Nutricional",
        amount: "Según ciclo de entrenamiento",
        details: "Días de alta intensidad: más carbohidratos (5-7g/kg). Días de recuperación: enfoque en proteína y vegetales. Días de fuerza: proteína adicional post-entrenamiento."
      },
      {
        type: "Suplementación Básica",
        amount: "Según necesidades individuales",
        details: "Considera vitamina D si hay poca exposición solar, omega-3 si no consumes pescado regularmente, proteína en polvo si no alcanzas requerimientos con alimentos."
      },
      {
        type: "Recuperación Nutricional",
        amount: "24-48 horas post-ejercicio intenso",
        details: "Alimentos antiinflamatorios: cúrcuma, jengibre, cerezas ácidas, pescado graso. Hidratación aumentada. Proteína de digestión lenta antes de dormir (caseína o yogur griego)."
      },
      {
        type: "Flexibilidad Metabólica",
        amount: "Entrenamiento nutricional",
        details: "Ocasionalmente ejercita en ayunas (sesiones ligeras) para mejorar utilización de grasas. Alterna períodos de mayor y menor consumo de carbohidratos."
      }
    ]
  },
  6: {
    title: "Mantenimiento y Sostenibilidad",
    recommendations: [
      {
        type: "Hábitos Permanentes",
        amount: "Plan de por vida",
        details: "Enfócate en alimentos integrales 80% del tiempo, permite flexibilidad 20%. Mantén horarios regulares de comida. Escucha las señales de hambre y saciedad de tu cuerpo."
      },
      {
        type: "Adaptación Estacional",
        amount: "Según disponibilidad",
        details: "Consume alimentos de temporada para máxima nutrición y sabor. Verano: más frutas e hidratación. Invierno: más sopas, guisos y alimentos calientes."
      },
      {
        type: "Mindful Eating",
        amount: "En cada comida",
        details: "Come sin distracciones, mastica lentamente, aprecia sabores y texturas. Esto mejora digestión y satisfacción. Reconoce diferencia entre hambre física y emocional."
      },
      {
        type: "Evaluación Continua",
        amount: "Mensual",
        details: "Evalúa energía, rendimiento, composición corporal y bienestar general. Ajusta la alimentación según cambios en entrenamiento, estación o estilo de vida."
      }
    ]
  }
};
