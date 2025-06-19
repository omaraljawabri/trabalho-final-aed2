'use client';

import { MapPin, FileUp, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function HomeButtons() {
  const buttons = [
    { icon: MapPin, label: 'Buscar no Google Maps', href: '#' },
    { icon: FileUp, label: 'Importar Arquivo de Mapa', href: '/dijkstra-map' },
    { icon: FileText, label: 'Importar Arquivo TXT', href: '#' },
  ];

  return (
    <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
      {buttons.map(({ icon: Icon, label, href }, index) => (
        <Link key={index} href={href}>
          <Button
            variant="outline"
            size="lg"
            className="w-full md:w-auto text-lg py-16 px-8 font-headline border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out transform hover:scale-105 group"
          >
            <Icon className="mr-2 h-5 w-5" />
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
