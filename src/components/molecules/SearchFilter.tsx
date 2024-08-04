"use client";
import { useState } from "react";

interface SearchFilterProps {
  onSearch: (query: string, criteria: string) => void;
}

export default function SearchFilter({ onSearch }: SearchFilterProps) {
  const [query, setQuery] = useState<string>("");
  const [criteria, setCriteria] = useState<string>("name");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleChangeCriteria = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCriteria(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query, criteria);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <select value={criteria} onChange={(e) => handleChangeCriteria(e)}>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
