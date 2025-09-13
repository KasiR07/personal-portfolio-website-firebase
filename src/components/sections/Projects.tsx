
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
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
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
        setAllProjects(mappedProjects);
        setDisplayedProjects(mappedProjects);
      } catch (error) {
        console.error("Failed to fetch GitHub projects:", error);
      }
      setIsLoading(false);
    };
    fetchProjects();
  }, []);

  const handleAiReorder = () => {
    startTransition(async () => {
      const projectsToReorder = displayedProjects.map(p => ({
        name: p.name,
        description: p.description,
        technologies: p.technologies
      }));
      const reorderedProjectNames = await reorderProjectsAction({ projects: projectsToReorder });
      
      const reorderedProjects = reorderedProjectNames.map(rp => {
          const originalProject = displayedProjects.find(p => p.name === rp.name);
          return originalProject!;
      }).filter(p => p);

      const uniqueReorderedProjects = Array.from(new Set(reorderedProjects.map(p => p.id)))
        .map(id => reorderedProjects.find(p => p.id === id)!);
      
      const remainingProjects = displayedProjects.filter(p => !uniqueReorderedProjects.some(urp => urp.id === p.id));
      
      const newDisplayedProjects = [...uniqueReorderedProjects, ...remainingProjects];
      setDisplayedProjects(newDisplayedProjects);

      setAllProjects(newDisplayedProjects);
    });
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32">
       <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-repeat bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2240%22_viewBox=%220_0_40_40%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22%23e5e7eb%22_fill-opacity=%220.4%22_fill-rule=%22evenodd%22%3E%3Cg_fill-rule=%22evenodd%22%3E%3Cpath_d=%22M0_38.59l2.83-2.83_1.41_1.41L1.41_40H0v-1.41zM0_1.4l2.83_2.83_1.41-1.41L1.41_0H0v1.41zM38.59_40l-2.83-2.83_1.41-1.41L40_38.59V40h-1.41zM40_1.41l-2.83_2.83-1.41-1.41L38.59_0H40v1.41zM20_18.6l2.83-2.83_1.41_1.41L21.41_20l2.83_2.83-1.41_1.41L20_21.41l-2.83_2.83-1.41-1.41L18.59_20l-2.83-2.83_1.41-1.41L20_18.59z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2240%22_viewBox=%220_0_40_40%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22%23ffffff20%22_fill-opacity=%220.4%22_fill-rule=%22evenodd%22%3E%3Cg_fill-rule=%22evenodd%22%3E%3Cpath_d=%22M0_38.59l2.83-2.83_1.41_1.41L1.41_40H0v-1.41zM0_1.4l2.83_2.83_1.41-1.41L1.41_0H0v1.41zM38.59_40l-2.83-2.83_1.41-1.41L40_38.59V40h-1.41zM40_1.41l-2.83_2.83-1.41-1.41L38.59_0H40v1.41zM20_18.6l2.83-2.83_1.41_1.41L21.41_20l2.83_2.83-1.41_1.41L20_21.41l-2.83_2.83-1.41-1.41L18.59_20l-2.83-2.83_1.41-1.41L20_18.59z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl">My Projects</h2>
            <p className="mt-2 text-muted-foreground">A selection of my most recent public repositories from GitHub.</p>
          </div>
          <Button onClick={handleAiReorder} disabled={isPending || displayedProjects.length === 0} className="flex-shrink-0">
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
        ) : displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
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
