import { personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="relative container flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-3.5rem)] py-20">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <p className="text-lg font-headline text-primary sm:text-xl md:text-2xl mb-2">
            Hi, I'm {personalData.name}
        </p>
        <h1 className="text-4xl font-headline font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {personalData.role}
        </h1>
        <p className="mt-6 max-w-xl text-base text-foreground/80 md:text-lg">
            {personalData.intro}
        </p>
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
            </Button>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2 justify-center mt-10 md:mt-0">
        <div className="relative w-96 h-96">
            <Image 
                src="https://picsum.photos/seed/hero-image/800/800"
                alt="AI and Data Science"
                fill
                className="object-cover rounded-full shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint="abstract data art"
            />
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
             <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
