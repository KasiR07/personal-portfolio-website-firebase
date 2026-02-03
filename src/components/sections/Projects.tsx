'use client';

import { projectsData, personalData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Github } from 'lucide-react';


const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-repeat bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2240%22_viewBox=%220_0_40_40%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22%23e5e7eb%22_fill-opacity=%220.4%22_fill-rule=%22evenodd%22%3E%3Cg_fill-rule=%22evenodd%22%3E%3Cpath_d=%22M0_38.59l2.83-2.83_1.41_1.41L1.41_40H0v-1.41zM0_1.4l2.83_2.83_1.41-1.41L1.41_0H0v1.41zM38.59_40l-2.83-2.83_1.41-1.41L40_38.59V40h-1.41zM40_1.41l-2.83_2.83-1.41-1.41L38.59_0H40v1.41zM20_18.6l2.83-2.83_1.41_1.41L21.41_20l2.83_2.83-1.41_1.41L20_21.41l-2.83_2.83-1.41-1.41L18.59_20l-2.83-2.83_1.41-1.41L20_18.59z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2240%22_viewBox=%220_0_40_40%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22%23ffffff20%22_fill-opacity=%220.4%22_fill-rule=%22evenodd%22%3E%3Cg_fill-rule=%22evenodd%22%3E%3Cpath_d=%22M0_38.59l2.83-2.83_1.41_1.41L1.41_40H0v-1.41zM0_1.4l2.83_2.83_1.41-1.41L1.41_0H0v1.41zM38.59_40l-2.83-2.83_1.41-1.41L40_38.59V40h-1.41zM40_1.41l-2.83_2.83-1.41-1.41L38.59_0H40v1.41zM20_18.6l2.83-2.83_1.41_1.41L21.41_20l2.83_2.83-1.41_1.41L20_21.41l-2.83_2.83-1.41-1.41L18.59_20l-2.83-2.83_1.41-1.41L20_18.59z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl">My Projects</h2>
            <p className="mt-2 text-muted-foreground">A selection of my featured projects.</p>
          </div>
        </div>
        
        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/20 hover:border-primary/30">
                <CardHeader className="p-0">
                  <div className="aspect-video relative">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={project.imageHint || "tech abstract"}
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="font-headline text-xl mb-2">{project.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                {project.link && (
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground col-span-full">No projects found.</p>
        )}

        <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
                <a href={personalData.contact.github} target="_blank" rel="noopener noreferrer">
                    View More on GitHub
                </a>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
