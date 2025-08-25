import { useState } from 'react';
import { Dumbbell } from 'lucide-react';

export function Logo() {
  const [isGlowing, setIsGlowing] = useState(true);

  const toggleGlow = () => {
    setIsGlowing(!isGlowing);
  };

  return (
    <div className="flex items-center space-x-3">
      <button 
        onClick={toggleGlow}
        className="focus:outline-none"
        data-testid="button-logo-toggle"
      >
        <Dumbbell 
          className={`text-3xl transition-all duration-300 ${
            isGlowing 
              ? 'text-primary logo-glow' 
              : 'text-primary logo-dim'
          }`}
          size={32}
        />
      </button>
      <h1 className="text-2xl font-bold text-white">Lendanfit</h1>
    </div>
  );
}
