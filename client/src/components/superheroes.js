import React, { useEffect, useState } from "react";
import axios from "axios";

export default () => {
  const [slug, setSlug] = useState("");
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      let fetch = await axios.get("http://localhost:1337/api/heroes");

      setHeroes(fetch.data);
      console.log(fetch.data);
    };

    fetchHeroes();
  }, []);

  return (
    <div className="page">
      <div className="title">Meet the Heroes</div>
      <div className="subtitle">
        A searchable list of all your favorite heroes
      </div>
      <input
        type="text"
        name="search"
        onChange={(event) => setSlug(event.target.value)}
      />
      <div className="slug">{slug}</div>
    </div>
  );
};
