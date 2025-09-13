'use client';

import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/lib/data.tsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline hidden sm:inline-block">
              N. V. Sai Ruthvik Kasi
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setActiveLink(item.href)}
                className={cn(
                  "px-3 py-2 rounded-md transition-colors",
                  activeLink === item.href
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-accent/50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px]">
                  <div className="mt-8 flex flex-col space-y-2">
                      {navItems.map((item) => (
                          <Link
                              key={item.name}
                              href={item.href}
                              className="text-lg font-medium px-3 py-2 rounded-md transition-colors hover:bg-accent/50"
                              onClick={() => {
                                setIsOpen(false);
                                setActiveLink(item.href);
                              }}
                          >
                              {item.name}
                          </Link>
                      ))}
                  </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
