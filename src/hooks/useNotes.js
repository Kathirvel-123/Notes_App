import { useEffect, useState, useMemo } from "react";
import { loadNotes, saveNotes } from "../utils/localStorage";

export const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [tagFilter, setTagFilter] = useState("all");

  useEffect(() => {
    const loaded = loadNotes();
    const normalized = loaded.map((n) => ({
      ...n,
      tags: Array.isArray(n.tags) ? n.tags : [],
    }));
    setNotes(normalized);
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const createNote = (note) => {
    setNotes((prev) => [
      {
        ...note,
        id: Date.now(),
        pinned: false,
        archived: false,
        trashed: false,
        tags: Array.isArray(note.tags) ? note.tags : [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const updateNote = (updated) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === updated.id
          ? {
              ...n,
              ...updated,
              tags: Array.isArray(updated.tags) ? updated.tags : [],
              updatedAt: new Date().toISOString(),
            }
          : n
      )
    );
  };

  const softDelete = (id) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, trashed: true, pinned: false } : n
      )
    );
  };

  const deleteForever = (id) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const restoreFromTrash = (id) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, trashed: false } : n))
    );
  };

  const togglePin = (id) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, pinned: !n.pinned } : n
      )
    );
  };

  const toggleArchive = (id) => {
    setNotes((prev) =>
      prev.map((n) =>
        n.id === id
          ? { ...n, archived: !n.archived, pinned: false }
          : n
      )
    );
  };

  const allTags = useMemo(
    () =>
      Array.from(
        new Set(
          notes
            .filter((n) => !n.trashed)
            .flatMap((n) => n.tags || [])
        )
      ).sort(),
    [notes]
  );

  const applyFilters = (list) =>
    list
      .filter((n) =>
        (n.title + " " + n.description)
          .toLowerCase()
          .includes(search.toLowerCase())
      )
      .filter(
        (n) => tagFilter === "all" || (n.tags || []).includes(tagFilter)
      )
      .sort((a, b) => Number(b.pinned) - Number(a.pinned));

  const activeNotes = applyFilters(
    notes.filter((n) => !n.archived && !n.trashed)
  );
  const archivedNotes = applyFilters(
    notes.filter((n) => n.archived && !n.trashed)
  );
  const trashedNotes = applyFilters(notes.filter((n) => n.trashed));

  return {
    notes,
    activeNotes,
    archivedNotes,
    trashedNotes,
    search,
    setSearch,
    tagFilter,
    setTagFilter,
    allTags,
    createNote,
    updateNote,
    softDelete,
    deleteForever,
    restoreFromTrash,
    togglePin,
    toggleArchive,
  };
};
