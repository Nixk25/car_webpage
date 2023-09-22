"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const handleSubmit = () => {};

  const [manufacturer, setManufacturer] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
