const FilterTags = ({ allTags, tagFilter, setTagFilter }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => setTagFilter("all")}
        className={`rounded-full px-3 py-1 text-xs md:text-sm transition ${
          tagFilter === "all"
            ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30"
            : "bg-slate-900/40 text-slate-200 ring-1 ring-white/15 hover:bg-slate-900/60"
        }`}
      >
        All
      </button>
      {allTags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => setTagFilter(tag)}
          className={`rounded-full px-3 py-1 text-xs md:text-sm transition ${
            tagFilter === tag
              ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30"
              : "bg-slate-900/40 text-slate-200 ring-1 ring-white/15 hover:bg-slate-900/60"
          }`}
        >
          #{tag}
        </button>
      ))}
    </div>
  );
};

export default FilterTags;
