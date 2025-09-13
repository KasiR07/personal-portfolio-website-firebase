'use client';

import { useState, useTransition, useEffect } from 'react';
import type { Project, GithubRepo } from '@/lib/types';
import { reorderProjectsAction } from '@/app/actions';
import { getGithubProjectsAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Wand2, Loader2, Github } from 'lucide-react';
import { personalData } from '@/lib/data';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const githubProjects = await getGithubProjectsAction();
        
        const mappedProjects: Project[] = githubProjects.slice(0, 9).map((repo: GithubRepo) => ({
          id: repo.id.toString(),
          name: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
          description: repo.description || 'No description available.',
          technologies: repo.topics.length > 0 ? repo.topics : (repo.language ? [repo.language] : []),
          image: `https://picsum.photos/seed/${repo.id}/600/400`,
          link: repo.html_url,
          html_url: repo.html_url
        }));
        setProjects(mappedProjects);
      } catch (error) {
        console.error("Failed to fetch GitHub projects:", error);
      }
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  const handleAiReorder = () => {
    startTransition(async () => {
      const projectsToReorder = projects.map(p => ({
        name: p.name,
        description: p.description,
        technologies: p.technologies
      }));
      const reorderedProjectNames = await reorderProjectsAction({ projects: projectsToReorder });
      
      const reorderedProjects = reorderedProjectNames.map(rp => {
          const originalProject = projects.find(p => p.name === rp.name);
          return originalProject!;
      }).filter(p => p);

      const uniqueReorderedProjects = Array.from(new Set(reorderedProjects.map(p => p.id)))
        .map(id => reorderedProjects.find(p => p.id === id)!);
      
      const remainingProjects = projects.filter(p => !uniqueReorderedProjects.some(urp => urp.id === p.id));
      
      setProjects([...uniqueReorderedProjects, ...remainingProjects]);
    });
  };

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl">My Projects</h2>
            <p className="mt-2 text-muted-foreground">A selection of my most recent public repositories from GitHub.</p>
          </div>
          <Button onClick={handleAiReorder} disabled={isPending || projects.length === 0} className="flex-shrink-0">
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Curate with AI
          </Button>
        </div>
        
        {isLoading ? (
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="flex flex-col overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-video relative bg-muted animate-pulse"></div>
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <div className="h-6 w-3/4 mb-2 bg-muted animate-pulse rounded-md"></div>
                  <div className="h-4 w-full mb-4 bg-muted animate-pulse rounded-md"></div>
                  <div className="h-4 w-1/2 bg-muted animate-pulse rounded-md"></div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="h-10 w-full bg-muted animate-pulse rounded-md"></div>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-primary/20">
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
                        View Source
                      </a>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
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
