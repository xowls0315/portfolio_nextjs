import Aboutme from "@/src/Aboutme";
import Introduce from "@/src/Introduce";
import Projects from "@/src/Projects";

export default function Home() {
  return (
    <div>
      <Introduce />
      <Aboutme />
      <Projects />
    </div>
  );
}
