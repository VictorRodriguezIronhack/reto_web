import React from "react";

function ProcessorComponent({ allProcessors, filterItemsByProcessor }) {
  return (
    <>
      <div className="row mt-4">
        <p>Processor:</p>
        {allProcessors.map((processor, index) => (
            <button
              className="btn"
              key={index}
              onClick={() => filterItemsByProcessor(processor)}
            >
              {processor}
            </button>
        ))}
      </div>
    </>
  );
}

export default ProcessorComponent;
