import { certificationsData } from '@/lib/data';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl">Awards & Certifications</h2>
            <p className="mt-2 text-muted-foreground">Recognitions of my skills and knowledge.</p>
        </div>
        <div className="space-y-4">
          {certificationsData.map((cert, index) => (
            <Card key={index} className="flex items-center p-4 transition-all hover:shadow-md dark:hover:shadow-primary/20">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-full mr-4">
                    <Award className="w-8 h-8 text-primary"/>
                </div>
                <div className="flex-grow">
                    <CardTitle className="font-headline text-lg">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer} &middot; {cert.year}</CardDescription>
                </div>
                <div className="flex-shrink-0 ml-4">
                     <Button asChild variant="ghost" size="icon">
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={`View certificate for ${cert.name}`}>
                            <ExternalLink className="h-5 w-5 text-muted-foreground"/>
                        </a>
                    </Button>
                </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
