import Navbar from "../components/Navbar";
import Layout from "../components/layouts/Layout";
import ButtonAction from "../components/ui/ButtonAction";
const Home = () => {
  return (
    <Layout>
      <div className="hero_section flex min-h-screen  flex-col">
        <Navbar />
        <div className="flex h-full grow items-center justify-start ">
          <div className="container flex flex-col">
            <p className="text-xl text-primary">Hi, I'm </p>
            <h1 className="text-text_primary dark:text-text_primary_dark mt-5 text-7xl font-bold">
              Asibul Hasan
            </h1>
            <h1 className="text-text_primary/50 dark:text-text_primary_dark/50 my-3 text-5xl">
              I Bring ideas alive through the web
            </h1>
            <p className="text-text_primary dark:text-text_primary_dark mt-8 max-w-xl text-lg">
              I’m a full-stack developer specializing in building{" "}
              <span className="text-primary">MERN</span> stack applications.
              Currently, I’m focused on building efficient, scalable and faster
              web applications using Node and{" "}
              <span className="text-primary">Nextjs</span>.
            </p>
            <div className="flex my-8">
              <ButtonAction>Say Hello</ButtonAction>
            </div>
          </div>
        </div>
      </div>
      hello
    </Layout>
  );
};

export default Home;
