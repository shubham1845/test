import { useState } from "react";
export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample list of items to filter
  const items = ["Ram", "Harry", "Krishna", "Gopal", "Pritam", "Tiger"];

  // Filtered items based on search query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search items..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul className="space-y-2">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded-lg shadow-sm">
              {item}
            </li>
          ))
        ) : (
          <li className="p-2 text-gray-500">No items found</li>
        )}
      </ul>
    </div>
  );
}
