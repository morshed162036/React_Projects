import "./App.css";
import Header from "./component/ui/header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterGrid from "./component/character/CharacterGrid";
import Search from "./component/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.warn(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItem();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search
        getQuery={(q) => {
          setQuery(q);
        }}
      />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
