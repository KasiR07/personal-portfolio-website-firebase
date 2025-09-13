'use client';

import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(theme(colors.border)_1px,transparent_1px)] [background-size:16px_16px]"></div>

        <div className="container relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-8 py-16 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center lg:hidden">
                 <div className="relative w-64 h-64 group">
                    <div className="overflow-hidden w-full h-full rounded-full shadow-2xl">
                      <Image
                        src={personalData.avatar}
                        alt={personalData.name}
                        width={300}
                        height={300}
                        className="object-cover object-top w-full h-full"
                        data-ai-hint="professional headshot"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                    <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10"></div>
                 </div>
            </div>
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    {personalData.name}
                </h1>
                <p className="mt-4 text-lg font-medium text-primary sm:text-xl md:text-2xl min-h-[2.25rem] md:min-h-[2.5rem]">
                    <span className="typewriter-cursor">{currentText}</span>
                </p>
                <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
                    {personalData.intro}
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                    <Button asChild size="lg" className="font-semibold">
                      <Link href="#projects">View My Work</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="font-semibold">
                      <Link href="#contact">Contact Me</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="font-semibold">
                      <a href="/resume.pdf" download>Download Resume</a>
                    </Button>
                </div>
            </div>
             <div className="hidden justify-center lg:flex">
                 <div className="relative w-80 h-80 group">
                    <div className="overflow-hidden w-full h-full rounded-full shadow-2xl">
                      <Image
                        src={personalData.avatar}
                        alt={personalData.name}
                        width={400}
                        height={400}
                        className="object-cover object-top w-full h-full"
                        data-ai-hint="professional headshot"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10 transition-transform duration-500 ease-in-out group-hover:translate-x-4"></div>
                    <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/20 rounded-full blur-2xl -z-10 transition-transform duration-500 ease-in-out group-hover:-translate-x-4"></div>
                 </div>
            </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#about" aria-label="Scroll to about section">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </a>
        </div>
    </section>
  );
};

export default Hero;
