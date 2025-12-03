import { useState } from "react";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";
import FilterTags from "../components/FilterTags";

const Home = ({
  activeNotes,
  createNote,
  updateNote,
  softDelete,
  togglePin,
  toggleArchive,
  search,
  setSearch,
  tagFilter,
  setTagFilter,
  allTags,
}) => {
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSave = (note) => {
    if (editing) {
      updateNote(note);
    } else {
      createNote(note);
    }
    setEditing(null);
    setShowForm(false);
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 sm:py-6 lg:py-8">
      
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Notes
          </h1>
          <p className="text-xs text-slate-300 sm:text-sm">
            Create, search, pin, tag and organize your notes.
          </p>
        </div>

        <button
          onClick={() => {
            setShowForm((s) => !s);
            setEditing(null);
          }}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:from-indigo-400 hover:to-fuchsia-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        >
          {showForm ? "Close" : "Add Note"}
        </button>
      </header>

     
      <section className="grid gap-3 rounded-2xl bg-white/5 p-3 shadow-xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-lg sm:p-4 lg:grid-cols-[2fr,1fr] lg:gap-4">
        <div className="space-y-3">
          <SearchBar
            search={search}
            setSearch={setSearch}
            placeholder="Search notes by title or content..."
          />

          <FilterTags
            allTags={allTags}
            tagFilter={tagFilter}
            setTagFilter={setTagFilter}
          />
        </div>
      </section>

      
      {showForm && (
        <section>
          <NoteForm
            editing={editing}
            onSave={handleSave}
            onCancel={() => {
              setEditing(null);
              setShowForm(false);
            }}
          />
        </section>
      )}

      
      <section className="mt-2">
        {activeNotes.length === 0 ? (
          <div className="flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-600/70 bg-slate-900/60 px-4 py-8 text-center backdrop-blur">
            <p className="text-sm font-medium text-slate-100">No notes yet.</p>
            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
              Click “Add Note” to create your first note.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeNotes.map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                onEdit={(n) => {
                  setEditing(n);
                  setShowForm(true);
                }}
                onDelete={softDelete}
                onPin={togglePin}
                onArchive={toggleArchive}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
