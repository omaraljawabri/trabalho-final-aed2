
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  return (
    <div className="flex items-center space-x-2">
      <Languages className="h-5 w-5 text-foreground/80" />
      <span className="text-sm text-foreground/80">Idioma: Português (BR)</span>
    </div>
  );
}
