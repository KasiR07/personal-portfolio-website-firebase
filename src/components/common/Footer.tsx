'use client';

import { personalData } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="border-t bg-accent/20">
      <div className="container py-16">
        <div className="flex flex-col items-center text-center">
            <h3 className="text-3xl font-headline font-bold lg:text-4xl">Get In Touch</h3>
            <p className="mt-4 text-muted-foreground max-w-lg">I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!</p>
            <div className="mt-8 flex space-x-6">
              <a href={`mailto:${personalData.contact.email}`} className="text-muted-foreground transition-colors hover:text-primary" aria-label="Email">
                  <Mail className="h-7 w-7" />
                  <span className="sr-only">Email</span>
              </a>
              <a href={personalData.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="GitHub">
                  <Github className="h-7 w-7" />
                  <span className="sr-only">GitHub</span>
              </a>
              <a href={personalData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
                  <Linkedin className="h-7 w-7" />
                  <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <div className="mt-10 text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {personalData.name}. All Rights Reserved.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
