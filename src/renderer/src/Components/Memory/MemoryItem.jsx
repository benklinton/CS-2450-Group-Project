import { useState } from "react";
import React from "react";

export const MemoryItem = ({ loc, value, selected, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  value = value.toString();
  if (value.length == 5) {
    value = "0" + value;
  }

  const handleChange = (e) => {
    if (e.target.value === "") {
      onChange(loc, "");
    } else {
      // Only accept if value is a valid number (positive or negative)
      if (/^-?\d*$/.test(e.target.value)) {
        const numValue = parseInt(e.target.value);
        // Check if the number is within valid range (-9999 to 9999)
        if (!isNaN(numValue) && numValue >= -999249 && numValue <= 999249) {
          onChange(loc, e.target.value);
        }
        // If it's just a negative sign (not yet a complete number), still allow it
        else if (e.target.value === "-") {
          onChange(loc, e.target.value);
        }
      }
    }
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
    if (value === "") {
      onChange(loc, 0);
    }
  };

  return (
    <div
      key={loc}
      className={`w-100 d-flex gap-3 d-grid text-center ${
        selected ? "bg-primary" : ""
      }`}
    >
      <span
        className={`${
          selected ? "" : "bg-secondary"
        } text-white col-lg-2 col-2 d-flex justify-content-center align-items-center`}
      >
        {loc}
      </span>
      {onChange && (
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          onChange={handleChange}
          className={`${
            isFocused ? "form-control" : "border-0 bg-transparent text-white"
          }`}
        />
      )}
      {!onChange && <span className={`text-white`}>{value}</span>}
    </div>
  );
};
