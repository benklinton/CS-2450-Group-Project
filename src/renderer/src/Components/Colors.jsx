import { useContext } from "react";
import { ColorContext } from "../Context/ColorContext";

export const ColorSelector = () => {
  const { handlePrimaryColorChange, handleSecondaryColorChange } = useContext(ColorContext);

  return (
    <div className="card text-white pb-2 h-100">
      <div className="sback h-50 mh-50 w-100 card-header justify-content-between p-2 align-items-center">
        <h5 className="m-0">Color Selector</h5>
      </div>

      <div className="card-body d-flex flex-column align-items-center gap-3 pback">
        {/* Primary Color Selector */}
        <div className="d-flex flex-column align-items-center">
          <label className="text-white mb-1">Primary Color</label>
          <input
            type="color"
            id="pcolor"
            onChange={handlePrimaryColorChange}
            className="form-control form-control-color"
            style={{ width: "50px", height: "50px", border: "none" }}
          />
        </div>

        {/* Secondary Color Selector */}
        <div className="d-flex flex-column align-items-center">
          <label className="text-white mb-1">Secondary Color</label>
          <input
            type="color"
            id="scolor"
            onChange={handleSecondaryColorChange}
            className="form-control form-control-color"
            style={{ width: "50px", height: "50px", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};
