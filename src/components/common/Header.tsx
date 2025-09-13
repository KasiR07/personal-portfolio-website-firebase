
'use client';

import { BrainCircuit, Menu, Search, X } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '@/lib/data.tsx';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '../ui/button';
import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { Input } from '../ui/input';

type HeaderProps = {
  searchQuery: string;
  onSearchChange: (query: string) => void;
};

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
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
      handleScroll();
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
      window.location.href = `/${href}`;
    }
  };

  const clearSearch = () => {
    onSearchChange('');
    setIsSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center md:flex-1">
           <Link href="/" className="flex items-center space-x-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
          </Link>
        </div>

        <nav className={cn("hidden md:flex flex-1 justify-center items-center space-x-1 text-sm font-medium", isSearchOpen && 'md:hidden' )}>
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

        <div className={cn("flex items-center justify-end flex-1 md:flex-none", isSearchOpen && 'w-full')}>
            <div className={cn("w-full max-w-sm hidden", (isSearchOpen || searchQuery) && 'block', 'md:block')}>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search portfolio..."
                  className="w-full pl-10"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => setIsSearchOpen(true)}
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                {searchQuery && (
                  <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7" onClick={clearSearch}>
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
            {!searchQuery && (
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                {isSearchOpen ? <X className="h-5 w-5"/> : <Search className="h-5 w-5" />}
                <span className="sr-only">Toggle Search</span>
              </Button>
            )}
            <ThemeToggle />
            <div className={cn("md:hidden", isSearchOpen && "hidden")}>
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
