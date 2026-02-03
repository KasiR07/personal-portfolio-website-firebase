import { experienceData } from '@/lib/data';
import { Briefcase, Link2, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Card } from '../ui/card';

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e20,transparent)]"></div></div>
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-center sm:text-4xl lg:text-5xl">Work Experience</h2>
          <p className="mt-2 text-muted-foreground">My professional journey and accomplishments.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className={cn(
                  "relative w-full flex md:justify-center items-start",
              )}>
                 <div className={cn("hidden md:block absolute top-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center ring-8 ring-background", "left-1/2 -translate-x-1/2")}>
                    <Briefcase className="w-3 h-3 text-primary-foreground" />
                 </div>
                 <Card className={cn(
                     "w-full md:w-[calc(50%-2rem)] p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/20 hover:border-primary/30",
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                 )}>
                    <p className="font-semibold font-headline text-lg text-primary">{exp.role}</p>
                    <a href={exp.company_link} target="_blank" rel="noopener noreferrer" className={cn("text-foreground font-semibold flex items-center gap-1 text-md")}>
                      {exp.company} <Link2 className="w-3 h-3"/>
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">{exp.duration}</p>
                    <div className={cn("text-sm text-muted-foreground mt-1 flex items-center gap-1")}>
                      <MapPin className="w-3 h-3"/> {exp.location}
                    </div>
                    <Accordion type="single" collapsible className="w-full mt-2">
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger className={cn("text-sm py-2 hover:no-underline gap-2 justify-start p-0")}>View description</AccordionTrigger>
                        <AccordionContent className="text-base text-foreground/80 text-left pt-2">
                          {exp.description}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                 </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
