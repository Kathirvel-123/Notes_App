const NoteCard = ({
  note,
  onEdit,
  onDelete,
  onPin,
  onArchive,
  onRestore,
  onDeleteForever,
  mode = "default",
}) => {
  return (
    <div className="group flex h-full flex-col rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-lg transition hover:-translate-y-1 hover:bg-white/10">
      <div className="mb-2 flex items-start justify-between gap-2">
        <h3 className="line-clamp-1 text-sm font-semibold text-white md:text-base">
          {note.title || "Untitled note"}
        </h3>
        {note.pinned && mode === "default" && (
          <span className="rounded-full bg-amber-400/20 px-2 py-0.5 text-xs font-medium text-amber-200 ring-1 ring-amber-300/40">
            Pinned
          </span>
        )}
      </div>

      <p className="mb-3 flex-1 text-xs text-slate-200/90 md:text-sm line-clamp-4">
        {note.description}
      </p>

      {note.tags && note.tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-indigo-500/15 px-2 py-0.5 text-[10px] font-medium text-indigo-200 ring-1 ring-indigo-400/40 md:text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center justify-between pt-2 text-[10px] text-slate-400 md:text-xs">
        <span>
          {new Date(note.updatedAt || note.createdAt).toLocaleDateString()}
        </span>
        <div className="flex flex-wrap items-center gap-1 text-[11px] md:text-xs">
          {mode === "default" && (
            <>
              <button
                onClick={() => onPin(note.id)}
                className={`rounded-full px-2 py-0.5 transition ${
                  note.pinned
                    ? "bg-amber-400/20 text-amber-100 ring-1 ring-amber-300/50 hover:bg-amber-400/30"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                {note.pinned ? "Unpin" : "Pin"}
              </button>
              <button
                onClick={() => onArchive(note.id)}
                className="rounded-full px-2 py-0.5 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                Archive
              </button>
              <button
                onClick={() => onEdit(note)}
                className="rounded-full px-2 py-0.5 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(note.id)}
                className="rounded-full px-2 py-0.5 text-rose-300 transition hover:bg-rose-500/20"
              >
                Trash
              </button>
            </>
          )}

          {mode === "archive" && (
            <>
              <button
                onClick={() => onArchive(note.id)}
                className="rounded-full px-2 py-0.5 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                Unarchive
              </button>
              <button
                onClick={() => onDelete(note.id)}
                className="rounded-full px-2 py-0.5 text-rose-300 transition hover:bg-rose-500/20"
              >
                Trash
              </button>
            </>
          )}

          {mode === "trash" && (
            <>
              <button
                onClick={() => onRestore(note.id)}
                className="rounded-full px-2 py-0.5 text-emerald-200 transition hover:bg-emerald-500/20"
              >
                Restore
              </button>
              <button
                onClick={() => onDeleteForever(note.id)}
                className="rounded-full px-2 py-0.5 text-rose-300 transition hover:bg-rose-500/25"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
