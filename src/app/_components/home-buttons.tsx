'use client';

import { MapPin, FileUp, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export function HomeButtons() {
  const buttons = [
    { icon: MapPin, label: 'Buscar no OpenStreetMap', href: 'https://www.openstreetmap.org/', external: true},
    { icon: FileUp, label: 'Importar Arquivo de Mapa', href: '/dijkstra-map', external: false},
  ];

  return (
  <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-6">
    {buttons.map(({ icon: Icon, label, href, external }, index) => {
      const button = (
        <Button
          variant="outline"
          size="lg"
          className="w-full md:w-auto text-lg py-16 px-8 font-headline border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-in-out transform hover:scale-105 group"
        >
          <Icon className="mr-2 h-5 w-5" />
          {label}
        </Button>
      );

      return external ? (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {button}
        </a>
      ) : (
        <Link key={index} href={href}>
          {button}
        </Link>
      );
    })}
  </div>
);
}
