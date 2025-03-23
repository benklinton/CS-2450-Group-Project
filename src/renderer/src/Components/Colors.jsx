export const ColorSelector = () => {
  let primaryColor = "#808080";
  let secondaryColor = "#000000";
  Array.from(document.getElementsByClassName('bg-primary')).forEach((elem) => {
    elem.style.backgroundColor = "#808080";
  });
  Array.from(document.getElementsByClassName('bg-secondary')).forEach((elem) => {
    elem.style.backgroundColor = "#000000";
  });
  // Handle primary color change
  const handlePrimaryColorChange = (e) => {
    Array.from(document.getElementsByClassName('bg-primary')).forEach((elem) => {
      elem.style.backgroundColor = e.target.value;
    });
    document.getElementById("top").style.backgroundColor = e.target.value;
    primaryColor = e.target.value;
  };

  // Handle secondary color change
  const handleSecondaryColorChange = (e) => {
    Array.from(document.getElementsByClassName('bg-secondary')).forEach((elem) => {
      elem.style.backgroundColor = e.target.value;
    });
    document.getElementById("full").style.backgroundColor = e.target.value;
    secondaryColor = e.target.value;
  };

  return (
    <div className="card text-white pb-2 h-100">

      {/* Card Header with dynamic secondary color 
      */}
      <div className="bg-secondary" id="top">
        <h5 className="m-0">Color Selector</h5>
      </div>

      {/* Card Body with dynamic primary color */}
      <div className="card-body d-flex flex-column align-items-center gap-3 bg-primary" id="full">
        {/* Primary Color Selector */}
        <div className="d-flex flex-column align-items-center">
          <label className="text-white mb-1">Primary Color</label>
          <input
            type="color"
            onChange={handlePrimaryColorChange}
            className="form-control form-control-color"
            style={{ width: "50px", height: "50px", border: "none"}}
          />
        </div>

        {/* Secondary Color Selector */}
        <div className="d-flex flex-column align-items-center">
          <label className="text-white mb-1">Secondary Color</label>
          <input
            type="color"
            onChange={handleSecondaryColorChange}
            className="form-control form-control-color"
            style={{ width: "50px", height: "50px", border: "none"}}
          />
        </div>
      </div>
    </div>
  );
};
