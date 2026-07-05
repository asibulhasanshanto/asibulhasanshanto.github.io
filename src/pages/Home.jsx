import Navbar from "../components/Navbar";
import Layout from "../components/layouts/Layout";
import ButtonAction from "../components/ui/ButtonAction";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <Layout>
      <div className="hero_section flex min-h-screen snap-start flex-col">
        <Navbar />
        <div className="flex h-full grow items-center justify-start ">
          <div className="container flex flex-col">
            <p className="text-xl text-primary">Hi, I'm </p>
            <h1 className="text-text_primary dark:text-text_primary_dark mt-5 text-7xl font-bold">
              Asibul Hasan
            </h1>
            <h1 className="text-text_primary/50 dark:text-text_primary_dark/50 my-3 text-5xl">
              I build backend systems that scale
            </h1>
            <p className="text-text_primary dark:text-text_primary_dark mt-8 max-w-xl text-lg">
              I’m a <span className="text-primary">full-stack engineer</span>{" "}
              with ~5 years of experience, now specializing in distributed
              microservices with <span className="text-primary">Go</span> and{" "}
              <span className="text-primary">Kubernetes</span>. I build reliable,
              high-throughput backends — and still craft modern frontends with{" "}
              <span className="text-primary">React</span>.
            </p>
            <div className="flex my-8">
              <ButtonAction
                href="https://www.linkedin.com/in/asibul-hasan-shanto/"
                target="_blank"
                rel="noreferrer"
              >
                Say Hello
              </ButtonAction>
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Skills />
    </Layout>
  );
};

export default Home;
