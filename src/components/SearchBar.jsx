const SearchBar = ({ search, setSearch, placeholder }) => {
  return (
    <div className="flex items-center gap-2 rounded-full bg-slate-900/50 px-3 py-2 text-sm text-slate-100 ring-1 ring-white/15 backdrop-blur-lg">
      <span className="hidden text-slate-400 sm:inline">🔍</span>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none sm:text-sm"
      />
    </div>
  );
};

export default SearchBar;
