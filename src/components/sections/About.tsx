import { personalData } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-accent/20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
                 <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl">About Me</h2>
                 <div className="w-20 h-1.5 bg-primary rounded-full mt-4"></div>
            </div>
            <div className="lg:col-span-2">
                <p className="mt-4 text-lg text-foreground/80 whitespace-pre-line leading-relaxed">
                  {personalData.about}
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};
export default About;
