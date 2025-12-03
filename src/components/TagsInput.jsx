
import { useState } from "react";

const TagsInput = ({ value, onChange }) => {
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = input.trim();
      if (!newTag) return;
      if (!value.includes(newTag)) {
        onChange([...value, newTag]);
      }
      setInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    onChange(value.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-wrap gap-2 rounded-lg border border-slate-300 px-2 py-1">
      {value.map((tag) => (
        <span
          key={tag}
          className="flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700"
        >
          #{tag}
          <button
            type="button"
            onClick={() => removeTag(tag)}
            className="text-[10px] text-slate-500 hover:text-slate-800"
          >
            ×
          </button>
        </span>
      ))}
      <input
        className="flex-1 border-none text-sm outline-none min-w-[80px]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={value.length === 0 ? "Type a tag and press Enter" : ""}
      />
    </div>
  );
};

export default TagsInput;
