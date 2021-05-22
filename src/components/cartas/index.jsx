import * as React from "react";

const Cartitas = ({ idx, incendio }) => {
  return (
    <div key={idx} className="cartita">
      {incendio.days > 15 ? (
        <span className="grave">Incendio grave</span>
      ) : (
        <span className="reciente">Incendio reciente</span>
      )}

      <h5>{incendio.name}</h5>
      <b>daño actual: </b>
      <span>{incendio.area}</span>
    </div>
  );
};

export default Cartitas;
