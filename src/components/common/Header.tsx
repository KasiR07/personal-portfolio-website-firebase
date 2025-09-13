'use client';

import { BrainCircuit } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/lib/data.tsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const pathname = usePathname();

  useEffect(() => {
    // If we are on a different page, don't set any active link
    if (pathname !== '/') {
      setActiveLink('');
      return;
    }

    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveLink(navItems[i].href);
          break;
        }
      }
    };

    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Set initial active link
    }

    return () => {
      if (pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [pathname]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    if (pathname !== '/') {
      // Navigate to home if on a different page
      window.location.href = `/${href}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center md:flex-1">
           <Link href="/" className="flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center items-center space-x-1 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleLinkClick(item.href)}
              className={cn(
                "px-3 py-2 rounded-md transition-colors",
                activeLink === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:flex-1">
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
                                handleLinkClick(item.href);
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
