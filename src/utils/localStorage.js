const NOTES_KEY = "notes_app_notes";

export const loadNotes = () => {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveNotes = (notes) => {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};
