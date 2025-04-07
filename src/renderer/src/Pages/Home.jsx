import { Console } from "../Components/Console";
import { Files } from "../Components/Files";
import { Memory } from "../Components/Memory";
import { ColorSelector } from "../Components/Colors";
import React from "react";
import TabContainer from "../Components/TabContainer";

export const HomePage = () => {
  return (
    <div className="container home-container bg-light pt-3">
      <TabContainer />
      <div className="row mh-100 g-3">
        <div className="col-lg-8 h-100 mh-100">
          <Console />
        </div>
        <div className="col-lg-4 d-flex flex-column gap-3 max-height">
          <Memory />
          <Files />
          <ColorSelector />
        </div>
      </div>
    </div>
  );
};
