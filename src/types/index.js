
export const createEmptyNote = () => ({
  id: Date.now(),
  title: "",
  description: "",
  tags: [],
  pinned: false,
  archived: false,
  trashed: false,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});
