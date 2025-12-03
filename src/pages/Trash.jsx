import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";

const Trash = ({
  trashedNotes,
  restoreFromTrash,
  deleteForever,
  search,
  setSearch,
}) => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-6 lg:py-8">
      <header className="mb-4 flex flex-col gap-1 sm:mb-6">
        <h1 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
          Trash
        </h1>
        <p className="text-xs text-slate-300 sm:text-sm">
          Recover notes or delete them permanently.
        </p>
      </header>

      <div className="mb-4 rounded-2xl bg-white/5 p-3 shadow-xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-lg sm:p-4">
        <SearchBar
          search={search}
          setSearch={setSearch}
          placeholder="Search trashed notes..."
        />
      </div>

      {trashedNotes.length === 0 ? (
        <div className="flex min-h-[140px] items-center justify-center rounded-2xl border border-dashed border-slate-600/70 bg-slate-900/60 px-4 py-6 text-center text-sm text-slate-200 backdrop-blur">
          Trash is empty.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trashedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              mode="trash"
              onRestore={restoreFromTrash}
              onDeleteForever={deleteForever}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Trash;
