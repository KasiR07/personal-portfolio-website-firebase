'use client';

import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const roles = personalData.role.split(',').map(role => role.trim());
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(75);
      } else {
        setCurrentText(prev => fullText.substring(0, prev.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)]"></div>

        <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
            <div className="flex flex-col items-center text-center max-w-4xl">
                <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                    {personalData.name}
                </h1>
                <p className="mt-4 text-lg font-medium text-primary sm:text-xl md:text-2xl min-h-[2.25rem] md:min-h-[2.5rem]">
                    <span className="typewriter-cursor">{currentText}</span>
                </p>
                <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
                    {personalData.intro}
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="font-semibold">
                      <Link href="#projects">View My Work</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="font-semibold">
                      <Link href="#contact">Contact Me</Link>
                    </Button>
                </div>
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <a href="#about" aria-label="Scroll to about section">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </a>
        </div>
    </section>
  );
};

export default Hero;
