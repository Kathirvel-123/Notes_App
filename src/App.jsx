import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Trash from "./pages/Trash";
import { useNotes } from "./hooks/useNotes";

const App = () => {
  const notesApi = useNotes(); 

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
        <nav className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/70 backdrop-blur-lg">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
            <span className="text-base font-semibold tracking-tight text-white sm:text-lg">
              <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
                NoteNest
              </span>
            </span>

            <div className="flex gap-2 text-xs sm:text-sm">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                Notes
              </NavLink>
              <NavLink
                to="/archive"
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                Archive
              </NavLink>
              <NavLink
                to="/trash"
                className={({ isActive }) =>
                  `rounded-full px-3 py-1.5 font-medium transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-indigo-500/30"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                Trash
              </NavLink>
            </div>
          </div>
        </nav>

        <main className="pb-10">
          <Routes>
            <Route path="/" element={<Home {...notesApi} />} />
            <Route path="/archive" element={<Archive {...notesApi} />} />
            <Route path="/trash" element={<Trash {...notesApi} />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
