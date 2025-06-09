import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";

import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="1"
          name="Verba the Vocabulary Builder"
          topic="Language"
          subject="English Literature"
          duration={30}
          color="#ffda6e"
        />

        <CompanionCard
          id="2"
          name="CalcMaster 3000"
          topic="Mathematics"
          subject="Algebra and Calculus"
          duration={45}
          color="#e5d0ff"
        />

        <CompanionCard
          id="3"
          name="CodeCraft Companion"
          topic="Programming"
          subject="Computer Science - JavaScript"
          duration={60}
          color="#bde7ff"
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
