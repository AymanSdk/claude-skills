import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import SkillsCard from "#/components/SkillsCard";
import { dummySkills } from "#/lib/dummy-skills";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div id="home">
      <section className="hero">
        <div className="copy">
          <h1>
            The Registry for <br />
            <span className="text-gradient">Claude Code Agent Skills</span>
          </h1>
          <p>
            A high-performance registry for Claude Code Agent Skills, enabling
            seamless discovery, management, and integration of skills to enhance
            the capabilities of your agents. Whether you're a developer looking
            to share your skills or an agent builder seeking new
            functionalities, our registry provides a centralized platform to
            connect and collaborate.
          </p>
        </div>
        <div className="actions">
          <Link to="/skills" className="btn-primary">
            <Terminal size="18" />
            Browse Skills
          </Link>
          <Link to="/skills/new" className="btn-secondary">
            Submit Skill
          </Link>
        </div>
      </section>
      <section className="latest">
        <div className="space-y-2">
          <h2>Recently Published Skills</h2>
          <p>Here are the latest skills published to the registry.</p>
        </div>
        <div>
          {dummySkills.length > 0 ? (
            <div className="skills-grid">
              {dummySkills.map((skill) => (
                <SkillsCard key={skill.id} {...skill} />
              ))}
            </div>
          ) : (
            <p>No skills published yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
