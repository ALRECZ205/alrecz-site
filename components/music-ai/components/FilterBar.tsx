import React from "react";
import type { MusicCategory } from "../types";

type FilterBarProps = {
  categories: MusicCategory[];
  active: MusicCategory | "ALL";
  onChange: (cat: MusicCategory | "ALL") => void;
};

export default function FilterBar({
  categories,
  active,
  onChange,
}: FilterBarProps) {
  return (
    <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-white/10 py-4 px-6 md:px-12 flex gap-8 overflow-x-auto no-scrollbar">
      <button
        onClick={() => onChange("ALL")}
        className={`text-sm md:text-base whitespace-nowrap uppercase tracking-wider transition-all ${
          active === "ALL"
            ? "text-alrecz-blood font-bold"
            : "text-gray-500 hover:text-white"
        }`}
      >
        All Broadcasts
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`text-sm md:text-base whitespace-nowrap uppercase tracking-wider transition-all ${
            active === cat
              ? "text-alrecz-blood font-bold"
              : "text-gray-500 hover:text-white"
          }`}
        >
          {cat}s
        </button>
      ))}
    </div>
  );
}