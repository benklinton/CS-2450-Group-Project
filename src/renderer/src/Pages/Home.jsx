import { Console } from "../Components/Console";
import { Files } from "../Components/Files";
import { Memory } from "../Components/Memory";

export const HomePage = () => {
  return (
    <div className="container home-container">
      <div className="row mh-100">
        <div className="col-8 h-100 mh-100">
          <Console />
        </div>
        <div className="col-4 d-flex flex-column gap-3 max-height">
          <Files />
          <Memory />
        </div>
      </div>
    </div>
  );
};
