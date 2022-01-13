import React from 'react'

function RamComponent({allRams, filterItemsByRam}) {
    return (
      <>
        <div className="row mt-4">
          <p>Ram:</p>
          {allRams.map((ram, index) => (
              <button
                className="btn"
                key={index}
                onClick={() => filterItemsByRam(ram)}
              >
                {ram}
              </button>
          ))}
        </div>
      </>
    );
}

export default RamComponent
