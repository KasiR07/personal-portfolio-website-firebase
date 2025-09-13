import { experienceData } from '@/lib/data';
import { Briefcase, Link2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-accent/50">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-headline font-bold tracking-tight text-center sm:text-4xl">Work Experience</h2>
        <div className="relative mt-12">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-5 top-1 h-4 w-4 rounded-full bg-primary -translate-x-1/2 flex items-center justify-center ring-8 ring-accent/50">
                   <Briefcase className="w-3 h-3 text-primary-foreground" />
                </div>
                
                <p className="font-semibold font-headline text-lg">{exp.role}</p>
                <a href={exp.company_link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline flex items-center gap-1 text-sm">
                  {exp.company} <Link2 className="w-3 h-3"/>
                </a>
                <p className="text-sm text-muted-foreground mt-1">{exp.duration}</p>
                <Accordion type="single" collapsible className="w-full mt-2">
                  <AccordionItem value="item-1" className="border-none">
                    <AccordionTrigger className="text-sm py-2 hover:no-underline justify-start gap-2">View description</AccordionTrigger>
                    <AccordionContent className="text-base text-foreground/80">
                      {exp.description}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
