import React from "react";

import { InputText } from "primereact/inputtext";

export const SearchBox = (props) => {
  return (
    <div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          placeholder="Search for movies"
          value={props.value}
          onChange={(e) => props.setSearchValue(e.target.value)}
        />
      </span>
    </div>
  );
};
