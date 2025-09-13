import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)]"></div>

        <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] items-center justify-center py-20">
            <div className="flex flex-col items-center text-center max-w-4xl">
                <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                    {personalData.name}
                </h1>
                <p className="mt-4 text-lg font-medium text-primary sm:text-xl md:text-2xl">
                    {personalData.role}
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
