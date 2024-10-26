import { Hero } from "@/components";
import { Skills } from "@/components";
import { Projects } from "@/components";
import { BackgroundStars } from "@/components/ui/BackgroundStars";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <BackgroundStars />
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
