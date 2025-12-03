# NoteNest – React Notes App

NoteNest is a responsive notes management application built with React and Vite. It lets you create, tag, search, pin, archive, and trash notes in a modern dark “glass” themed interface.

##  Features

- Create, edit, and delete notes with title and description  
- Add tags to notes and filter notes by tag  
- Search notes by title or description  
- Pin important notes to keep them on top of the main list  
- Archive notes to keep the home view clean  
- Trash system with restore and permanent delete  
- Fully responsive layout from mobile to large desktop screens  
- Local persistence using `localStorage` (no backend required)  

##  Tech Stack

- **Frontend:** React, Vite  
- **Routing:** React Router DOM  
- **Styling:** Tailwind CSS (utility-first, dark glassmorphism theme)  
- **State & Data:** React hooks + custom `useNotes` hook, `localStorage`  

##  Project Structure
```
notes-app/
├── public/
├── src/
│ ├── components/
│ │ ├── NoteCard.jsx # Note display card + actions
│ │ ├── NoteForm.jsx # Create / edit note form with tags
│ │ ├── SearchBar.jsx # Search input
│ │ ├── FilterTags.jsx # Tag filter chips
│ │ └── TagsInput.jsx # Add/remove tags for a note
│ ├── hooks/
│ │ └── useNotes.js # All notes logic + localStorage sync
│ ├── pages/
│ │ ├── Home.jsx # Active notes, form, search, filters
│ │ ├── Archive.jsx # Archived notes page
│ │ └── Trash.jsx # Trash page
│ ├── utils/
│ │ └── localStorage.js # Helpers for reading/writing notes
│ ├── App.jsx # Layout + routes
│ ├── main.jsx # React entry point
│ └── index.css # Tailwind directives + global styles
├── index.html
├── package.json
└── README.md
```
## Installation

1. Clone the repo
```
git clone https://github.com/Kathirvel-123/Notes_App.git
```
2. Install dependencies
```
npm install
```

3. Development
- Start dev server
```
npm run dev
```
---
##  Usage

- Click **“Add Note”** to open the note form.  
- Fill in **Title**, **Description**, and optional **Tags**.  
- Use the **Search bar** to filter notes by title or description.  
- Use **Tag chips** to quickly filter notes by a specific tag.  
- Use **Pin** to keep important notes at the top of the Home page.  
- Use **Archive** to move notes to the Archive page.  
- Use **Trash** to send notes to Trash; from there you can **Restore** or **Delete** permanently.

Pages:

- **Home:** Active notes with create/edit, pin, archive, search, and tag filter.  
- **Archive:** Archived notes that can be unarchived or moved to Trash.  
- **Trash:** Soft-deleted notes that can be restored or permanently deleted.
---
##  Possible Improvements

- Dark / light theme toggle  
- Rich-text editor for note content  
- User authentication and cloud sync  
- Sorting by date or pinned status  
- Color labels or categories for notes  

---
