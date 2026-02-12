import { useMemo, useState } from "react";
import { ProjectTab } from "./components/ProjectTab";
import { YarnClosetTab } from "./components/YarnClosetTab";
import { InterestedProjectsTab } from "./components/InterestedProjectsTab";

const tabs = [
  { id: "projects", label: "Project" },
  { id: "yarn", label: "Yarn Closet" },
  { id: "interested", label: "Interested Project" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("projects");

  const activePanel = useMemo(() => {
    if (activeTab === "projects") return <ProjectTab />;
    if (activeTab === "yarn") return <YarnClosetTab />;
    return <InterestedProjectsTab />;
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="mx-auto max-w-6xl p-4 md:p-6">
        <header className="hero rounded-box bg-primary text-primary-content shadow-lg">
          <div className="hero-content w-full justify-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-90">Authenticated View</p>
              <h1 className="text-2xl font-bold md:text-3xl">Yarn and Knit Directory</h1>
            </div>
          </div>
        </header>

        <nav aria-label="Main sections" className="tabs tabs-boxed mt-5 w-fit bg-base-100 p-1 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              className={tab.id === activeTab ? "tab tab-active" : "tab"}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <main className="mt-5">{activePanel}</main>
      </div>
    </div>
  );
}
