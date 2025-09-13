import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center py-20">
      <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
        {personalData.name}
      </h1>
      <p className="mt-4 text-lg font-headline text-primary sm:text-xl md:text-2xl">
        {personalData.role}
      </p>
      <p className="mt-6 max-w-2xl text-base text-foreground/80 md:text-lg">
        {personalData.intro}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="#projects">View My Work</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="#contact">Contact Me</Link>
        </Button>
      </div>
       <div className="absolute bottom-10 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </a>
        </div>
    </section>
  );
};

export default Hero;
