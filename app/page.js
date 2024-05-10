import About from "@/components/About";
import Main from "@/components/Main";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div className="px-2">
      <Main />
      <About />
      <Projects/>
    </div>
  );
}
