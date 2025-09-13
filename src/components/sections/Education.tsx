'use client';

import { educationData } from '@/lib/data';
import { GraduationCap, MapPin } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { Card } from '../ui/card';

const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-center sm:text-4xl lg:text-5xl">Education</h2>
          <p className="mt-2 text-muted-foreground">My academic background.</p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={cn(
                  "relative w-full flex md:justify-center items-start",
              )}>
                 <div className={cn("hidden md:block absolute top-1 h-4 w-4 rounded-full bg-primary flex items-center justify-center ring-8 ring-background", "left-1/2 -translate-x-1/2")}>
                    <GraduationCap className="w-3 h-3 text-primary-foreground" />
                 </div>
                 <Card className={cn(
                     "w-full md:w-[calc(50%-2rem)] p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/20",
                      index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                 )}>
                    <p className="font-semibold font-headline text-lg text-primary">{edu.degree}</p>
                    <p className="text-foreground font-semibold text-md">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.duration}</p>
                    <div className={cn("text-sm text-muted-foreground mt-1 flex items-center gap-1")}>
                      <MapPin className="w-3 h-3"/> {edu.location}
                    </div>
                    {edu.description && (
                        <Accordion type="single" collapsible className="w-full mt-2">
                        <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className={cn("text-sm py-2 hover:no-underline gap-2 justify-start p-0")}>View description</AccordionTrigger>
                            <AccordionContent className="text-base text-foreground/80 text-left pt-2">
                            {edu.description}
                            </AccordionContent>
                        </AccordionItem>
                        </Accordion>
                    )}
                 </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
