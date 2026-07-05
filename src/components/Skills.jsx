import {
  SiGo,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiKubernetes,
  SiDocker,
  SiLinux,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiRabbitmq,
  SiGithubactions,
  SiReact,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
} from "react-icons/si";
import {
  TbApi,
  TbTopologyStar3,
  TbActivityHeartbeat,
  TbServerBolt,
  TbPlugConnected,
} from "react-icons/tb";

const categories = [
  {
    title: "Languages",
    icon: SiGo,
    skills: [
      { name: "Golang", icon: SiGo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Node.js", icon: SiNodedotjs },
    ],
  },
  {
    title: "Frontend",
    icon: SiReact,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "React Query", icon: SiReactquery },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend & APIs",
    icon: TbTopologyStar3,
    skills: [
      { name: "Microservices", icon: TbTopologyStar3 },
      { name: "NestJS", icon: SiNestjs },
      { name: "gRPC", icon: TbPlugConnected },
      { name: "REST APIs", icon: TbApi },
      { name: "Event-Driven", icon: TbActivityHeartbeat },
    ],
  },
  {
    title: "Infrastructure",
    icon: SiKubernetes,
    skills: [
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Linux", icon: SiLinux },
    ],
  },
  {
    title: "Data & Messaging",
    icon: TbServerBolt,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "Rabbitmq", icon: SiRabbitmq },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex min-h-screen snap-start items-center py-20"
    >
      <div className="container flex flex-col">
        <h2 className="font-bold">Skills &amp; Technologies</h2>
        <p className="text-secondary dark:text-text_primary_dark/60 mt-3 max-w-xl">
          The tools and technologies I reach for to build reliable, scalable
          backend systems.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {categories.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <div
              key={category.title}
              className="group rounded-lg border border-secondary/15 bg-black/[0.02] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg hover:shadow-primary/5 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="mb-5 flex items-center space-x-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-white">
                  <CategoryIcon className="h-5 w-5" />
                </span>
                <h4 className="font-semibold">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const SkillIcon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center space-x-2 rounded-md border border-secondary/15 bg-bg px-3 py-1.5 text-sm transition-colors duration-200 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white/[0.04]"
                    >
                      <SkillIcon className="text-primary" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
