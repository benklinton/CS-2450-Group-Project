import { useContext, useState } from "react";
import { ColorContext } from "../Context/ColorContext";
import React from "react";

export const ColorSelector = () => {
  const { handlePrimaryColorChange, handleSecondaryColorChange } =
    useContext(ColorContext);
  const [primaryColor, updatePColor] = useState("#4C721D");
  const [secondaryColor, updateSColor] = useState("#d2e1b6");

  return (
    <div className="card text-white mb-5 h-100 color-container">
      <div className="sback h-50 mh-50 w-100 card-header justify-content-between p-2 align-items-center">
        <h5 className="m-0">Color Selector</h5>
      </div>

      <div className="card-body d-flex flex-column align-items-center gap-3 pback">
        {/* Primary Color Selector */}
        <div className="d-flex flex-column align-items-center">
          <label className="text-white mb-1">Primary Color</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => {
              handlePrimaryColorChange(e);
              updatePColor(e.target.value);
            }}
            className="form-control form-control-color"
            style={{ width: "50px", height: "50px", border: "none" }}
          />
        </div>

        {/* Secondary Color Selector */}
        <div className="d-flex flex-column align-items-center">
          <label className="text-white mb-1">Secondary Color</label>
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => {
              handleSecondaryColorChange(e);
              updateSColor(e.target.value);
            }}
            className="form-control form-control-color"
            style={{ width: "50px", height: "50px", border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};
