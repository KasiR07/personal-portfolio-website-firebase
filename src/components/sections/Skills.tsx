import { skillsData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-accent/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl lg:text-5xl">Technical Skills</h2>
          <p className="mt-2 text-muted-foreground">My proficiency in various technologies and methodologies.</p>
        </div>
        <div className="space-y-12">
          {skillsData.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-headline font-semibold text-center mb-8">{category.category}</h3>
              <div className="mx-auto grid max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, index) => (
                  <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-2 dark:hover:shadow-primary/20">
                    <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                      <div className="w-12 h-12 text-primary transition-transform group-hover:scale-110">
                          {skill.icon}
                      </div>
                      <p className="font-semibold text-center text-sm">{skill.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
