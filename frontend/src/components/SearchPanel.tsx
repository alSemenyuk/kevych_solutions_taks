// import { useState } from "react";

import { InputPanel } from "./InputPanel";

interface Props {
  searchPanel: string
  handleSetSearchPanel: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchPanel: React.FC<Props> = ({
  searchPanel,
  handleSetSearchPanel
}) => {

  return (
    <nav className="panel">
      <div className="panel-block">
        <p className="control has-icons-left">
          
          <InputPanel 
            type={"search"}
            placeholder={"Search"}
            value={searchPanel}
            handleOnChange={handleSetSearchPanel}
          />

          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true" />
          </span>
        </p>
      </div>
    </nav>
  );
};
