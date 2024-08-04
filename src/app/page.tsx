"use client";
import SearchFilter from "@/components/molecules/SearchFilter";
import { useState } from "react";

interface DataItem {
  name: string;
  email: string;
  phone: string;
}

export default function Home() {
  const [result, setResult] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async (query: string, criteria: string) => {
    setLoading(true);

    setTimeout(() => {
      const dummyData: DataItem[] = [
        {
          name: "John Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
        },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          phone: "987-654-3210",
        },
      ];

      const filteredResult = dummyData
        .filter((item) =>
          item[criteria as keyof typeof item]
            .toLowerCase()
            .includes(query.toLowerCase())
        )
        .map((item: any) => item[criteria]);

      setResult(filteredResult);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Search Filter Training</h1>
      <SearchFilter onSearch={handleSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {result.map((res, idx) => (
            <li key={idx}>{res}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
