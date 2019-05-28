import React from "react";

const Tile = props => {
  return (
    <div className="Tile">
      <input
        type="number"
        min="1"
        max="9"
        id={props.id}
        tile={props.tile}
        disabled={props.disabled}
        value={!isNaN(props.tile) ? props.tile : ""}
        onChange={props.onChange}
        // {...props}
      />
    </div>
  );
};

export default Tile;
