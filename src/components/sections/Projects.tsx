'use client';

import { useState, useTransition } from 'react';
import { projectsData as initialProjectsData } from '@/lib/data';
import type { Project } from '@/lib/types';
import { reorderProjectsAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Wand2, Loader2, Github } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>(initialProjectsData);
  const [isPending, startTransition] = useTransition();

  const handleAiReorder = () => {
    startTransition(async () => {
      const reordered = await reorderProjectsAction({ projects });
      setProjects(reordered);
    });
  };

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tight text-center sm:text-4xl">My Projects</h2>
          <Button onClick={handleAiReorder} disabled={isPending} className="flex-shrink-0">
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Curate with AI
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-transform hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    data-ai-hint="tech abstract"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="font-headline mb-2">{project.name}</CardTitle>
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
                      View Source
                    </a>
                  </Button>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
