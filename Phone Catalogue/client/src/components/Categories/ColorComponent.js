import React from "react";

function ColorComponent({ allColors, filterItemsByColor }) {
  return (
    <>
      <div className="row mt-4">
        <p>Colors:</p>
        {allColors.map((color, index) => (
          <button
            className="btn"
            key={index}
            onClick={() => filterItemsByColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </>
  );
}

export default ColorComponent;
