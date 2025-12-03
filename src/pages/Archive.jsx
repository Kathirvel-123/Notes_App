import NoteCard from "../components/NoteCard";
import FilterTags from "../components/FilterTags";
import SearchBar from "../components/SearchBar";

const Archive = ({
  archivedNotes,
  softDelete,
  toggleArchive,
  search,
  setSearch,
  tagFilter,
  setTagFilter,
  allTags,
}) => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-6 lg:py-8">
      
      <header className="mb-4 flex flex-col gap-1 sm:mb-6">
        <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Archive
        </h1>
        <p className="text-xs text-slate-300 sm:text-sm">
          Notes moved to archive. Unarchive or move them to trash anytime.
        </p>
      </header>

     
      <div className="mb-4 grid gap-3 rounded-2xl bg-white/5 p-3 shadow-xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-lg sm:p-4 lg:grid-cols-[2fr,1fr] lg:gap-4">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Search archived notes..."
        />
        <FilterTags
          allTags={allTags}
          tagFilter={tagFilter}
          setTagFilter={setTagFilter}
        />
      </div>

      
      {archivedNotes.length === 0 ? (
        <div className="flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-slate-600/70 bg-slate-900/60 px-4 py-6 text-center text-sm text-slate-200 backdrop-blur">
          No archived notes.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {archivedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              mode="archive"
              onArchive={toggleArchive} 
              onDelete={softDelete} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Archive;
