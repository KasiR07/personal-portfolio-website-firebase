import { personalData } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-accent/20">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-3xl text-center">
                <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl">About Me</h2>
                <div className="w-20 h-1.5 bg-primary rounded-full mt-4 mx-auto"></div>
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
