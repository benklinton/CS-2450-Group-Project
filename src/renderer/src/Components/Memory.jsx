import { GlobalContext } from "../Context/GlobalContext";
import { useContext } from "react";

export const Memory = () => {
  const { vm } = useContext(GlobalContext);
  return (
    <div className="bg-dark h-50 mh-50 overflow-scroll">
      <div className="d-flex flex-column">
        {vm?.memory?.words?.map((cell, index) => (
          <div key={index} className="w-100 d-flex gap-3 d-grid text-center">
            <span className="bg-secondary col-1 text-white">{index}</span>
            <span className="text-white">{cell}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
