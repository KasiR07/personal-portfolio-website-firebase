'use client';

import { volunteerExperienceData } from '@/lib/volunteer-data';
import { Link2, MapPin, Heart } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Card } from '../ui/card';

const VolunteerExperience = () => {
  if (!volunteerExperienceData || volunteerExperienceData.length === 0) {
    return null;
  }
  
  return (
    <section id="volunteer" className="relative py-24 sm:py-32">
       <div className="absolute top-0 left-0 w-full h-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] -z-10"></div>
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-center sm:text-4xl lg:text-5xl">Volunteer Experience</h2>
          <p className="mt-2 text-muted-foreground">My contributions to the community.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12">
            {volunteerExperienceData.map((exp, index) => (
              <div key={index} className={cn(
                  "relative w-full flex md:justify-center items-start",
              )}>
                 <div className={cn("hidden md:block absolute top-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center ring-8 ring-background", "left-1/2 -translate-x-1/2")}>
                    <Heart className="w-3 h-3 text-primary-foreground" />
                 </div>
                 <Card className={cn(
                     "w-full md:w-[calc(50%-2rem)] p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/20",
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                 )}>
                    <p className="font-semibold font-headline text-lg text-primary">{exp.role}</p>
                    <a href={exp.company_link} target="_blank" rel="noopener noreferrer" className={cn("text-foreground font-semibold hover:underline flex items-center gap-1 text-md")}>
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

export default VolunteerExperience;
