"use client";

import Link from 'next/link';
import { Waves, Users, Mail } from 'lucide-react';
import TeamModal from './team-modal';
import { Button } from './ui/button';
import { Dialog, DialogTrigger } from './ui/dialog';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-transparent">
      <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2">
          <Waves className="h-7 w-7 text-primary" />
          <span className="font-bold font-headline text-xl sm:inline-block text-foreground">
            GrafosMap
          </span>
        </Link>
        <nav className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-foreground hover:bg-foreground/10">
                <Users className="mr-2 h-5 w-5" />
                Equipe
              </Button>
            </DialogTrigger>
            <TeamModal />
          </Dialog>
          <Button variant="ghost" className="text-foreground hover:bg-foreground/10">
            <Mail className="mr-2 h-5 w-5" />
            Contate-nos
          </Button>
        </nav>
      </div>
    </header>
  );
}
