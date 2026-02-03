'use client';

import { personalData, navItems } from '@/lib/data';
import { Github, Linkedin, Mail, BrainCircuit, Instagram } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="relative border-t">
        <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(theme(colors.border)_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container py-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <BrainCircuit className="h-8 w-8 text-primary" />
                        <span className="font-bold font-headline text-lg">
                           {personalData.name}
                        </span>
                    </Link>
                    <p className="text-muted-foreground text-sm">
                        Data Scientist & AI Enthusiast passionate about building impactful solutions.
                    </p>
                    <div className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} N. V. Sai Ruthvik Kasi.
                    </div>
                </div>
                <div>
                    <h4 className="font-headline font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        {navItems.filter(item => item.name !== 'Contact').map((item) => (
                            <li key={item.name}>
                                <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors animated-underline">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-headline font-semibold mb-4">Contact Me</h4>
                     <p className="text-sm text-muted-foreground">
                        I'm open to new opportunities. <br/> Feel free to reach out!
                    </p>
                    <a href={`mailto:${personalData.contact.email}`} className="mt-2 inline-block text-sm text-primary animated-underline">
                        {personalData.contact.email}
                    </a>
                </div>
                <div>
                    <h4 className="font-headline font-semibold mb-4">Connect</h4>
                    <div className="flex space-x-4">
                        <a href={`mailto:${personalData.contact.email}`} className="p-2 rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Email">
                            <Mail className="h-5 w-5" />
                        </a>
                        <a href={personalData.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="GitHub">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href={personalData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                         <a href={personalData.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground" aria-label="Instagram">
                            <Instagram className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
