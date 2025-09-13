
import Image from 'next/image';
import { personalData } from '@/lib/data';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="flex justify-center md:order-last">
             <div className="relative w-80 h-[26rem] group">
                <Card className="overflow-hidden w-full h-full rounded-lg shadow-2xl transition-transform duration-500 ease-in-out group-hover:rotate-3">
                  <Image
                    src={personalData.avatar}
                    alt={personalData.name}
                    width={400}
                    height={520}
                    className="object-cover object-top w-full h-full"
                    data-ai-hint="professional headshot"
                  />
                </Card>
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary/10 rounded-full blur-2xl -z-10 transition-transform duration-500 ease-in-out group-hover:translate-x-4"></div>
                <div className="absolute -top-4 -right-4 w-40 h-40 bg-accent/10 rounded-full blur-2xl -z-10 transition-transform duration-500 ease-in-out group-hover:-translate-x-4"></div>
             </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-6 text-lg text-foreground/80 whitespace-pre-line leading-relaxed">
              {personalData.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
