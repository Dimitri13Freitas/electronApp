import React from "react";

export const Select = ({ options, ...props }) => {
  return (
    <select {...props}>
      <option value="">Selecione</option>
      {options.map((e, i) => (
        <option key={i} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
};

