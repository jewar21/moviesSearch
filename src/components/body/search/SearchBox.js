import React from "react";

import { InputText } from "primereact/inputtext";

import '../../../styles/styles.scss'

export const SearchBox = (props) => {
  return (
    <div className="search-box-content">
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
