import { personalData } from '@/lib/data';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-accent/20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
                 <div className="relative w-80 h-80 group">
                    <div className="overflow-hidden w-full h-full rounded-full shadow-2xl">
                      <Image
                        src="https://picsum.photos/seed/about-me/400/400"
                        alt="About me"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                        data-ai-hint="person coding"
                      />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10 transition-transform duration-500 ease-in-out group-hover:translate-x-4"></div>
                    <div className="absolute -top-6 -right-6 w-40 h-40 bg-background/80 rounded-full blur-2xl -z-10 transition-transform duration-500 ease-in-out group-hover:-translate-x-4"></div>
                 </div>
            </div>
            <div className="max-w-2xl">
                <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl">About Me</h2>
                <div className="w-20 h-1.5 bg-primary rounded-full mt-4"></div>
                <p className="mt-8 text-lg text-foreground/80 whitespace-pre-line leading-relaxed">
                  {personalData.about}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};
export default About;
