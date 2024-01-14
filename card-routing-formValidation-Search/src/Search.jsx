import { useState, useEffect } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() === "") {
        setResults([]);
        return;
      }

      setLoading(true);

      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=${searchTerm}`
        );
        const data = await response.json();

        if (response.ok) {
          setResults(data.items);
        } else {
          console.error("Error fetching data:", data.message);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchTerm]);

  function handleInputChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div>
      <h2>GitHub Repository Search</h2>
      <input
        type="text"
        placeholder="Enter repository name"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {/* when it takes time to display data then this Loading... runs */}
      {loading && <p>Loading...</p>}

      {results.length > 0 && (
        <ul>
          {results.map((repo) => (
            <li key={repo.id}>
              <strong>{repo.name}</strong> - {repo.description}
            </li>
          ))}
        </ul>
      )}

      {results.length >= 1 && !loading && <p>No results found.</p>}
    </div>
  );
}
