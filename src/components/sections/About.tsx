import Image from 'next/image';
import { personalData } from '@/lib/data';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          <div className="flex justify-center md:col-span-1">
             <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Card className="overflow-hidden w-full h-full rounded-lg shadow-lg rotate-3 transition-transform group-hover:rotate-0">
                  <Image
                    src={personalData.avatar}
                    alt={personalData.name}
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                    data-ai-hint="professional headshot"
                  />
                </Card>
             </div>
          </div>
          <div className="md:col-span-2 flex flex-col justify-center">
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
