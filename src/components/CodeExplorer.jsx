import { useState } from "react";

export default function CodeExplorer({ data }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* File List */}
      <div className="col-span-1">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Files</h2>
          <ul className="space-y-2">
            {data.map((item, idx) => (
              <li
                key={idx}
                onClick={() => setSelected(item)}
                className={`px-4 py-2 rounded-md cursor-pointer transition ${
                  selected?.file === item.file
                    ? "bg-blue-100 text-blue-800 font-semibold"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {item.file.split("\\").pop()}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* File Details */}
      {selected && (
        <div className="col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            {selected.file}
          </h2>

          <p className="text-gray-800 mb-4">
            <strong>Summary:</strong> {selected.insight.file_summary}
          </p>

          <p className="text-gray-600 italic mb-6">
            {selected.insight.complexity_notes}
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">Methods</h3>

          {selected.insight.methods.length > 0 ? (
            <ul className="space-y-4">
              {selected.insight.methods.map((method, i) => (
                <li
                  key={i}
                  className="p-4 border border-gray-200 rounded-md bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="flex justify-between items-center mb-1">
                    <strong className="text-blue-700">
                      {method.signature}
                    </strong>
                  </div>
                  <p className="text-gray-700 text-sm">{method.description}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No methods found.</p>
          )}
        </div>
      )}
    </div>
  );
}
