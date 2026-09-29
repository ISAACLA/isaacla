"use client";

import { useState } from "react";
import { roles } from "@/lib/profile";

export function Experience() {
  const [activeId, setActiveId] = useState(roles[0].id);
  const active = roles.find((role) => role.id === activeId) ?? roles[0];

  return (
    <div className="experience">
      <div className="role-list" role="tablist" aria-label="Roles">
        {roles.map((role) => {
          const selected = role.id === active.id;
          return (
            <button
              key={role.id}
              type="button"
              role="tab"
              id={`tab-${role.id}`}
              aria-selected={selected}
              aria-controls="role-panel"
              className={selected ? "role-tab is-active" : "role-tab"}
              onClick={() => setActiveId(role.id)}
            >
              <span className="role-index">{role.index}</span>
              <span className="role-company">{role.company}</span>
              <span className="role-when">
                {role.end === "Present"
                  ? "Now"
                  : `${role.start.slice(-2)}–${role.end.slice(-2)}`}
              </span>
            </button>
          );
        })}
      </div>

      <article
        id="role-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        className="role-panel"
        key={active.id}
      >
        <p className="role-panel-index">{active.index}</p>
        <p className="eyebrow">{active.title}</p>
        <h3>{active.company}</h3>
        <p className="role-meta">
          {active.start} — {active.end}
          <span aria-hidden="true"> · </span>
          {active.place}
        </p>
        <p className="role-summary">{active.summary}</p>
        <ul className="role-points">
          {active.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
