export const MemoryItem = ({ loc, value, selected }) => {
  return (
    <div
      key={loc}
      className={`w-100 d-flex gap-3 d-grid text-center ${
        selected ? "bg-primary" : ""
      }`}
    >
      <span className={`${selected ? "" : "bg-secondary text-white"} col-1`}>
        {loc}
      </span>
      <span className={`${selected ? "" : "text-white"}`}>{value}</span>
    </div>
  );
};
