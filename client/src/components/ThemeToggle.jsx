import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const html = document.documentElement;
    if (enabled) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [enabled]);

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className="sr-only"
        />
        <div className="block w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${
            enabled ? "translate-x-4" : ""
          }`}
        ></div>
      </div>
    </label>
  );
}
