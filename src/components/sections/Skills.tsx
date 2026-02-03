import { skillsData } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-repeat bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2240%22_viewBox=%220_0_40_40%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22%23e5e7eb%22_fill-opacity=%220.4%22_fill-rule=%22evenodd%22%3E%3Cg_fill-rule=%22evenodd%22%3E%3Cpath_d=%22M0_38.59l2.83-2.83_1.41_1.41L1.41_40H0v-1.41zM0_1.4l2.83_2.83_1.41-1.41L1.41_0H0v1.41zM38.59_40l-2.83-2.83_1.41-1.41L40_38.59V40h-1.41zM40_1.41l-2.83_2.83-1.41-1.41L38.59_0H40v1.41zM20_18.6l2.83-2.83_1.41_1.41L21.41_20l2.83_2.83-1.41_1.41L20_21.41l-2.83_2.83-1.41-1.41L18.59_20l-2.83-2.83_1.41-1.41L20_18.59z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg_width=%2240%22_height=%2240%22_viewBox=%220_0_40_40%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg_fill=%22%23ffffff20%22_fill-opacity=%220.4%22_fill-rule=%22evenodd%22%3E%3Cg_fill-rule=%22evenodd%22%3E%3Cpath_d=%22M0_38.59l2.83-2.83_1.41_1.41L1.41_40H0v-1.41zM0_1.4l2.83_2.83_1.41-1.41L1.41_0H0v1.41zM38.59_40l-2.83-2.83_1.41-1.41L40_38.59V40h-1.41zM40_1.41l-2.83_2.83-1.41-1.41L38.59_0H40v1.41zM20_18.6l2.83-2.83_1.41_1.41L21.41_20l2.83_2.83-1.41_1.41L20_21.41l-2.83_2.83-1.41-1.41L18.59_20l-2.83-2.83_1.41-1.41L20_18.59z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
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
                  <Card key={index} className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-2 dark:hover:shadow-primary/20 hover:border-primary/50">
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
