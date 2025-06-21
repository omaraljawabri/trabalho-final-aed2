'use client';

import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Waves } from 'lucide-react';
import { LanguageSwitcher } from '../_components/language-switcher';
import { ThemeToggle } from '../_components/theme-toggle';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/dijkstra-map', label: 'Funcionalidades' },
    { href: '/contact', label: 'Contato' },
  ];

  const legalLinks = [
    { href: '/terms', label: 'Termos de Serviço' },
    { href: '/privacy', label: 'Política de Privacidade' },
  ];

  const socials = [
    { href: 'https://github.com', label: 'GitHub', icon: Github },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://instagram.com', label: 'Instagram', icon: Instagram },
  ];

  return (
    <footer className="w-full border-t border-border/40 bg-background/90 backdrop-blur-sm">
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-3">
              <Waves className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl text-foreground">GrafosMap</span>
            </Link>
            <p className="text-sm text-muted-foreground">Mapas em grafos.</p>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-3">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-3">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-3">Conecte-se</h3>
            <div className="flex space-x-3 mb-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-primary"
                >
                  <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-5 w-5" />
                  </Link>
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <Mail className="inline h-4 w-4 mr-1" /> contato@grafosmap.com
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {currentYear} GrafosMap. Todos os direitos reservados.
          </p>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
