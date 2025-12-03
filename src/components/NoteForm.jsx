import { useEffect, useState } from "react";
import TagsInput from "./TagsInput";

const NoteForm = ({ onSave, editing, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title || "");
      setDescription(editing.description || "");
      setTags(Array.isArray(editing.tags) ? editing.tags : []);
    } else {
      setTitle("");
      setDescription("");
      setTags([]);
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !description.trim()) return;

    onSave({
      ...(editing || {}),
      title: title.trim(),
      description: description.trim(),
      tags,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white/5 p-4 shadow-xl shadow-black/40 ring-1 ring-white/10 backdrop-blur-lg sm:p-6"
    >
      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-slate-900/40 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          placeholder="Note title"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
          Description
        </label>
        <textarea
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-slate-900/40 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          placeholder="Write your note…"
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
          Tags
        </label>
        <TagsInput value={tags} onChange={setTags} />
      </div>

      <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:justify-end">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="w-full rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 sm:w-auto"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:from-indigo-400 hover:to-fuchsia-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:w-auto"
        >
          {editing ? "Update Note" : "Add Note"}
        </button>
      </div>
    </form>
  );
};

export default NoteForm;
