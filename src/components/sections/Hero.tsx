
import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background" />

      <div className="container relative z-10 flex min-h-[calc(100vh-3.5rem)] items-center justify-center py-20">
        <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {personalData.name}
            </h1>
            <p className="mt-4 text-xl font-headline text-primary sm:text-2xl md:text-3xl">
                {personalData.role}
            </p>
            <p className="mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
                {personalData.intro}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                <Link href="#projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                <Link href="#contact">Contact Me</Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
