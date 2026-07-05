const experiences = [
  {
    role: "Software Engineer",
    company: "Pathao Ltd",
    link: "https://pathao.com/",
    period: "Mar 2024 – Present",
    summary:
      "Backend engineer on the Parcel platform, building and scaling distributed Go microservices on Kubernetes that power one of the region’s largest logistics networks.",
    points: [
      "Launched multi-order parcel creation and re-engineered the priority dispatch algorithm, driving major gains in order volume and allocation efficiency.",
      "Migrated the parcel database from a central MySQL store to a dedicated PostgreSQL service and redesigned the active-order cache for reliability.",
      "Hardened service resilience with timeouts and retries, and shipped revenue features — lost & damage fees, surge pricing, proof of delivery, and fraud-detection integrations.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tinkers Technologies Ltd",
    link: "https://tinkers.ltd/",
    period: "Jan 2021 – Feb 2024",
    summary:
      "Full-stack engineer delivering web products across the stack with Node.js, Express, React, MongoDB, and MySQL.",
    points: [
      "Built impactful products end-to-end — including a fast, mobile-responsive question-entry system and an automated MCQ examination platform.",
      "Owned features from conceptualization through deployment in a collaborative team environment.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex min-h-screen snap-start items-center py-20"
    >
      <div className="container flex flex-col">
        <h2 className="font-bold">Experience</h2>
        <p className="text-secondary dark:text-text_primary_dark/60 mt-3 max-w-xl">
          My journey building software — from full-stack web products to
          backend systems running at scale.
        </p>

        <div className="mt-12 flex flex-col border-l-2 border-secondary/20">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative pl-10 ${
                index === experiences.length - 1 ? "" : "pb-12"
              }`}
            >
              {/* timeline node */}
              <span className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-bg dark:bg-bg_dark">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <div className="group rounded-lg border border-secondary/15 bg-black/[0.02] p-6 transition-all duration-200 hover:border-primary hover:shadow-lg hover:shadow-primary/5 dark:border-white/10 dark:bg-white/[0.03]">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {exp.period}
                </span>

                <h4 className="mt-3 font-semibold">
                  {exp.role}{" "}
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary"
                  >
                    @ {exp.company}
                  </a>
                </h4>

                <p className="text-text_primary/80 dark:text-text_primary_dark/80 mt-2 text-sm">
                  {exp.summary}
                </p>

                <ul className="mt-4 space-y-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-text_primary/70 dark:text-text_primary_dark/70 flex items-start space-x-2 text-sm"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
