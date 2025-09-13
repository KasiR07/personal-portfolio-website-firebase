import { skillsData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-accent/50">
      <div className="container">
        <h2 className="text-3xl font-headline font-bold tracking-tight text-center sm:text-4xl">Technical Skills</h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillsData.map((skill, index) => (
            <Card key={index} className="group transition-all hover:bg-card hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
                <div className="w-12 h-12 text-primary transition-transform group-hover:scale-110">
                    {skill.icon}
                </div>
                <p className="font-semibold text-sm">{skill.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
