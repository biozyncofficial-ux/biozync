import React from "react";

export default function TreeStats({ co2, o2 }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-green-100 p-4 rounded shadow">
        <h3 className="font-bold text-green-700">CO₂ Absorption</h3>
        <p>{co2.toFixed(2)} kg/year</p>
      </div>
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="font-bold text-blue-700">O₂ Release</h3>
        <p>{o2.toFixed(2)} kg/year</p>
      </div>
    </div>
  );
}
