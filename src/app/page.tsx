import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Technologies } from "@/components/sections/Technologies";
import { Experience } from "@/components/sections/Experience";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <SelectedWork />
      <Technologies />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
