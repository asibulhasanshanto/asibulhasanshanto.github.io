import { IoCheckboxOutline } from "react-icons/io5";

const technologies = [
  "Golang",
  "React",
  "Kubernetes",
  "Docker",
  "gRPC",
  "PostgreSQL",
  "Redis",
  "Rabbitmq",
];

const AboutMe = () => {
  return (
    <section
      id="profile"
      className="flex min-h-screen snap-start items-center py-20"
    >
      <div className="container flex flex-col">
        <h2 className="font-bold">About Me</h2>
        <div className="mt-4 flex w-full flex-col space-y-5 py-3">
        <p>
          I have a passion for using technology to solve real problems, and this
          led me to start coding with web technologies in 2020. As a{" "}
          <span className="text-primary">computer science</span> student, I
          already knew <span className="text-primary">JavaScript</span> and
          began building web applications — first as a freelancer, then joining{" "}
          <a
            href="https://tinkers.ltd/"
            className="text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Tinkers Technologies Limited
          </a>{" "}
          in 2021. Across roughly{" "}
          <span className="text-primary">5 years</span>, I’ve worked the full
          stack — from React frontends to production backends.
        </p>
        <p>
          Over the past <span className="text-primary">2+ years</span>, my focus
          has shifted toward backend engineering. At{" "}
          <a
            href="https://pathao.com/"
            className="text-primary"
            target="_blank"
            rel="noreferrer"
          >
            Pathao
          </a>
          , I design and scale distributed{" "}
          <span className="text-primary">microservices</span> with{" "}
          <span className="text-primary">Go</span> and{" "}
          <span className="text-primary">Kubernetes</span> — powering high-scale
          logistics and ride-hailing platforms that serve millions of users.
        </p>
        <p>
          My day-to-day spans event-driven architectures, service resilience
          (timeouts, retries, caching), database migrations, and shipping
          features that move real business metrics — from re-engineering
          dispatch algorithms to launching new order flows and payment systems.
          I still enjoy building polished, responsive interfaces with{" "}
          <span className="text-primary">React</span> when the work calls for it.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech} className="flex items-center space-x-2">
              <IoCheckboxOutline className="text-primary" /> <p>{tech}</p>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
