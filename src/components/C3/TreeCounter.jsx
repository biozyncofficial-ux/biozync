import React from "react";

export default function TreeCounter({ value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold mb-2">Number of Trees:</label>
      <input
        type="number"
        value={value}
        min="0"
        className="border p-2 rounded w-32"
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

